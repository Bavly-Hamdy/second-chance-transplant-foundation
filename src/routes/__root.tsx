import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";
import { LanguageProvider } from "../lib/languageContext";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": "https://secondchancetransplant.org/#organization",
      name: "Second Chance Transplant Foundation",
      alternateName: [
        "مؤسسة الفرصة الثانية لزراعة الأعضاء",
        "Second Chance Foundation",
        "SCTF",
      ],
      url: "https://secondchancetransplant.org",
      logo: {
        "@type": "ImageObject",
        "@id": "https://secondchancetransplant.org/#logo",
        url: "https://secondchancetransplant.org/Logo.png",
        contentUrl: "https://secondchancetransplant.org/Logo.png",
        caption: "Second Chance Transplant Foundation Official Crest",
      },
      image: "https://secondchancetransplant.org/Logo.png",
      description:
        "Humanitarian non-profit foundation standing beside organ transplant patients, living donors, and recipient families through every chapter of waiting, healing, and renewed life.",
      foundingDate: "2016-05-21",
      slogan: "A Second Chance • A New Life",
      knowsAbout: [
        "Organ Transplantation",
        "Liver Transplantation",
        "Kidney Transplantation",
        "Heart Transplantation",
        "Organ Donation Awareness",
        "Patient Advocacy",
        "Living Donors",
        "Transplant Recovery",
        "زراعة الأعضاء",
        "زراعة الكبد",
        "التبرع بالأعضاء",
        "دعم مرضى الزراعة",
      ],
      founder: {
        "@type": "Person",
        name: "Liver Transplant Recipient (May 21, 2016)",
        jobTitle: "Founder",
      },
      creator: {
        "@type": "Person",
        name: "Bavly Hamdy",
        url: "https://www.linkedin.com/in/bavly-hamdy",
      },
      sameAs: [
        "https://www.linkedin.com/in/bavly-hamdy",
        "https://secondchancetransplant.org",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://secondchancetransplant.org/#website",
      url: "https://secondchancetransplant.org",
      name: "Second Chance Transplant Foundation",
      alternateName: "مؤسسة الفرصة الثانية لزراعة الأعضاء",
      description:
        "Official platform and patient advocacy infrastructure standing beside organ transplant candidates, living donors, and families.",
      publisher: {
        "@id": "https://secondchancetransplant.org/#organization",
      },
      inLanguage: ["en", "ar", "fr", "es"],
    },
    {
      "@type": "WebPage",
      "@id": "https://secondchancetransplant.org/#webpage",
      url: "https://secondchancetransplant.org/",
      name: "Second Chance Transplant Foundation — A Sacred Bridge Between Heartbreak and Hope",
      isPartOf: {
        "@id": "https://secondchancetransplant.org/#website",
      },
      about: {
        "@id": "https://secondchancetransplant.org/#organization",
      },
      description:
        "Whether waiting for an organ transplant or embracing life on the other side of healing, please know: you are never alone. Established in honor of a 10-year liver transplant milestone.",
      inLanguage: ["en", "ar", "fr", "es"],
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Second Chance Transplant Foundation | A Second Chance, A New Life" },
      {
        name: "description",
        content:
          "Dedicated humanitarian foundation standing beside organ transplant patients, living donors, and families through every chapter of waiting, healing, and renewed life. Founded in celebration of a life-saving liver transplant on May 21, 2016.",
      },
      {
        name: "keywords",
        content:
          "Second Chance Transplant Foundation, organ transplant, liver transplant, kidney transplant, heart transplant, organ donation awareness, living donor advocacy, transplant recovery, May 21 2016, patient sanctuary, مؤسسة الفرصة الثانية لزراعة الأعضاء, زراعة الأعضاء, زراعة الكبد, التبرع بالأعضاء, دعم مرضى الزراعة",
      },
      { name: "author", content: "Bavly Hamdy" },
      { name: "creator", content: "Bavly Hamdy" },
      { name: "publisher", content: "Second Chance Transplant Foundation" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "bingbot",
        content: "index, follow, max-snippet:-1, max-image-preview:large",
      },

      /* Open Graph (Facebook, LinkedIn, Google Discover, WhatsApp) */
      { property: "og:site_name", content: "Second Chance Transplant Foundation" },
      {
        property: "og:title",
        content: "Second Chance Transplant Foundation | A Second Chance, A New Life",
      },
      {
        property: "og:description",
        content:
          "A sacred bridge between heartbreak and hope, and a brand new sunrise. Standing beside transplant candidates, living donors, and families through every chapter of healing.",
      },
      { property: "og:url", content: "https://secondchancetransplant.org/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "es_ES" },
      { property: "og:image", content: "https://secondchancetransplant.org/Logo.png" },
      { property: "og:image:secure_url", content: "https://secondchancetransplant.org/Logo.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Official Emblem of Second Chance Transplant Foundation — Dove, Sunrise, and Organ Donation Ribbon",
      },

      /* Twitter Cards */
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Second Chance Transplant Foundation | A Second Chance, A New Life",
      },
      {
        name: "twitter:description",
        content:
          "Standing beside organ transplant candidates, living donors, and recipient families through every chapter of hope and healing.",
      },
      { name: "twitter:image", content: "https://secondchancetransplant.org/Logo.png" },
      {
        name: "twitter:image:alt",
        content: "Second Chance Transplant Foundation Emblem",
      },

      /* Brand & Mobile Configuration */
      { name: "theme-color", content: "#0D1B2A" },
      { name: "color-scheme", content: "light" },
      { name: "application-name", content: "Second Chance Transplant Foundation" },
      { name: "apple-mobile-web-app-title", content: "Second Chance" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "canonical", href: "https://secondchancetransplant.org/" },
      { rel: "alternate", hrefLang: "en", href: "https://secondchancetransplant.org/" },
      { rel: "alternate", hrefLang: "ar", href: "https://secondchancetransplant.org/?lang=ar" },
      { rel: "alternate", hrefLang: "fr", href: "https://secondchancetransplant.org/?lang=fr" },
      { rel: "alternate", hrefLang: "es", href: "https://secondchancetransplant.org/?lang=es" },
      { rel: "alternate", hrefLang: "x-default", href: "https://secondchancetransplant.org/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=Cairo:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preload", as: "image", href: "/Logo.png", fetchPriority: "high" },
      { rel: "icon", href: "/Logo.png", type: "image/png" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/Logo.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
