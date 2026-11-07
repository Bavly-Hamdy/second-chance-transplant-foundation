import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getLeadSchema } from "@/lib/contact";
import { useLanguage } from "@/hooks/useLanguage";
import { notifyLeadServerFn } from "@/lib/lead-notifications";
import {
  Globe,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Loader2,
  Menu,
  X,
} from "lucide-react";

const LOGO_SRC = "/Logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Second Chance Transplant Foundation — A Second Chance A New Life" },
      {
        name: "description",
        content:
          "There are moments in life when the world quiets down. Standing beside organ transplant patients, living donors, and families through waiting, healing, and lifelong renewal. A Second Chance A New Life.",
      },
      { name: "author", content: "Bavly Hamdy" },
      { name: "creator", content: "Bavly Hamdy" },
      {
        property: "og:site_name",
        content: "Second Chance Transplant Foundation",
      },
      {
        property: "og:title",
        content: "Second Chance Transplant Foundation — A Second Chance A New Life",
      },
      {
        property: "og:description",
        content:
          "Supporting organ transplant patients, living donors, and families through every chapter of the transplant journey. A Second Chance A New Life.",
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
        content: "Second Chance Transplant Foundation — A Second Chance A New Life",
      },
      {
        name: "twitter:description",
        content:
          "Supporting organ transplant patients, living donors, and families through every chapter of the transplant journey. A Second Chance A New Life.",
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
      {/* Top Fixed Humanist Navigation with Smooth Scroll Blur */}
      <Header />

      <main className="relative overflow-x-hidden">
        <Hero />
        <FoundingChronicle />
        <Connect />
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-stone-200/80 bg-[var(--background)]/90 backdrop-blur-md shadow-2xs"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand with Official Crest */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90 max-w-[70%] sm:max-w-none"
        >
          <img
            src={LOGO_SRC}
            alt="Second Chance Transplant Foundation emblem"
            className="h-8 sm:h-10 w-auto object-contain shrink-0 drop-shadow-xs"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight text-[var(--navy)] leading-tight truncate">
              {t.hero.foundationName}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[var(--leaf)] uppercase truncate">
              {t.hero.slogan}
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Controls */}
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-semibold uppercase tracking-wider text-stone-700">
            <a
              href="#story"
              className="transition hover:text-[var(--navy)] relative py-1 hover:border-b-2 hover:border-[var(--leaf)]"
            >
              {t.nav.story}
            </a>
            <a
              href="#connect"
              className="transition hover:text-[var(--navy)] relative py-1 hover:border-b-2 hover:border-[var(--leaf)]"
            >
              {t.nav.connect}
            </a>
          </nav>

          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            aria-label={t.nav.ariaToggle}
            className={`group flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 py-1.5 sm:px-3.5 text-xs font-semibold text-[var(--navy)] shadow-2xs transition cursor-pointer min-h-[36px] ${
              scrolled
                ? "border-stone-300/80 bg-[var(--card)] hover:border-amber-400 hover:bg-stone-50"
                : "border-amber-300/70 bg-white/75 backdrop-blur-xs hover:border-amber-400 hover:bg-white"
            }`}
          >
            <Globe className="h-3.5 w-3.5 text-amber-600 transition-transform duration-300 group-hover:rotate-45" />
            <span className="hidden xs:inline">{t.nav.langToggle}</span>
            <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[9px] font-bold text-amber-900 uppercase">
              {language === "en" ? "AR" : "EN"}
            </span>
          </button>

          {/* Primary Nav Button (Desktop) */}
          <a
            href="#connect"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-4.5 py-2 sm:px-5 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-stone-50 shadow-xs transition hover:bg-[var(--leaf)] hover:-translate-y-0.5"
          >
            <span>{t.nav.connect}</span>
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-stone-700 hover:bg-white/80 transition border border-stone-200/80 cursor-pointer bg-white/60"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[var(--card)]/95 backdrop-blur-md px-4 py-5 shadow-lg animate-fade-up">
          <nav className="flex flex-col space-y-3.5 text-sm font-semibold uppercase tracking-wider text-stone-700">
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition"
            >
              {t.nav.story}
            </a>
            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition"
            >
              {t.nav.connect}
            </a>
            <div className="pt-2 border-t border-stone-200">
              <a
                href="#connect"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[var(--navy)] py-3 text-xs font-bold uppercase tracking-wider text-stone-50 shadow-xs"
              >
                <span>{t.hero.stayConnectedBtn}</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex flex-col justify-center items-center px-4 pt-24 xs:pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-24 text-center sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft, Serene Top Sunrise Atmosphere — Calm, delicate golden dawn light */}
      <div aria-hidden className="hero-sunrise-atmosphere" />

      {/* Free-Floating Official Logo in the light of the Sunrise */}
      <div className="relative z-10 mx-auto mb-6 sm:mb-8 flex flex-col items-center justify-center">
        <img
          src={LOGO_SRC}
          alt="Second Chance Transplant Foundation emblem"
          className="animate-float relative z-10 w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 max-w-full h-auto object-contain drop-shadow-sm transition-transform duration-500 hover:scale-[1.02]"
          fetchPriority="high"
        />
      </div>

      {/* Main Heading: Our Mission Begins Soon */}
      <h1
        className="animate-fade-up relative z-10 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--navy)] max-w-4xl mx-auto leading-[1.15]"
        style={{ animationDelay: "120ms" }}
      >
        {t.hero.title}
      </h1>

      {/* Discreet Down Chevron Icon to Scroll Down */}
      <div className="relative z-10 mt-10 sm:mt-14 flex justify-center">
        <a
          href="#story"
          aria-label={t.hero.scrollToStory}
          className="text-stone-400 transition hover:text-[var(--navy)] p-3 animate-bounce hover:scale-110"
        >
          <ChevronDown className="h-6 w-6 stroke-[1.8]" />
        </a>
      </div>
    </section>
  );
}

