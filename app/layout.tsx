import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl ?? "http://localhost:3000"),
  title: {
    default: "Chapelle Connect — Church life, beautifully connected",
    template: "%s — Chapelle Connect",
  },
  description:
    "The bilingual digital home of Chapelle de la Résurrection—announcements, events, media and connection in one place.",
  applicationName: "Chapelle Connect",
  category: "community",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    siteName: "Chapelle Connect",
    title: "Church life, beautifully connected",
    description:
      "Announcements, events, media and meaningful connection for Chapelle de la Résurrection.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapelle Connect",
    description:
      "Church life, beautifully connected at Chapelle de la Résurrection.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/chapelle-connect-logo.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffdfa",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
