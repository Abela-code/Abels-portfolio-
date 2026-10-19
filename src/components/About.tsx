import { animate, motion } from "framer-motion";
import { useMemo, type FC, type MouseEvent, type KeyboardEvent } from "react";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import type { AvatarItem } from "../types/portfolio";

// Clean hero: single strong portrait, clear CTAs, no gallery carousel.
export const About: FC = () => {
  const personal = PORTFOLIO_INFO.personal;
  const name = personal.name ?? "Your Name";
  const avatar = personal.avatar;
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  const features = useMemo(() => PORTFOLIO_INFO.highlights ?? [], []);
  const heroSummary =
    personal.hero?.summary ??
    personal.summary ??
    "I design and build production-grade frontends and APIs, focusing on performance, accessibility, and delightful UX.";

  const subtitle =
    personal.hero?.subtitle ??
    "Open to junior full-stack & frontend roles · Also available for freelance projects";

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  // Prefer a single strong photo — first avatar entry, no carousel.
  const normalizeAvatar = (a: AvatarItem) =>
    typeof a === "string" ? { url: a } : { url: a.url, label: a.label };

  let portraitUrl = "/profile.jpg";
  if (Array.isArray(avatar) && avatar.length > 0) {
    portraitUrl = normalizeAvatar(avatar[0]).url || portraitUrl;
  } else if (avatar) {
    portraitUrl = normalizeAvatar(avatar).url || portraitUrl;
  }

  const springScrollTo = (y: number) => {
    const controls = animate(window.scrollY, y, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    return () => controls.stop();
  };

  const navigateTo = (href: string) => {
    if (!href.startsWith("#")) {
      globalThis.location.href = href;
      return;
    }
    const target = document.querySelector(href);
    if (!target) return;
    const headerEl = document.querySelector("header");
    const headerH = headerEl?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH;
    springScrollTo(y);
  };

  const onNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    navigateTo(href);
  };

  const handleKeyActivation = (
    e: KeyboardEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (e.key === "Enter") {
      if (href.startsWith("#")) {
        e.preventDefault();
        navigateTo(href);
      }
    } else if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      navigateTo(href);
    }
  };

  return (
    <section className="w-full">
      <div className="w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center max-w-7xl mx-auto"
        >
          {/* Left: Headline + features + CTAs */}
          <motion.div variants={item} className="md:col-span-7">
            <div className="relative z-10">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-sm text-[var(--muted)] mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{subtitle}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                {name}
              </h1>

              {personal.title && (
                <p className="mt-3 text-lg md:text-xl font-semibold text-[var(--brand)]">
                  {personal.headline ?? personal.title}
                </p>
              )}

              <motion.p
                variants={item}
                className="mt-5 text-base md:text-lg text-[var(--muted)] max-w-xl leading-relaxed"
              >
                {heroSummary}
              </motion.p>

              <motion.ul
                variants={item}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 w-4.5 h-4.5 text-[var(--brand)] shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12l4 4L19 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-[var(--text)]">{f}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap gap-3"
              >
                {/* Primary CTA — filled */}
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] text-white px-5 py-3 text-sm font-semibold shadow-md hover:opacity-95 transition"
                  onClick={(e) => onNavClick(e, "#projects")}
                  onKeyDown={(e) => handleKeyActivation(e, "#projects")}
                >
                  See my work
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>

                {/* Secondary CTA — outlined */}
                <a
                  href={resumeHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--text)] hover:bg-[var(--border)]/30 transition"
                  onKeyDown={(e) => handleKeyActivation(e, resumeHref)}
                >
                  Download résumé
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: single strong portrait */}
          <motion.div
            variants={item}
            className="md:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px]">
              {/* Decorative offset frame */}
              <div
                className="absolute inset-3 -right-3 -bottom-3 rounded-2xl border-2 border-[var(--text)] pointer-events-none"
                aria-hidden
              />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--surface)] shadow-xl">
                <img
                  src={portraitUrl}
                  alt={`Portrait of ${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
