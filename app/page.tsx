"use client";

import { useEffect, useState } from "react";

const copy = {
  en: {
    nav: ["Platform", "For members", "For teams"], login: "Staff login", eyebrow: "A digital home for our church",
    titleA: "Church life,", titleB: "beautifully connected.",
    intro: "Chapelle Connect brings announcements, events, messages and meaningful ways to connect into one simple bilingual experience.",
    cta: "Explore the experience", staff: "Open staff dashboard", trusted: "Built for Chapelle de la Résurrection",
    live: "Live across the church", labels: ["Announcements", "Upcoming events", "Latest message"],
    sectionTag: "ONE CONNECTED PLATFORM", sectionTitle: "Everything your church needs.\nNothing it doesn’t.",
    sectionIntro: "Members stay close to church life. Ministry teams get one calm, organized place to keep everyone informed.",
    features: [
      ["Never miss what matters", "Timely, bilingual announcements keep the entire church family in the loop."],
      ["Plan your next Sunday", "Discover services, programs and special events through an easy calendar."],
      ["Watch from anywhere", "A clean media library makes messages and worship moments easy to revisit."],
      ["Connect with confidence", "Send a prayer request, update your information or reach the church securely."],
    ],
    mobileTag: "FOR THE CHURCH FAMILY", mobileTitle: "Your church, wherever life takes you.",
    mobileText: "A focused mobile experience for iOS and Android—fast, familiar and ready in English or French.",
    pills: ["Bilingual by design", "Built for accessibility", "Useful offline"],
    adminTag: "FOR MINISTRY TEAMS", adminTitle: "A calmer way to keep everyone connected.",
    adminText: "From one secure workspace, staff can publish events, share announcements, manage media and respond to submissions—without technical complexity.",
    roles: "Thoughtful roles. Clear responsibility.", roleText: "Admins oversee the whole system. Editors focus on the content they own.",
    quote: "Technology should fade into the background—so ministry and community can move forward.",
    finalTag: "CHAPELLE CONNECT", finalTitle: "One church. One place to belong.",
    finalText: "A simpler way to stay informed, take part and grow together.", finalCta: "Visit the staff dashboard",
    footer: "Made for Chapelle de la Résurrection", privacy: "Privacy", access: "Accessibility"
  },
  fr: {
    nav: ["Plateforme", "Pour les membres", "Pour les équipes"], login: "Connexion équipe", eyebrow: "Le foyer numérique de notre église",
    titleA: "La vie d’église,", titleB: "pleinement connectée.",
    intro: "Chapelle Connect réunit annonces, événements, messages et façons de se connecter dans une expérience bilingue simple.",
    cta: "Découvrir l’expérience", staff: "Ouvrir le tableau de bord", trusted: "Conçu pour la Chapelle de la Résurrection",
    live: "En direct dans toute l’église", labels: ["Annonces", "Événements à venir", "Dernier message"],
    sectionTag: "UNE PLATEFORME CONNECTÉE", sectionTitle: "Tout ce dont votre église a besoin.\nRien de superflu.",
    sectionIntro: "Les membres restent proches de la vie d’église. Les équipes disposent d’un espace calme et organisé pour informer chacun.",
    features: [
      ["Ne manquez rien d’important", "Des annonces bilingues et ponctuelles gardent toute la famille de l’église informée."],
      ["Planifiez votre dimanche", "Découvrez les cultes, programmes et événements spéciaux dans un calendrier clair."],
      ["Regardez de partout", "Une médiathèque épurée permet de retrouver facilement messages et moments de louange."],
      ["Connectez-vous en confiance", "Envoyez une demande de prière, actualisez vos coordonnées ou contactez l’église en sécurité."],
    ],
    mobileTag: "POUR LA FAMILLE DE L’ÉGLISE", mobileTitle: "Votre église vous accompagne partout.",
    mobileText: "Une expérience mobile ciblée pour iOS et Android—rapide, familière et disponible en français ou en anglais.",
    pills: ["Bilingue dès la conception", "Accessible pour tous", "Utile hors ligne"],
    adminTag: "POUR LES ÉQUIPES", adminTitle: "Une façon plus sereine de garder chacun connecté.",
    adminText: "Dans un espace sécurisé, l’équipe peut publier des événements, partager des annonces, gérer les médias et répondre aux demandes, sans complexité technique.",
    roles: "Des rôles réfléchis. Des responsabilités claires.", roleText: "Les administrateurs supervisent le système. Les éditeurs se concentrent sur leur contenu.",
    quote: "La technologie doit s’effacer—pour laisser le ministère et la communauté avancer.",
    finalTag: "CHAPELLE CONNECT", finalTitle: "Une église. Un lieu d’appartenance.",
    finalText: "Une façon plus simple de s’informer, participer et grandir ensemble.", finalCta: "Visiter le tableau de bord",
    footer: "Créé pour la Chapelle de la Résurrection", privacy: "Confidentialité", access: "Accessibilité"
  }
};

