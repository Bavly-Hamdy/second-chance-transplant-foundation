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
  ArrowDown,
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
  Feather,
  Menu,
  X,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

const LOGO_SRC = "/Logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Second Chance Transplant Foundation — Our Mission Begins Soon" },
      {
        name: "description",
        content:
          "An authentic humanitarian foundation standing beside organ transplant patients, living donors, and families — through waiting, healing, and lifelong renewal.",
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
          "Supporting organ transplant patients, living donors, and families through every chapter of the transplant journey.",
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
          "Supporting organ transplant patients, living donors, and families through every chapter of the transplant journey.",
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
      {/* Subtle Warm Sunrise Ambient Wash */}
      <div
        aria-hidden
        className="sunrise-subtle pointer-events-none fixed inset-x-0 top-0 h-[65vh] -z-10 opacity-70"
      />

      {/* Top Editorial Masthead Notice */}
      <MastheadNotice />

      {/* Main Humanist Navigation */}
      <Header />

      <main className="relative overflow-x-hidden">
        <Hero />
        <ImpactBar />
        <FounderLetter />
        <FourChapters />
        <Connect />
        <Footer />
      </main>
    </div>
  );
}

function MastheadNotice() {
  const { t } = useLanguage();

  return (
    <aside className="border-b border-stone-200/60 bg-[var(--card)]/95 px-3 py-2 text-center text-[10px] sm:text-[11px] font-medium tracking-wide text-stone-600">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
        <span className="inline-block rounded border border-amber-300/80 bg-amber-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-900">
          {t.masthead.badge}
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="text-stone-700 leading-tight">{t.masthead.notice}</span>
      </div>
    </aside>
  );
}

