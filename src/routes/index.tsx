import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { detectContactType, getSingleLeadSchema } from "@/lib/contact";
import { useLanguage } from "@/hooks/useLanguage";
import { notifyLeadServerFn } from "@/lib/lead-notifications";
import {
  Globe,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Loader2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

const LOGO_SRC = "/Logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Second Chance Transplant Foundation — Our Mission Begins Soon" },
      {
        name: "description",
        content:
          "There are moments in life when the world quiets down, and you find yourself holding your breath in the spaces between uncertainty and hope. Whether waiting or healing, you are never alone. Second Chance Transplant Foundation.",
      },
      { name: "author", content: "Bavly Hamdy" },
      { name: "creator", content: "Bavly Hamdy" },
      {
        property: "og:site_name",
        content: "Second Chance Transplant Foundation",
      },
      {
        property: "og:title",
        content: "Second Chance Transplant Foundation — Our Mission Begins Soon",
      },
      {
        property: "og:description",
        content:
          "A transplant is never just a medical procedure. It is a sacred bridge between heartbreak and hope, a profound act of human generosity, and a brand new sunrise.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secondchancetransplant.org/" },
      { property: "og:image", content: "https://secondchancetransplant.org/Logo.png" },
      { property: "og:image:secure_url", content: "https://secondchancetransplant.org/Logo.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Second Chance Transplant Foundation emblem" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Second Chance Transplant Foundation — Our Mission Begins Soon",
      },
      {
        name: "twitter:description",
        content:
          "A transplant is never just a medical procedure. It is a sacred bridge between heartbreak and hope, a profound act of human generosity, and a brand new sunrise.",
      },
      { name: "twitter:image", content: "https://secondchancetransplant.org/Logo.png" },
      { name: "twitter:image:alt", content: "Second Chance Transplant Foundation emblem" },
      { name: "twitter:creator", content: "Bavly Hamdy" },
    ],
    links: [{ rel: "canonical", href: "https://secondchancetransplant.org/" }],
  }),
  component: Index,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function Index() {
  const { isRtl } = useLanguage();

  return (
    <div
      className={`min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-amber-100 selection:text-[var(--navy)] overflow-x-hidden ${
        isRtl ? "rtl text-right" : "ltr text-left"
      }`}
    >
      {/* Ambient Sunrise Atmosphere Wash at Viewport Top */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-[70vh] -z-10 sunrise-subtle opacity-90"
      />

      {/* Elegant Header */}
      <Header />

      <main className="relative overflow-x-hidden pb-16 sm:pb-24">
        {/* Hero & Logo with Upward Radiant Sunrise Light */}
        <HeroSection />

        {/* The Foundation Manifesto & Letter */}
        <ManifestoSection />

        {/* Stay Connected Form */}
        <ConnectSection />
      </main>

      {/* Understated Executive Footer */}
      <Footer />
    </div>
  );
}

function Header() {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 sm:h-20 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-3 transition-opacity hover:opacity-90 max-w-[70%] sm:max-w-none"
        >
          <img
            src={LOGO_SRC}
            alt="Second Chance Transplant Foundation emblem"
            className="h-10 sm:h-12 w-auto object-contain shrink-0 drop-shadow-xs"
          />
          <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight text-[var(--navy)] truncate">
            {t.content.title}
          </span>
        </a>

        {/* Controls */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.ariaToggle}
            className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-stone-300/80 bg-[var(--card)] px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-semibold text-[var(--navy)] shadow-2xs transition hover:border-amber-400 hover:bg-stone-50 cursor-pointer min-h-[36px]"
          >
            <Globe className="h-3.5 w-3.5 text-stone-500 transition-transform duration-300 group-hover:rotate-45" />
            <span className="hidden xs:inline">{t.nav.langToggle}</span>
            <span className="rounded bg-stone-100 px-1.5 py-0.5 text-[9px] font-bold text-stone-700 uppercase">
              {language === "en" ? "AR" : "EN"}
            </span>
          </button>

          <a
            href="#connect"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[var(--navy)] px-4 py-1.5 sm:px-5 sm:py-2 text-xs font-bold uppercase tracking-wider text-stone-50 shadow-xs transition hover:bg-[var(--leaf)] hover:-translate-y-0.5 min-h-[36px]"
          >
            <span>{t.nav.connectBtn}</span>
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto max-w-4xl px-4 pt-10 sm:pt-16 pb-6 text-center sm:px-6">
      {/* Status Badge / Kicker Above Logo */}
      <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50/80 px-4 py-1.5 shadow-2xs backdrop-blur-xs mb-4 sm:mb-6">
        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-amber-950">
          {t.content.kicker}
        </span>
      </div>

      {/* Upward Sunrise Radiant Light Beam behind the Logo (Matching uploaded reference) */}
      <div className="relative mx-auto my-2 sm:my-4 flex flex-col items-center justify-center">
        {/* Layer 1: Radiant upward conical & radial dawn light */}
        <div aria-hidden className="sunrise-radiant-glow" />

        {/* Layer 2: Core luminous warm sun center */}
        <div aria-hidden className="sunrise-core-flare" />

        {/* Official Logo - Completely free from bounding boxes, cards, or borders */}
        <img
          src={LOGO_SRC}
          alt="Second Chance Transplant Foundation logo — a dove ascending over the sun with a donor ribbon"
          className="animate-float relative z-10 w-52 xs:w-60 sm:w-76 md:w-92 lg:w-96 max-w-full h-auto object-contain drop-shadow-xl"
          fetchPriority="high"
        />
      </div>

      {/* Primary Foundation Title */}
      <h1
        className="animate-fade-up mt-4 sm:mt-6 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--navy)] leading-tight max-w-3xl mx-auto"
        style={{ animationDelay: "140ms" }}
      >
        {t.content.title}
      </h1>
    </section>
  );
}