const Icon = ({ type }: { type: number }) => {
  const icons = ["✦", "◷", "▶", "↗"];
  return <span className="feature-icon" aria-hidden="true">{icons[type]}</span>;
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [menu, setMenu] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(
      ".platform, .mobile-section, .admin-section, .quote, .final-cta"
    ));
    sections.forEach((section) => section.classList.add("reveal-ready"));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <main>
    <header className="nav-wrap">
      <a href="#top" className="brand" aria-label="Chapelle Connect home"><span className="brand-mark">C</span><span>Chapelle <b>Connect</b></span></a>
      <nav className={menu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        <a href="#platform" onClick={() => setMenu(false)}>{t.nav[0]}</a><a href="#members" onClick={() => setMenu(false)}>{t.nav[1]}</a><a href="#teams" onClick={() => setMenu(false)}>{t.nav[2]}</a>
      </nav>
      <div className="nav-actions"><button className="lang" onClick={() => setLang(lang === "en" ? "fr" : "en")} aria-label="Switch language">{lang === "en" ? "FR" : "EN"}</button><a className="login" href="https://cdlr-admin.vercel.app/en/login" target="_blank" rel="noreferrer">{t.login}<span>↗</span></a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">☰</button></div>
    </header>

    <section className="hero" id="top">
      <div className="orb orb-one"/><div className="orb orb-two"/>
      <div className="hero-copy"><div className="eyebrow"><span>✦</span>{t.eyebrow}</div><h1>{t.titleA}<br/><em>{t.titleB}</em></h1><p>{t.intro}</p><div className="hero-actions"><a className="btn primary" href="#platform">{t.cta}<span>↓</span></a><a className="btn secondary" href="https://cdlr-admin.vercel.app/en/login" target="_blank" rel="noreferrer">{t.staff}<span>↗</span></a></div><div className="trusted"><div className="avatars"><span>A</span><span>M</span><span>J</span></div><span>{t.trusted}</span></div></div>
      <div className="product-scene" aria-label="Chapelle Connect product preview">
        <div className="phone"><div className="phone-top"><span>9:41</span><i></i><span>● ●</span></div><div className="app-head"><div className="mini-mark">C</div><div><small>WELCOME BACK</small><strong>Bonjour, Marie</strong></div><span className="bell">♢</span></div><div className="verse"><small>VERSET DU JOUR</small><p>“Car là où deux ou trois sont assemblés en mon nom, je suis au milieu d’eux.”</p><span>Matthieu 18:20</span></div><div className="quick"><b>{t.labels[0]}</b><a>Voir tout</a></div><div className="notice"><span>✦</span><div><small>AUJOURD’HUI</small><b>Soirée de prière</b><p>19 h 00 · Sanctuaire principal</p></div></div><div className="quick"><b>{t.labels[1]}</b></div><div className="event-row"><div className="date"><b>21</b><small>JUL</small></div><div><b>Culte du dimanche</b><p>10 h 00 · En personne</p></div></div><div className="tabbar"><span>⌂<small>Accueil</small></span><span>◫<small>Événements</small></span><span>▷<small>Médias</small></span><span>○<small>Connecter</small></span></div></div>
        <div className="float-card fc-one"><span className="pulse">✓</span><div><small>{t.live}</small><b>New announcement published</b></div></div>
        <div className="float-card fc-two"><span>◷</span><div><small>NEXT EVENT</small><b>Sunday · 10:00 AM</b></div></div>
      </div>
    </section>

    <section className="platform" id="platform"><div className="section-head"><div><span className="kicker">{t.sectionTag}</span><h2>{t.sectionTitle.split("\n").map((x,i)=><span key={x}>{x}{i===0&&<br/>}</span>)}</h2></div><p>{t.sectionIntro}</p></div><div className="feature-grid">{t.features.map((f,i)=><article key={f[0]}><Icon type={i}/><h3>{f[0]}</h3><p>{f[1]}</p><span className="line-arrow">→</span></article>)}</div></section>

    <section className="mobile-section" id="members"><div className="mobile-art"><div className="rings"></div><div className="mini-phone back"><div className="media-cover"><span>▶</span></div><b>Dimanche en direct</b><p>Un message d’espérance</p></div><div className="mini-phone front"><div className="prayer-icon">♡</div><small>NOUS SOMMES LÀ</small><h4>Comment pouvons-nous prier pour vous?</h4><p>Partagez votre demande en toute confiance avec notre équipe.</p><button>Envoyer une demande</button></div></div><div className="story-copy"><span className="kicker">{t.mobileTag}</span><h2>{t.mobileTitle}</h2><p>{t.mobileText}</p><div className="pills">{t.pills.map(x=><span key={x}>✓ {x}</span>)}</div><div className="store-row"><span><b>● App Store</b><small>Coming soon</small></span><span><b>▶ Google Play</b><small>Coming soon</small></span></div></div></section>

    <section className="admin-section" id="teams"><div className="story-copy"><span className="kicker mint">{t.adminTag}</span><h2>{t.adminTitle}</h2><p>{t.adminText}</p><div className="role-note"><span>♙</span><div><b>{t.roles}</b><p>{t.roleText}</p></div></div><a className="text-link" href="https://cdlr-admin.vercel.app/en/login" target="_blank" rel="noreferrer">{t.staff} <span>↗</span></a></div><div className="dashboard"><div className="dash-side"><div className="mini-mark">C</div>{["⌂","◫","◇","✉","▷","♙"].map(x=><span key={x}>{x}</span>)}</div><div className="dash-main"><div className="dash-top"><div><small>OVERVIEW</small><b>Good morning, Marie</b></div><button>+ New announcement</button></div><div className="stats"><span><small>UPCOMING EVENTS</small><b>12</b><i>+3 this month</i></span><span><small>ANNOUNCEMENTS</small><b>8</b><i>2 scheduled</i></span><span><small>NEW SUBMISSIONS</small><b>24</b><i>6 unread</i></span></div><div className="dash-content"><div><b>Upcoming events</b><div className="dash-event"><i>21<br/><small>JUL</small></i><span><b>Sunday Service</b><small>10:00 AM · Main Sanctuary</small></span><em>Published</em></div><div className="dash-event"><i>24<br/><small>JUL</small></i><span><b>Prayer Evening</b><small>7:00 PM · Main Sanctuary</small></span><em>Published</em></div></div><div className="activity"><b>Recent activity</b><p><i/>Announcement published<small>2 minutes ago</small></p><p><i/>New prayer submission<small>18 minutes ago</small></p><p><i/>Event updated<small>1 hour ago</small></p></div></div></div></div></section>

    <section className="quote"><div className="quote-mark">“</div><blockquote>{t.quote}</blockquote><div className="quote-brand"><span className="brand-mark">C</span><span>CHAPELLE DE LA RÉSURRECTION<small>RCCG · GATINEAU</small></span></div></section>
    <section className="final-cta"><div className="final-mark">C</div><span className="kicker">{t.finalTag}</span><h2>{t.finalTitle}</h2><p>{t.finalText}</p><a className="btn light" href="https://cdlr-admin.vercel.app/en/login" target="_blank" rel="noreferrer">{t.finalCta}<span>↗</span></a></section>
    <footer><a href="#top" className="brand"><span className="brand-mark">C</span><span>Chapelle <b>Connect</b></span></a><p>{t.footer}</p><div><a href="#">{t.privacy}</a><a href="#">{t.access}</a><button onClick={() => setLang(lang === "en" ? "fr" : "en")}>{lang === "en" ? "Français" : "English"}</button></div></footer>
  </main>;
}
