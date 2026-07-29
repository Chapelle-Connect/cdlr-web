"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

type Language = "en" | "fr";

const ADMIN_URL = "https://cdlr-admin.vercel.app";
const LANGUAGE_KEY = "chapelle-connect-language";
const LANGUAGE_EVENT = "chapelle-connect-language-change";

function subscribeToLanguage(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_EVENT, onStoreChange);
  };
}

function getLanguageSnapshot(): Language {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_KEY);
  return savedLanguage === "fr" ? "fr" : "en";
}

function getServerLanguageSnapshot(): Language {
  return "en";
}

const copy = {
  en: {
    skip: "Skip to main content",
    navLabel: "Main navigation",
    nav: ["Platform", "For members", "For teams"],
    login: "Staff login",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    switchLanguage: "Passer au français",
    eyebrow: "A digital home for our church",
    titleA: "Church life,",
    titleB: "beautifully connected.",
    intro:
      "Chapelle Connect brings announcements, events, messages and meaningful ways to connect into one simple bilingual experience.",
    cta: "Explore the experience",
    staff: "Open staff dashboard",
    trusted: "Built for Chapelle de la Résurrection",
    live: "Live across the church",
    announcement: "New announcement published",
    nextEvent: "Next event",
    sunday: "Sunday · 10:00 AM",
    productPreview: "Chapelle Connect mobile app home screen",
    sectionTag: "One connected platform",
    sectionTitle: "Everything your church needs.\nNothing it doesn’t.",
    sectionIntro:
      "Members stay close to church life. Ministry teams get one calm, organized place to keep everyone informed.",
    features: [
      [
        "Never miss what matters",
        "Timely, bilingual announcements keep the entire church family in the loop.",
      ],
      [
        "Plan your next Sunday",
        "Discover services, programs and special events through an easy calendar.",
      ],
      [
        "Watch from anywhere",
        "A clean media library makes messages and worship moments easy to revisit.",
      ],
      [
        "Connect with confidence",
        "Send a prayer request, update your information or reach the church securely.",
      ],
    ],
    mobileTag: "For the church family",
    mobileTitle: "Your church, wherever life takes you.",
    mobileText:
      "A focused mobile experience for iOS and Android—fast, familiar and ready in English or French.",
    pills: [
      "Bilingual by design",
      "Built for accessibility",
      "Useful on the go",
    ],
    comingSoon: "Coming soon",
    mobilePreview: "Chapelle Connect mobile app preview",
    editorPreview: "Chapelle Connect event editor preview",
    adminTag: "For ministry teams",
    adminTitle: "A calmer way to keep everyone connected.",
    adminText:
      "From one secure workspace, staff can publish events, share announcements, manage media and respond to submissions—without technical complexity.",
    roles: "Thoughtful roles. Clear responsibility.",
    roleText:
      "Admins oversee the whole system. Editors focus on the content they own.",
    dashboardPreview: "Chapelle Connect staff dashboard preview",
    quote:
      "Technology should fade into the background—so ministry and community can move forward.",
    finalTag: "Chapelle Connect",
    finalTitle: "One church. One place to belong.",
    finalText: "A simpler way to stay informed, take part and grow together.",
    finalCta: "Visit the staff dashboard",
    footer: "Made for Chapelle de la Résurrection",
    footerNav: "Footer navigation",
    privacy: "Privacy",
    accessibility: "Accessibility",
  },
  fr: {
    skip: "Aller au contenu principal",
    navLabel: "Navigation principale",
    nav: ["Plateforme", "Pour les membres", "Pour les équipes"],
    login: "Connexion équipe",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    switchLanguage: "Switch to English",
    eyebrow: "Le foyer numérique de notre église",
    titleA: "La vie d’église,",
    titleB: "pleinement connectée.",
    intro:
      "Chapelle Connect réunit annonces, événements, messages et façons de se connecter dans une expérience bilingue simple.",
    cta: "Découvrir l’expérience",
    staff: "Ouvrir le tableau de bord",
    trusted: "Conçu pour la Chapelle de la Résurrection",
    live: "En direct dans toute l’église",
    announcement: "Nouvelle annonce publiée",
    nextEvent: "Prochain événement",
    sunday: "Dimanche · 10 h 00",
    productPreview: "Écran d’accueil de l’application mobile Chapelle Connect",
    sectionTag: "Une plateforme connectée",
    sectionTitle:
      "Tout ce dont votre église a besoin.\nRien de superflu.",
    sectionIntro:
      "Les membres restent proches de la vie d’église. Les équipes disposent d’un espace calme et organisé pour informer chacun.",
    features: [
      [
        "Ne manquez rien d’important",
        "Des annonces bilingues et ponctuelles gardent toute la famille de l’église informée.",
      ],
      [
        "Planifiez votre dimanche",
        "Découvrez les cultes, programmes et événements spéciaux dans un calendrier clair.",
      ],
      [
        "Regardez de partout",
        "Une médiathèque épurée permet de retrouver facilement messages et moments de louange.",
      ],
      [
        "Connectez-vous en confiance",
        "Envoyez une demande de prière, actualisez vos coordonnées ou contactez l’église en sécurité.",
      ],
    ],
    mobileTag: "Pour la famille de l’église",
    mobileTitle: "Votre église vous accompagne partout.",
    mobileText:
      "Une expérience mobile ciblée pour iOS et Android—rapide, familière et disponible en français ou en anglais.",
    pills: [
      "Bilingue dès la conception",
      "Accessible pour tous",
      "Utile en déplacement",
    ],
    comingSoon: "Bientôt disponible",
    mobilePreview: "Aperçu de l’application mobile Chapelle Connect",
    editorPreview: "Aperçu de l’éditeur d’événements Chapelle Connect",
    adminTag: "Pour les équipes",
    adminTitle: "Une façon plus sereine de garder chacun connecté.",
    adminText:
      "Dans un espace sécurisé, l’équipe peut publier des événements, partager des annonces, gérer les médias et répondre aux demandes, sans complexité technique.",
    roles: "Des rôles réfléchis. Des responsabilités claires.",
    roleText:
      "Les administrateurs supervisent le système. Les éditeurs se concentrent sur leur contenu.",
    dashboardPreview: "Aperçu du tableau de bord Chapelle Connect",
    quote:
      "La technologie doit s’effacer—pour laisser le ministère et la communauté avancer.",
    finalTag: "Chapelle Connect",
    finalTitle: "Une église. Un lieu d’appartenance.",
    finalText:
      "Une façon plus simple de s’informer, participer et grandir ensemble.",
    finalCta: "Visiter le tableau de bord",
    footer: "Créé pour la Chapelle de la Résurrection",
    footerNav: "Navigation de pied de page",
    privacy: "Confidentialité",
    accessibility: "Accessibilité",
  },
} satisfies Record<Language, Record<string, unknown>>;