function ManifestoSection() {
  const { t } = useLanguage();

  return (
    <section className="relative mx-auto max-w-3xl px-4 pt-4 pb-10 sm:px-6 lg:px-8">
      <article className="space-y-6 sm:space-y-8 text-stone-800">
        {/* Paragraph 1: Holding breath between uncertainty and hope */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            <p className="first-letter:float-left first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[var(--navy)] first-letter:mr-3 first-letter:leading-none">
              {t.content.p1}
            </p>
          </div>
        </Reveal>

        {/* Paragraph 2: Our founder's story & May 21st, 2016 */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose border-l-4 border-l-amber-500">
            <p>{t.content.p2}</p>
          </div>
        </Reveal>

        {/* Paragraph 3: The Sacred Bridge Creed Pull-Quote */}
        <Reveal className="my-8 sm:my-12">
          <figure className="relative overflow-hidden rounded-2xl border border-amber-200/90 bg-linear-to-b from-amber-50/70 via-amber-50/40 to-transparent p-6 sm:p-10 md:p-12 text-center shadow-soft">
            <div
              aria-hidden
              className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-amber-300/20 blur-2xl pointer-events-none"
            />
            <span className="font-serif text-5xl sm:text-6xl text-amber-600/30 leading-none select-none block mb-1">
              “
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-[var(--navy)] leading-snug">
              {t.content.p3}
            </blockquote>
          </figure>
        </Reveal>

        {/* Paragraph 4: Standing beside you through every chapter */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            <p>{t.content.p4}</p>
          </div>
        </Reveal>

        {/* Paragraph 5: Laying the groundwork & building our digital home */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose bg-stone-50/60">
            <p>{t.content.p5}</p>
          </div>
        </Reveal>

        {/* Paragraph 6: Invitation to leave name and contact below */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose border-l-4 border-l-[var(--leaf)] bg-emerald-50/30">
            <p className="font-medium text-[var(--navy)]">{t.content.p6}</p>
          </div>
        </Reveal>
      </article>
    </section>
  );
}

function ConnectSection() {
  const { language, t, isRtl } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{
    name?: string | undefined;
    contact?: string | undefined;
  }>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return setStatus("success"); // honeypot

    const schema = getSingleLeadSchema(language);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      contact: fd.get("contact"),
    });

    if (!parsed.success) {
      const f = parsed.error.flatten().fieldErrors;
      return setErrors({
        name: f.name?.[0],
        contact: f.contact?.[0],
      });
    }

    setErrors({});
    setStatus("loading");

    const contactVal = parsed.data.contact.trim();
    const contactType = detectContactType(contactVal);
    const isEmail = contactType === "email";

    const emailPayload = isEmail ? contactVal : "phone-inquiry@secondchancetransplant.org";
    const phonePayload = !isEmail ? contactVal : "Provided via email";

    const leadPayload = {
      name: parsed.data.name,
      email: emailPayload,
      phone: phonePayload,
      contact: contactVal,
      contact_type: contactType || "inquiry",
      language,
    };

    // 1. Supabase persistence
    const insertPromise = (async () => {
      try {
        return await supabase.from("leads").insert({
          name: parsed.data.name,
          email: isEmail ? contactVal : null,
          phone: !isEmail ? contactVal : null,
          contact: contactVal,
          contact_type: contactType || "inquiry",
        });
      } catch (err: unknown) {
        console.warn("Supabase persistence notice:", err);
        return { error: err, data: null };
      }
    })();

    // 2. Dual-channel Resend executive dispatch to bavly.hamdyai@gmail.com
    const notifyPromise = fetch("/api/notify-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: parsed.data.name,
        email: emailPayload,
        phone: phonePayload,
        message: `Direct inquiry from ${contactVal} (${contactType || "contact"})`,
        language,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          return await notifyLeadServerFn({
            data: {
              name: parsed.data.name,
              email: emailPayload,
              phone: phonePayload,
              message: `Direct inquiry from ${contactVal}`,
              language,
            },
          });
        }
        return await res.json();
      })
      .catch(async (notifyErr) => {
        console.warn("Direct /api/notify-lead notice, trying RPC:", notifyErr);
        return await notifyLeadServerFn({
          data: {
            name: parsed.data.name,
            email: emailPayload,
            phone: phonePayload,
            message: `Direct inquiry from ${contactVal}`,
            language,
          },
        });
      });

    const [insertResult, notifyResult] = await Promise.allSettled([insertPromise, notifyPromise]);
    const insertOk = insertResult.status === "fulfilled" && !insertResult.value?.error;
    const notifyOk =
      notifyResult.status === "fulfilled" &&
      Boolean(notifyResult.value && (notifyResult.value as { success?: boolean }).success !== false);

    if (insertOk || notifyOk) {
      setStatus("success");
    } else {
      console.error("Submission failed across channels:", { insertResult, notifyResult });
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-stone-300 bg-[var(--background)] px-4 py-3.5 text-base text-stone-900 placeholder:text-stone-400 outline-hidden transition focus:border-[var(--navy)] focus:bg-[var(--card)] focus:ring-2 focus:ring-[var(--navy)]/10";

  return (
    <section id="connect" className="relative mx-auto max-w-xl px-4 pt-4 pb-12 sm:px-6">
      <Reveal>
        <div className="paper-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-stone-300/80 shadow-paper">
          <div aria-live="polite">
            {status === "success" ? (
              <div className="py-6 text-center animate-fade-up">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-[var(--leaf)] border border-amber-200">
                  <CheckCircle2 className="h-8 w-8 stroke-[2]" />
                </div>
                <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-bold text-[var(--navy)]">
                  {t.form.successTitle}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700">
                  {t.form.successMsg}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full border border-stone-300 bg-stone-50 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--navy)] transition hover:bg-stone-100 cursor-pointer"
                >
                  {t.form.anotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                {/* 1. Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800"
                  >
                    <User className="h-3.5 w-3.5 text-stone-500" />
                    <span>{t.form.nameLabel}</span>
                    <span className="text-amber-700">*</span>
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t.form.namePlaceholder}
                      className={inputClass}
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* 2. Email or Phone Number Input */}
                <div>
                  <label
                    htmlFor="contact"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800"
                  >
                    <div className="flex items-center gap-1 text-stone-500">
                      <Mail className="h-3.5 w-3.5" />
                      <span className="text-[10px] text-stone-400">/</span>
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <span>{t.form.contactLabel}</span>
                    <span className="text-amber-700">*</span>
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      autoComplete="email tel"
                      placeholder={t.form.contactPlaceholder}
                      className={inputClass}
                      dir="ltr"
                      aria-invalid={!!errors.contact}
                    />
                  </div>
                  {errors.contact && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.contact}</p>
                  )}
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-[var(--navy)] px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-50 shadow-soft transition duration-200 hover:bg-[var(--leaf)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-stone-200" />
                        <span>{t.form.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.form.submitBtn}</span>
                        {isRtl ? (
                          <ArrowLeft className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </span>
                </button>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-center text-xs font-medium text-red-700">
                    {t.form.errorMsg}
                  </div>
                )}

                {/* Privacy Guarantee */}
                <div className="flex items-center justify-center gap-2 text-center text-[10px] sm:text-[11px] text-stone-500 pt-2 border-t border-stone-200/80">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[var(--leaf)]" />
                  <span>{t.form.privacyNotice}</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-stone-300/80 bg-[var(--card)] py-10 text-center text-stone-600 px-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center">
        <img
          src={LOGO_SRC}
          alt="Second Chance Transplant Foundation emblem"
          className="h-12 w-auto object-contain opacity-90 drop-shadow-xs"
        />
        <p className="mt-3 font-serif text-lg sm:text-xl font-bold text-[var(--navy)]">
          {t.footer.foundationName}
        </p>
        <p className="mt-2 text-[11px] sm:text-xs text-stone-500">{t.footer.rights}</p>

        {/* Developer Attribution */}
        <div className="mt-6 border-t border-stone-200/80 pt-5">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-stone-200/90 bg-stone-50/90 px-3.5 py-1.5 shadow-2xs text-[11px] sm:text-xs text-stone-500">
            <span>{t.footer.craftedBy}</span>
            <a
              href="https://www.linkedin.com/in/bavly-hamdy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bavly Hamdy LinkedIn Profile"
              className="inline-flex items-center gap-1 font-semibold text-[var(--navy)] underline underline-offset-3 decoration-stone-300 transition hover:text-[var(--leaf)] hover:decoration-[var(--leaf)]"
            >
              <span>{t.footer.developerName}</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
