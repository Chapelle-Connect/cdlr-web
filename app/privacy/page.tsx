import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for the Chapelle Connect public website.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="back-link" href="/">
        <span aria-hidden="true">←</span> Back to Chapelle Connect
      </Link>
      <h1>Privacy</h1>
      <p>Last updated July 29, 2026</p>

      <article>
        <h2>About this website</h2>
        <p>
          This public website introduces Chapelle Connect and links to the
          separate staff dashboard. It does not include advertising,
          third-party analytics, tracking pixels or public data-entry forms.
        </p>

        <h2>Technical information</h2>
        <p>
          Our hosting provider may process basic request information, such as
          an IP address, browser type and request time, to deliver the website
          securely and reliably. We do not use that information to build
          visitor profiles.
        </p>

        <h2>External services</h2>
        <p>
          The staff dashboard opens on a separate website and may process
          account or ministry information under its own access controls. Review
          the information shown there before submitting personal information.
        </p>

        <h2>Your questions</h2>
        <p>
          For a privacy question or request, contact Chapelle de la
          Résurrection through its official church channels.
        </p>
      </article>

      <article lang="fr">
        <h2>Confidentialité</h2>
        <p>
          Ce site public présente Chapelle Connect et mène vers le tableau de
          bord distinct de l’équipe. Il n’utilise ni publicité, ni outil
          d’analyse tiers, ni pixel de suivi, et ne contient aucun formulaire
          public.
        </p>
        <p>
          Notre hébergeur peut traiter des renseignements techniques de base
          afin de livrer le site de façon sécuritaire et fiable. Pour toute
          question, communiquez avec la Chapelle de la Résurrection par ses
          canaux officiels.
        </p>
      </article>
    </main>
  );
}