const featureIcons = ["✦", "◫", "▶", "↗"];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand brand-compact" : "brand"}>
      <span className="brand-mark" aria-hidden="true" />
      <span>
        Chapelle <b>Connect</b>
      </span>
    </span>
  );
}

export default function Home() {
  const lang = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const adminHref = `${ADMIN_URL}/${lang}/login`;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    sections.forEach((section) => section.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const switchLanguage = () => {
    window.localStorage.setItem(LANGUAGE_KEY, lang === "en" ? "fr" : "en");
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skip as string}
      </a>

      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" aria-label="Chapelle Connect home" onClick={closeMenu}>
            <Brand />
          </a>

          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            id="main-navigation"
            aria-label={t.navLabel as string}
          >
            <a href="#platform" onClick={closeMenu}>
              {(t.nav as string[])[0]}
            </a>
            <a href="#members" onClick={closeMenu}>
              {(t.nav as string[])[1]}
            </a>
            <a href="#teams" onClick={closeMenu}>
              {(t.nav as string[])[2]}
            </a>
            <a
              className="mobile-login"
              href={adminHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.login as string}
              <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <div className="nav-actions">
            <button
              className="lang"
              type="button"
              onClick={switchLanguage}
              aria-label={t.switchLanguage as string}
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <a
              className="login"
              href={adminHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.login as string}
              <span aria-hidden="true">↗</span>
            </a>
            <button
              className="menu"
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
              aria-label={
                (menuOpen ? t.menuClose : t.menuOpen) as string
              }
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="top">
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true">✦</span>
              {t.eyebrow as string}
            </p>
            <h1>
              {t.titleA as string}
              <br />
              <em>{t.titleB as string}</em>
            </h1>
            <p className="hero-intro">{t.intro as string}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#platform">
                {t.cta as string}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                className="btn secondary"
                href={adminHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.staff as string}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="trusted">
              <span className="trust-mark" aria-hidden="true">
                <Image
                  src="/rccg-chapelle-mark.png"
                  alt=""
                  fill
                  sizes="72px"
                />
              </span>
              <span>{t.trusted as string}</span>
            </div>
          </div>

          <div className="product-scene">
            <div
              className="phone"
              role="img"
              aria-label={t.productPreview as string}
            />
            <div className="float-card fc-one" aria-hidden="true">
              <span className="pulse">✓</span>
              <div>
                <small>{t.live as string}</small>
                <b>{t.announcement as string}</b>
              </div>
            </div>
            <div className="float-card fc-two" aria-hidden="true">
              <span>◫</span>
              <div>
                <small>{t.nextEvent as string}</small>
                <b>{t.sunday as string}</b>
              </div>
            </div>
          </div>
        </section>

        <section className="platform" id="platform" data-reveal>
          <div className="section-head">
            <div>
              <span className="kicker">{t.sectionTag as string}</span>
              <h2>
                {(t.sectionTitle as string).split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
            </div>
            <p>{t.sectionIntro as string}</p>
          </div>

          <div className="feature-grid">
            {(t.features as string[][]).map((feature, index) => (
              <article key={feature[0]}>
                <span className="feature-icon" aria-hidden="true">
                  {featureIcons[index]}
                </span>
                <span className="feature-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{feature[0]}</h3>
                <p>{feature[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mobile-section" id="members" data-reveal>
          <div className="mobile-art">
            <div className="rings" aria-hidden="true" />
            <div
              className="mini-phone back"
              role="img"
              aria-label={t.editorPreview as string}
            />
            <div
              className="mini-phone front"
              role="img"
              aria-label={t.mobilePreview as string}
            />
          </div>

          <div className="story-copy">
            <span className="kicker">{t.mobileTag as string}</span>
            <h2>{t.mobileTitle as string}</h2>
            <p>{t.mobileText as string}</p>
            <div className="pills">
              {(t.pills as string[]).map((item) => (
                <span key={item}>
                  <i aria-hidden="true">✓</i>
                  {item}
                </span>
              ))}
            </div>
            <div className="store-row" aria-label={t.comingSoon as string}>
              <span>
                <b>● App Store</b>
                <small>{t.comingSoon as string}</small>
              </span>
              <span>
                <b>▶ Google Play</b>
                <small>{t.comingSoon as string}</small>
              </span>
            </div>
          </div>
        </section>

        <section className="admin-section" id="teams" data-reveal>
          <div className="story-copy">
            <span className="kicker mint">{t.adminTag as string}</span>
            <h2>{t.adminTitle as string}</h2>
            <p>{t.adminText as string}</p>
            <div className="role-note">
              <span aria-hidden="true">◇</span>
              <div>
                <b>{t.roles as string}</b>
                <p>{t.roleText as string}</p>
              </div>
            </div>
            <a
              className="text-link"
              href={adminHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.staff as string}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            className="dashboard"
            role="img"
            aria-label={t.dashboardPreview as string}
          />
        </section>

        <section className="quote" data-reveal>
          <div className="quote-mark" aria-hidden="true">
            “
          </div>
          <blockquote>{t.quote as string}</blockquote>
          <div className="quote-brand">
            <span className="brand-mark" aria-hidden="true" />
            <span>
              Chapelle de la Résurrection
              <small>RCCG · Gatineau</small>
            </span>
          </div>
        </section>

        <section className="final-cta" data-reveal>
          <div className="final-mark" aria-hidden="true" />
          <span className="kicker">{t.finalTag as string}</span>
          <h2>{t.finalTitle as string}</h2>
          <p>{t.finalText as string}</p>
          <a
            className="btn light"
            href={adminHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.finalCta as string}
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer>
        <a href="#top" aria-label="Chapelle Connect home">
          <Brand compact />
        </a>
        <p>{t.footer as string}</p>
        <nav aria-label={t.footerNav as string}>
          <Link href="/privacy">{t.privacy as string}</Link>
          <Link href="/accessibility">{t.accessibility as string}</Link>
          <button type="button" onClick={switchLanguage}>
            {lang === "en" ? "Français" : "English"}
          </button>
        </nav>
      </footer>
    </>
  );
}
