type ErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportAppError(
  error: unknown,
  context: Record<string, unknown> = {},
  options?: ErrorOptions,
) {
  if (typeof window === "undefined") return;

  const stack = error instanceof Error ? error.stack : undefined;
  const message = describeThrown(error);

  console.error("[Application Error]", {
    message,
    stack,
    context,
    options,
    route: window.location.pathname,
  });
}

const MAX_SERIALIZED_LENGTH = 2000;

function describeThrown(error: unknown): string {
  if (error instanceof Response) {
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (error && typeof error === "object") {
    try {
      const json = JSON.stringify(error);
      if (json && json !== "{}") {
        return json.length > MAX_SERIALIZED_LENGTH
          ? `${json.slice(0, MAX_SERIALIZED_LENGTH)}...`
          : json;
      }
    } catch {
      // Fallback below
    }
  }
  return String(error);
}
