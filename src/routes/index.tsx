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
  Heart,
  ShieldCheck,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Calendar,
  Award,
  Loader2,
  Clock,
  Sun,
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
      <main className="relative overflow-x-hidden">
        {/* Hero Section with Radiant Top Sunrise and No Occlusions */}
        <Hero />

        {/* Sticky Humanist Navigation when browsing the site */}
        <Header />

        <ImpactBar />
        <FoundingChronicle />
        <FourChapters />
        <Connect />
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-40 w-full border-y border-stone-200/80 bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand with Official Crest */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-90 max-w-[70%] sm:max-w-none"
        >
          <img
            src={LOGO_SRC}
            alt="Second Chance Transplant Foundation emblem"
            className="h-9 sm:h-10 w-auto object-contain shrink-0 drop-shadow-xs"
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
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-semibold uppercase tracking-wider text-stone-600">
            <a
              href="#story"
              className="transition hover:text-[var(--navy)] relative py-1 hover:border-b-2 hover:border-[var(--leaf)]"
            >
              {t.nav.story}
            </a>
            <a
              href="#four-chapters"
              className="transition hover:text-[var(--navy)] relative py-1 hover:border-b-2 hover:border-[var(--leaf)]"
            >
              {t.nav.journey}
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
            className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-stone-300/80 bg-[var(--card)] px-3 py-1.5 sm:px-3.5 text-xs font-semibold text-[var(--navy)] shadow-2xs transition hover:border-amber-400 hover:bg-stone-50 cursor-pointer min-h-[36px]"
          >
            <Globe className="h-3.5 w-3.5 text-stone-500 transition-transform duration-300 group-hover:rotate-45" />
            <span className="hidden xs:inline">{t.nav.langToggle}</span>
            <span className="rounded bg-stone-100 px-1.5 py-0.5 text-[9px] font-bold text-stone-700 uppercase">
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
            className="md:hidden flex items-center justify-center p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition border border-stone-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[var(--card)] px-4 py-5 shadow-lg animate-fade-up">
          <nav className="flex flex-col space-y-3.5 text-sm font-semibold uppercase tracking-wider text-stone-700">
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition"
            >
              {t.nav.story}
            </a>
            <a
              href="#four-chapters"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-stone-100 transition"
            >
              {t.nav.journey}
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
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-12 sm:pt-16 pb-14 sm:pb-20 text-center sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating Language Toggle in Top Corner — Leaves the sunrise pristine */}
      <div className="absolute top-4 sm:top-6 end-4 sm:end-8 z-30">
        <button
          onClick={toggleLanguage}
          aria-label={t.nav.ariaToggle}
          className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-amber-300/80 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-[var(--navy)] shadow-xs transition hover:border-amber-400 hover:bg-white cursor-pointer min-h-[36px]"
        >
          <Globe className="h-3.5 w-3.5 text-amber-600 transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-bold">{language === "en" ? "العربية" : "English"}</span>
        </button>
      </div>

      {/* Radiant Top Sunrise Dome — Radiating vividly from the very top of the window */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] sm:h-[540px] z-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 780px 360px at 50% 0%, rgba(245, 158, 11, 0.48) 0%, rgba(251, 191, 36, 0.32) 28%, rgba(254, 240, 138, 0.16) 58%, transparent 84%), radial-gradient(ellipse 460px 220px at 50% 0%, rgba(234, 160, 35, 0.62) 0%, rgba(245, 158, 11, 0.35) 42%, transparent 88%)",
          filter: "blur(10px)",
        }}
      />

      {/* Additional soft morning light wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-amber-400/15 via-yellow-200/5 to-transparent z-0"
      />

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

      {/* Slogan: A Second Chance A New Life */}
      <p
        className="animate-fade-up relative z-10 mt-3 sm:mt-4 font-serif text-lg sm:text-2xl md:text-3xl font-medium text-[var(--leaf)] max-w-2xl mx-auto"
        style={{ animationDelay: "220ms" }}
      >
        {t.hero.slogan}
      </p>

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