function FoundingChronicle() {
  const { t } = useLanguage();

  return (
    <section
      id="story"
      className="relative mx-auto max-w-3xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8"
    >
      {/* Main Journal / Continuous Warm Human Letter — Flows smoothly directly on the cream page */}
      <article className="space-y-8 sm:space-y-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose text-stone-800 font-sans">
        {/* Paragraph 1 - Uncertainty & Hope */}
        <Reveal>
          <p>{t.chronicle.p1}</p>
        </Reveal>

        {/* Paragraph 2 - The Personal Miracle & May 21, 2016 */}
        <Reveal>
          <p>{t.chronicle.p2}</p>
        </Reveal>

        {/* Central Creed Pull-Quote — Elegant, unboxed, and clean without signature */}
        <Reveal className="my-10 sm:my-14">
          <blockquote className="border-l-2 rtl:border-l-0 rtl:border-r-2 border-amber-500/70 pl-6 sm:pl-8 rtl:pl-0 rtl:pr-6 rtl:pr-8 py-2 font-serif text-xl sm:text-2xl md:text-3xl font-medium italic text-[var(--navy)] leading-relaxed sm:leading-snug">
            {t.chronicle.quoteText}
          </blockquote>
        </Reveal>

        {/* Paragraph 3 - The Mission Beside You */}
        <Reveal>
          <p>{t.chronicle.p3}</p>
        </Reveal>

        {/* Paragraph 4 - Laying the Groundwork & Digital Home */}
        <Reveal>
          <p>{t.chronicle.p4}</p>
        </Reveal>

        {/* Warm, dignified sign-off */}
        <Reveal>
          <div className="pt-6 sm:pt-8 text-[var(--navy)]">
            <p className="font-serif text-xl sm:text-2xl font-bold">
              {t.chronicle.signatureName}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-stone-500 uppercase tracking-wider mt-1">
              {t.chronicle.signatureRole}
            </p>
          </div>
        </Reveal>
      </article>
    </section>
  );
}

