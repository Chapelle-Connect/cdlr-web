import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility information for the Chapelle Connect website.",
};

export default function AccessibilityPage() {
  return (
    <main className="legal-page">
      <Link className="back-link" href="/">
        <span aria-hidden="true">←</span> Back to Chapelle Connect
      </Link>
      <h1>Accessibility</h1>
      <p>Last updated July 29, 2026</p>

      <article>
        <h2>Our commitment</h2>
        <p>
          Chapelle Connect is designed to work with keyboards, screen readers,
          browser zoom and reduced-motion preferences. Content is available in
          English and French from the language control in the main navigation.
        </p>

        <h2>Built-in support</h2>
        <ul>
          <li>A skip link provides direct access to the main content.</li>
          <li>Interactive elements have visible keyboard focus states.</li>
          <li>Text and controls maintain readable contrast and sizing.</li>
          <li>Decorative motion is removed when reduced motion is enabled.</li>
        </ul>

        <h2>Feedback</h2>
        <p>
          If you encounter an accessibility barrier, contact Chapelle de la
          Résurrection through its official church channels. Include the page,
          device and browser you were using so the team can investigate.
        </p>
      </article>

      <article lang="fr">
        <h2>Notre engagement</h2>
        <p>
          Chapelle Connect est conçu pour fonctionner au clavier, avec les
          lecteurs d’écran, le zoom du navigateur et les préférences de
          réduction des animations. Si vous rencontrez un obstacle, communiquez
          avec la Chapelle de la Résurrection par ses canaux officiels.
        </p>
      </article>
    </main>
  );
}