function ImpactBar() {
  const { t } = useLanguage();

  const stats = [
    { number: t.impact.stat1Number, label: t.impact.stat1Label },
    { number: t.impact.stat2Number, label: t.impact.stat2Label },
    { number: t.impact.stat3Number, label: t.impact.stat3Label },
    { number: t.impact.stat4Number, label: t.impact.stat4Label },
  ];

  return (
    <section id="impact" className="border-b border-stone-200/80 bg-[var(--card)] py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:divide-x md:divide-stone-200/80">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-2 sm:px-4">
              <span className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)]">
                {stat.number}
              </span>
              <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-stone-600 max-w-[180px] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundingChronicle() {
  const { t } = useLanguage();

  return (
    <section
      id="story"
      className="relative mx-auto max-w-4xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8"
    >
      {/* Archival Dispatch Header */}
      <Reveal className="border-b border-stone-200 pb-5 sm:pb-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-3.5 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-amber-900 shadow-2xs mb-3">
          <Calendar className="h-3.5 w-3.5 text-amber-600 shrink-0" />
          <span>{t.chronicle.date}</span>
        </div>
        <h2 className="mt-2 font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--navy)]">
          {t.chronicle.title}
        </h2>
      </Reveal>

      {/* Main Journal / Letter Body */}
      <article className="mt-8 sm:mt-10 space-y-6 sm:space-y-8 font-sans text-stone-800">
        {/* Paragraph 1 - Uncertainty & Hope */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            <p className="first-letter:float-left first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[var(--navy)] first-letter:mr-3 first-letter:leading-none">
              {t.chronicle.p1}
            </p>
          </div>
        </Reveal>

        {/* Paragraph 2 - The Personal Miracle & May 21, 2016 */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose border-l-4 border-l-amber-500">
            <p>{t.chronicle.p2}</p>
          </div>
        </Reveal>

        {/* Central Creed Pull-Quote - Paragraph 3 */}
        <Reveal className="my-8 sm:my-12">
          <figure className="rounded-2xl border border-stone-200 bg-amber-50/40 p-6 sm:p-10 md:p-12 text-center shadow-2xs">
            <span className="font-serif text-5xl sm:text-6xl text-amber-700/30 leading-none select-none">
              “
            </span>
            <blockquote className="-mt-3 sm:-mt-4 font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-[var(--navy)] leading-snug">
              {t.chronicle.quoteText}
            </blockquote>
            <figcaption className="mt-4 sm:mt-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--leaf)]">
              — {t.chronicle.quoteCaption}
            </figcaption>
          </figure>
        </Reveal>

        {/* Paragraph 4 - The Mission Beside You */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            <p>{t.chronicle.p3}</p>
          </div>
        </Reveal>

        {/* Paragraph 5 - Laying the Groundwork & Digital Home */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-6 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose bg-stone-50/60">
            <p>{t.chronicle.p4}</p>
            {/* Signature Block */}
            <div className="mt-6 sm:mt-8 border-t border-stone-200/80 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-[var(--navy)]">
                  {t.chronicle.signatureName}
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                  {t.chronicle.signatureRole}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[var(--card)] px-3.5 py-1 text-xs font-medium text-stone-600 self-start sm:self-auto">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--leaf)]" />
                <span>Non-Profit Charter</span>
              </div>
            </div>
          </div>
        </Reveal>
      </article>
    </section>
  );
}

function FourChapters() {
  const { t } = useLanguage();

  const stages = [
    {
      num: t.chapters.c1Number,
      title: t.chapters.c1Title,
      lead: t.chapters.c1Lead,
      desc: t.chapters.c1Desc,
      icon: Clock,
      tag: "THE WAITLIST STAGE",
    },
    {
      num: t.chapters.c2Number,
      title: t.chapters.c2Title,
      lead: t.chapters.c2Lead,
      desc: t.chapters.c2Desc,
      icon: Sun,
      tag: "THE TRANSITION STAGE",
    },
    {
      num: t.chapters.c3Number,
      title: t.chapters.c3Title,
      lead: t.chapters.c3Lead,
      desc: t.chapters.c3Desc,
      icon: Heart,
      tag: "THE HEALING STAGE",
    },
    {
      num: t.chapters.c4Number,
      title: t.chapters.c4Title,
      lead: t.chapters.c4Lead,
      desc: t.chapters.c4Desc,
      icon: Award,
      tag: "THE DONOR LEGACY",
    },
  ];

  return (
    <section
      id="four-chapters"
      className="border-t border-stone-200 bg-[var(--card)]/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--leaf)]">
            {t.chapters.kicker}
          </span>
          <h2 className="mt-2.5 sm:mt-3 font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--navy)]">
            {t.chapters.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-stone-600">
            {t.chapters.subtitle}
          </p>
        </Reveal>

        {/* 4 Humane Chapters - Fully Responsive Grid */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <Reveal key={idx} className="h-full">
                <article className="paper-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8 md:p-10 transition duration-300 hover:border-stone-400 hover:shadow-paper">
                  <div>
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between border-b border-stone-200/80 pb-3.5">
                      <span className="font-mono text-xs font-bold text-amber-800 tracking-wider">
                        {stage.num}
                      </span>
                      <span className="rounded bg-stone-100 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-stone-600">
                        {stage.tag}
                      </span>
                    </div>

                    {/* Title & Icon */}
                    <div className="mt-5 sm:mt-6 flex items-start gap-3.5 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-[var(--leaf)] border border-amber-200/60">
                        <Icon className="h-5 w-5 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--navy)]">
                          {stage.title}
                        </h3>
                        <p className="mt-1 font-serif text-sm sm:text-base italic text-stone-600">
                          {stage.lead}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed text-stone-700">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Footnote */}
                  <div className="mt-6 sm:mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-[var(--leaf)] uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--leaf)]" />
                    <span>Second Chance Care Commitment</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
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
        <div className="paper-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 border border-stone-300/80 shadow-paper">
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
