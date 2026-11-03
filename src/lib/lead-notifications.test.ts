import { describe, it, expect, vi } from "vitest";
import { generateLeadNotificationEmailHtml, dispatchLeadNotification } from "./lead-notifications";

describe("lead-notifications", () => {
  const sampleLead = {
    name: "Dr. Ahmed Mansour",
    email: "ahmed@example.com",
    phone: "+20 100 123 4567",
    language: "ar" as const,
  };

  it("generates professional HTML email template with all recipient and lead details", () => {
    const html = generateLeadNotificationEmailHtml({
      ...sampleLead,
      message: "I am a liver transplant candidate looking for community guidance.",
    });

    expect(html).toContain("Dr. Ahmed Mansour");
    expect(html).toContain("ahmed@example.com");
    expect(html).toContain("+20 100 123 4567");
    expect(html).toContain("Second Chance Transplant Foundation");
    expect(html).toContain("cid:foundation-logo");
    expect(html).toContain("Bavly Hamdy");
    expect(html).toContain("wa.me/201001234567");
    expect(html).toContain("mailto:ahmed@example.com");
    expect(html).toContain("I am a liver transplant candidate looking for community guidance.");
    // Strict requirement: 100% English email template (no Arabic words in template)
    expect(html).not.toContain("مؤسسة");
    expect(html).not.toContain("تسجيل جديد");
  });

  it("gracefully queues or logs notification when RESEND_API_KEY is not configured", async () => {
    delete process.env["RESEND_API_KEY"];
    delete process.env["VITE_RESEND_API_KEY"];
    const fetchMock = vi.fn().mockRejectedValue(new Error("Network offline"));
    vi.stubGlobal("fetch", fetchMock);

    const result = await dispatchLeadNotification(sampleLead);

    expect(result.success).toBe(true);
    expect(result.recipient).toBe("bavly.hamdyai@gmail.com");
    expect(result.provider).toBe("mock_logged");

    vi.unstubAllGlobals();
  });

  it("calls FormSubmit when RESEND_API_KEY is not configured but FormSubmit succeeds", async () => {
    delete process.env["RESEND_API_KEY"];
    delete process.env["VITE_RESEND_API_KEY"];
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: "true" }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await dispatchLeadNotification(sampleLead);

    expect(result.delivered).toBe(true);
    expect(result.provider).toBe("formsubmit");
    expect(result.recipient).toBe("bavly.hamdyai@gmail.com");

    vi.unstubAllGlobals();
  });

  it("calls Resend API when RESEND_API_KEY is provided", async () => {
    process.env["RESEND_API_KEY"] = "re_test_123456789";
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: "email_123" }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await dispatchLeadNotification(sampleLead);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const callArgs = fetchMock.mock.calls[0];
    expect(callArgs).toBeDefined();
    expect(callArgs?.[0]).toBe("https://api.resend.com/emails");
    const init = callArgs?.[1] as RequestInit;
    const payload = JSON.parse(init.body as string);
    expect(payload.to).toEqual(["bavly.hamdyai@gmail.com"]);
    expect(payload.reply_to).toBe("ahmed@example.com");
    expect(payload.subject).toContain("Dr. Ahmed Mansour");
    expect(result.delivered).toBe(true);
    expect(result.provider).toBe("resend");

    delete process.env["RESEND_API_KEY"];
    vi.unstubAllGlobals();
  });
});