function Header() {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[var(--background)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand with Official Crest */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3.5 transition-opacity hover:opacity-90 max-w-[70%] sm:max-w-none"
        >
          <img
            src={LOGO_SRC}
            alt="Second Chance Transplant Foundation emblem"
            className="h-10 sm:h-12 w-auto object-contain shrink-0 drop-shadow-xs"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-sm sm:text-lg md:text-xl font-bold tracking-tight text-[var(--navy)] leading-tight truncate">
              {t.hero.foundationName}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider text-[var(--leaf)] uppercase mt-0.5 truncate">
              {t.hero.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Controls */}
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6">
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-semibold uppercase tracking-wider text-stone-600">
            <a
              href="#founder-letter"
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

          {/* Language Switcher Button (Always Visible & Tap-Friendly) */}
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

          {/* Mobile Menu Hamburger Toggle (Mobile-Only) */}
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
              href="#founder-letter"
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
  const { t, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-12 sm:pt-16 pb-16 sm:pb-24 text-center sm:px-6 lg:px-8 overflow-hidden">
      {/* Archival Status Tagline */}
      <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-[var(--card)] px-3.5 py-1.5 shadow-2xs">
        <span className="h-2 w-2 rounded-full bg-[var(--leaf)]" />
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-stone-700">
          {t.hero.badge}
        </span>
      </div>

      {/* Radiant Sun Lighting Behind Free-Floating Logo (NO FRAME / BORDER) */}
      <div className="relative mx-auto my-6 sm:my-10 flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center w-full max-w-md sm:max-w-lg">
          {/* Layer 1: Ambient warm golden sunrise aura */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 sm:-inset-16 md:-inset-24 rounded-full sun-aura blur-2xl sm:blur-3xl animate-glow opacity-90"
          />
          {/* Layer 2: Core luminous warm sun center */}
          <div
            aria-hidden
            className="pointer-events-none absolute h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 rounded-full bg-radial from-amber-400/40 via-yellow-300/25 to-transparent blur-xl sm:blur-2xl"
          />

          {/* Free-Floating Official Logo - Free from any bounding card or border */}
          <img
            src={LOGO_SRC}
            alt="Second Chance Transplant Foundation logo — a dove rising over the sun with an awareness ribbon"
            className="animate-float relative z-10 w-44 xs:w-52 sm:w-68 md:w-80 lg:w-96 max-w-full h-auto object-contain drop-shadow-xl"
            fetchPriority="high"
          />
        </div>

        {/* Milestone Badge Floating Elegantly Below Logo */}
        <div className="animate-fade-up mt-5 sm:mt-6 inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-[var(--card)]/90 px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-stone-600 shadow-2xs backdrop-blur-xs">
          <Calendar className="h-3.5 w-3.5 text-amber-600 shrink-0" />
          <span>May 21, 2016 • Celebrating 10 Years of Life</span>
        </div>
      </div>

      {/* Grand Typographic Title - High-Contrast Serif & Majestic Scale */}
      <h1
        className="animate-fade-up font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-[var(--navy)] break-words leading-[1.1] max-w-5xl mx-auto px-2"
        style={{ animationDelay: "120ms" }}
      >
        {t.hero.foundationName}
      </h1>

      {/* Literary Mission Headline - Replaces Coming Soon */}
      <h2
        className="animate-fade-up mt-4 sm:mt-6 font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-[var(--leaf)] max-w-3xl mx-auto px-4"
        style={{ animationDelay: "240ms" }}
      >
        {t.hero.tagline}
      </h2>

      {/* Humanist Lead Narrative Paragraph */}
      <p
        className="animate-fade-up mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-stone-700 px-4"
        style={{ animationDelay: "340ms" }}
      >
        {t.hero.leadParagraph}
      </p>

      {/* Action Buttons: Full responsiveness & touch targets */}
      <div
        className="animate-fade-up mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto px-4"
        style={{ animationDelay: "420ms" }}
      >
        <a
          href="#connect"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--navy)] py-3.5 px-7 sm:py-4 sm:px-8 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-50 shadow-soft transition duration-200 hover:bg-[var(--leaf)] hover:-translate-y-0.5 focus:outline-hidden focus:ring-4 focus:ring-amber-200"
        >
          <span>{t.hero.stayConnectedBtn}</span>
          <ArrowIcon className="h-4 w-4" />
        </a>

        <a
          href="#founder-letter"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-[var(--card)] py-3.5 px-6 sm:py-4 sm:px-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--navy)] shadow-2xs transition duration-200 hover:border-stone-400 hover:bg-stone-50 hover:-translate-y-0.5"
        >
          <Feather className="h-4 w-4 text-stone-500" />
          <span>{t.hero.readStoryBtn}</span>
        </a>
      </div>

      {/* Discreet Editorial Down Scroll Arrow */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <a
          href="#impact"
          aria-label={t.hero.readStoryBtn}
          className="text-stone-400 transition hover:text-[var(--navy)] p-2"
        >
          <ArrowDown className="h-5 w-5 stroke-[1.8]" />
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
    <section id="impact" className="border-y border-stone-200/80 bg-[var(--card)] py-8 sm:py-10">
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

function FounderLetter() {
  const { t } = useLanguage();

  return (
    <section
      id="founder-letter"
      className="relative mx-auto max-w-4xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8"
    >
      {/* Archival Dispatch Header */}
      <Reveal className="border-b border-stone-200 pb-5 sm:pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-amber-800">
            {t.founderLetter.kicker}
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-stone-500">
            {t.founderLetter.date}
          </span>
        </div>
        <h2 className="mt-3 sm:mt-4 font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--navy)]">
          {t.founderLetter.title}
        </h2>
      </Reveal>

      {/* Main Journal / Letter Body */}
      <article className="mt-8 sm:mt-10 space-y-6 sm:space-y-8 font-sans text-stone-800">
        {/* Paragraph 1 with Drop Cap */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-5 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            <p className="first-letter:float-left first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[var(--navy)] first-letter:mr-2.5 sm:first-letter:mr-3 first-letter:leading-none">
              {t.founderLetter.p1}
            </p>
          </div>
        </Reveal>

        {/* Paragraph 2 - The Personal Miracle */}
        <Reveal>
          <div className="paper-panel rounded-2xl p-5 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose border-l-4 border-l-amber-500">
            <p>{t.founderLetter.p2}</p>
          </div>
        </Reveal>

        {/* Central Creed Pull-Quote */}
        <Reveal className="my-8 sm:my-12">
          <figure className="rounded-2xl border border-stone-200 bg-amber-50/40 p-6 sm:p-10 md:p-12 text-center shadow-2xs">
            <span className="font-serif text-5xl sm:text-6xl text-amber-700/30 leading-none select-none">
              “
            </span>
            <blockquote className="-mt-3 sm:-mt-4 font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium italic text-[var(--navy)] leading-snug">
              {t.founderLetter.quoteText}
            </blockquote>
            <figcaption className="mt-4 sm:mt-6 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--leaf)]">
              — {t.founderLetter.quoteCaption}
            </figcaption>
          </figure>
        </Reveal>

        {/* Paragraph 3 & 4 - The Mission & Invitation */}
        <Reveal className="space-y-6">
          <div className="paper-panel rounded-2xl p-5 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
            <p>{t.founderLetter.p3}</p>
          </div>

          <div className="paper-panel rounded-2xl p-5 sm:p-8 md:p-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose bg-stone-50/60">
            <p>{t.founderLetter.p4}</p>
            {/* Signature Block */}
            <div className="mt-6 sm:mt-8 border-t border-stone-200/80 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-[var(--navy)]">
                  {t.founderLetter.signatureName}
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mt-0.5">
                  {t.founderLetter.signatureRole}
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
    // Dual-channel: Direct API route with automatic TanStack RPC fallback
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
                  <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-stone-600 max-w-lg mx-auto">
                    {t.register.subtitle}
                  </p>
                </div>

                {/* 1. Full Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800"
                  >
                    <User className="h-3.5 w-3.5 text-stone-500" />
                    <span>{t.register.nameLabel}</span>
                    <span className="text-amber-700">*</span>
                  </label>
                  <div className="mt-1.5 sm:mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t.register.namePlaceholder}
                      className={inputClass}
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* 2. Email Address Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800"
                  >
                    <Mail className="h-3.5 w-3.5 text-stone-500" />
                    <span>{t.register.emailLabel}</span>
                    <span className="text-amber-700">*</span>
                  </label>
                  <div className="mt-1.5 sm:mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t.register.emailPlaceholder}
                      className={inputClass}
                      dir="ltr"
                      aria-invalid={!!errors.email}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* 3. Phone Number Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-800"
                  >
                    <Phone className="h-3.5 w-3.5 text-stone-500" />
                    <span>{t.register.phoneLabel}</span>
                    <span className="text-amber-700">*</span>
                  </label>
                  <div className="mt-1.5 sm:mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={t.register.phonePlaceholder}
                      className={inputClass}
                      dir="ltr"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* 4. Optional Message / Note Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-800"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 text-stone-500" />
                      <span>{t.register.messageLabel}</span>
                    </span>
                    <span className="text-[10px] font-normal lowercase tracking-normal text-stone-400">
                      ({language === "ar" ? "اختياري" : "optional"})
                    </span>
                  </label>
                  <div className="mt-1.5 sm:mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder={t.register.messagePlaceholder}
                      className={`${inputClass} resize-y min-h-[85px] leading-relaxed`}
                      aria-invalid={!!errors.message}
                    />
                  </div>
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-[var(--navy)] px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-50 shadow-soft transition duration-200 hover:bg-[var(--leaf)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                >
                  <span className="flex items-center justify-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-stone-200" />
                        <span>{t.register.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{t.register.submitBtn}</span>
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
                  <div className="rounded-xl border border-red-200 bg-red-50 p-3 sm:p-3.5 text-center text-xs font-medium text-red-700">
                    {t.register.errorMsg}
                  </div>
                )}

                {/* Privacy Guarantee */}
                <div className="flex items-center justify-center gap-2 text-center text-[10px] sm:text-[11px] text-stone-500 pt-2 border-t border-stone-200/80">
                  <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-[var(--leaf)]" />
                  <span>{t.register.privacyNotice}</span>
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
    <footer className="border-t border-stone-300/80 bg-[var(--card)] py-12 sm:py-16 text-center text-stone-600 px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center sm:px-6">
        <img
          src={LOGO_SRC}
          alt="Second Chance Transplant Foundation emblem"
          className="h-14 sm:h-16 w-auto object-contain opacity-95 drop-shadow-xs"
        />
        <p className="mt-4 font-serif text-xl sm:text-2xl font-bold text-[var(--navy)]">
          {t.footer.foundationName}
        </p>
        <p className="mt-2 font-serif text-sm sm:text-base italic text-amber-800 max-w-xl px-2">
          {t.footer.tagline}
        </p>
        <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs leading-relaxed text-stone-500 max-w-2xl px-2">
          {t.footer.missionNote}
        </p>

        {/* Divider & Credits */}
        <div className="mt-8 sm:mt-10 w-full max-w-4xl border-t border-stone-200/90 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-stone-500">
          <p>{t.footer.rights}</p>

          {/* Author Attribution */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-stone-200/90 bg-stone-50/90 px-3.5 py-1.5 shadow-2xs backdrop-blur-xs transition duration-200 hover:border-amber-700/30 hover:bg-white">
            <span className="text-stone-500">{t.footer.craftedBy}</span>
            <a
              href="https://www.linkedin.com/in/bavly-hamdy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bavly Hamdy LinkedIn Profile"
              className="inline-flex items-center gap-1 font-semibold text-[var(--navy)] underline underline-offset-3 decoration-stone-300 transition-colors hover:text-[var(--leaf)] hover:decoration-[var(--leaf)]"
            >
              <span>{t.footer.developerName}</span>
              <ExternalLink className="h-3 w-3 opacity-60 transition-opacity hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