function Connect() {
  const { language, t, isRtl } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    message?: string | undefined;
  }>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) return setStatus("success"); // honeypot protection

    const schema = getLeadSchema(language);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message") || "",
    });

    if (!parsed.success) {
      const f = parsed.error.flatten().fieldErrors;
      return setErrors({
        name: f.name?.[0],
        email: f.email?.[0],
        phone: f.phone?.[0],
        message: f.message?.[0],
      });
    }

    setErrors({});
    setStatus("loading");

    const messageNote = parsed.data.message ? ` • Note: ${parsed.data.message}` : "";
    const contactStr = `${parsed.data.email} • ${parsed.data.phone}${messageNote}`;

    const leadPayload = {
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      message: parsed.data.message || "",
      language,
    };

    // 1. High-speed persistence to Supabase
    const insertPromise = (async () => {
      try {
        return await supabase.from("leads").insert({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          contact: contactStr,
          contact_type: "email",
        });
      } catch (err: unknown) {
        console.warn("Supabase persistence notice:", err);
        return { error: err, data: null };
      }
    })();

    // 2. High-speed resilient notification dispatch via Resend
    const notifyPromise = fetch("/api/notify-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadPayload),
    })
      .then(async (res) => {
        if (!res.ok) {
          return await notifyLeadServerFn({ data: leadPayload });
        }
        return await res.json();
      })
      .catch(async (notifyErr) => {
        console.warn("Direct /api/notify-lead notice, trying RPC:", notifyErr);
        return await notifyLeadServerFn({ data: leadPayload });
      });

    const [insertResult, notifyResult] = await Promise.allSettled([insertPromise, notifyPromise]);

    const insertOk = insertResult.status === "fulfilled" && !insertResult.value?.error;
    const notifyOk =
      notifyResult.status === "fulfilled" &&
      Boolean(notifyResult.value && (notifyResult.value as { success?: boolean }).success !== false);

    if (insertOk || notifyOk) {
      setStatus("success");
    } else {
      console.error("Submission failed across all channels:", { insertResult, notifyResult });
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-stone-300 bg-[var(--background)] px-4 py-3 sm:py-3.5 text-base text-stone-900 placeholder:text-stone-400 outline-hidden transition focus:border-[var(--navy)] focus:bg-[var(--card)] focus:ring-2 focus:ring-[var(--navy)]/10";

  return (
    <section id="connect" className="relative mx-auto max-w-2xl px-4 py-16 sm:py-24 sm:px-6">
      <Reveal>
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-stone-200/90 bg-white/70 backdrop-blur-xs shadow-xs">
          <div aria-live="polite">
            {status === "success" ? (
              <div className="py-6 sm:py-8 text-center animate-fade-up">
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-amber-50 text-[var(--leaf)] border border-amber-200">
                  <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 stroke-[2]" />
                </div>
                <h3 className="mt-5 sm:mt-6 font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--navy)]">
                  {t.register.successTitle}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-stone-700">
                  {t.register.successMsg}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 sm:mt-8 rounded-full border border-stone-300 bg-stone-50 px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--navy)] transition hover:bg-stone-100 cursor-pointer"
                >
                  {t.register.anotherSubmission}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5 sm:space-y-6">
                {/* Form Header */}
                <div className="text-center border-b border-stone-200/80 pb-5 sm:pb-6">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
                    {t.register.kicker}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl xs:text-3xl sm:text-4xl font-bold text-[var(--navy)]">
                    {t.register.title}
                  </h3>
                  {/* Paragraph 6: The User's Exact Invitation */}
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-700 max-w-lg mx-auto font-medium">
                    {t.register.invitation}
                  </p>
                </div>

                {/* Honeypot field for anti-spam protection */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* 1. Full Name Input */}
                <div>
                  <label
                    htmlFor="lead-name"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    {t.register.nameLabel} <span className="text-amber-700">*</span>
                  </label>
                  <div className="relative">
                    <User
                      className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 ${
                        isRtl ? "right-3.5" : "left-3.5"
                      }`}
                    />
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      placeholder={t.register.namePlaceholder}
                      className={`${inputClass} ${isRtl ? "pr-10" : "pl-10"}`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-rose-600 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. Email Address Input */}
                <div>
                  <label
                    htmlFor="lead-email"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    {t.register.emailLabel} <span className="text-amber-700">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 ${
                        isRtl ? "right-3.5" : "left-3.5"
                      }`}
                    />
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      dir="ltr"
                      required
                      placeholder={t.register.emailPlaceholder}
                      className={`${inputClass} ${isRtl ? "pr-10 text-right" : "pl-10 text-left"}`}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-rose-600 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* 3. Phone Number Input */}
                <div>
                  <label
                    htmlFor="lead-phone"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    {t.register.phoneLabel} <span className="text-amber-700">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400 ${
                        isRtl ? "right-3.5" : "left-3.5"
                      }`}
                    />
                    <input
                      id="lead-phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      required
                      placeholder={t.register.phonePlaceholder}
                      className={`${inputClass} ${isRtl ? "pr-10 text-right" : "pl-10 text-left"}`}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs text-rose-600 font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* 4. Optional Message or Note */}
                <div>
                  <label
                    htmlFor="lead-message"
                    className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    {t.register.messageLabel}
                  </label>
                  <div className="relative">
                    <textarea
                      id="lead-message"
                      name="message"
                      rows={3}
                      placeholder={t.register.messagePlaceholder}
                      className="w-full rounded-xl border border-stone-300 bg-[var(--background)] px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 outline-hidden transition focus:border-[var(--navy)] focus:bg-[var(--card)] focus:ring-2 focus:ring-[var(--navy)]/10"
                    />
                  </div>
                </div>

                {/* Global Error Banner */}
                {status === "error" && (
                  <div className="rounded-xl border border-rose-300 bg-rose-50 p-3.5 text-xs text-rose-900 font-medium animate-fade-up">
                    {t.register.errorMsg}
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--navy)] py-3.5 sm:py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-50 shadow-soft transition duration-200 hover:bg-[var(--leaf)] hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{t.register.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.register.submitBtn}</span>
                      {isRtl ? (
                        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      )}
                    </>
                  )}
                </button>

                {/* Privacy Assurance Footnote */}
                <p className="text-center text-[10px] sm:text-[11px] leading-relaxed text-stone-500">
                  {t.register.privacyNotice}
                </p>
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
    <footer className="border-t border-stone-200 bg-[var(--card)] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="flex items-center justify-center gap-3">
          <img
            src={LOGO_SRC}
            alt="Second Chance Transplant Foundation emblem"
            className="h-8 w-auto object-contain"
          />
          <span className="font-serif text-lg sm:text-xl font-bold text-[var(--navy)]">
            {t.footer.foundationName}
          </span>
        </div>

        <p className="font-serif italic text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
          {t.hero.slogan}
        </p>

        <p className="text-xs sm:text-sm text-stone-500 max-w-xl mx-auto leading-relaxed">
          {t.footer.missionNote}
        </p>

        <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-stone-500">
          <p>{t.footer.rights}</p>
          <p className="inline-flex items-center gap-1.5">
            <span>{t.footer.craftedBy}</span>
            <a
              href="https://www.linkedin.com/in/bavly-hamdy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[var(--navy)] hover:text-[var(--leaf)] underline transition"
            >
              {t.footer.developerName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
