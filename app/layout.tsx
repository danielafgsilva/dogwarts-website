import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { Preloader } from "@/components/magic/preloader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Display serif for headings — storybook / "magical" character.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dogwarts - Cães Felizes & Donos Tranquilos",
    template: "%s | Dogwarts",
  },
  description:
    "Serviços de cuidados para cães com amor e confiança. Petsitting, dogwalking, creche e estadia familiar em Lisboa, Portugal.",
  keywords: [
    "cuidados cães",
    "petsitting",
    "dogwalking",
    "creche cães",
    "estadia familiar",
    "Lisboa",
    "Portugal",
  ],
  authors: [{ name: "Dogwarts" }],
  creator: "Dogwarts",
  publisher: "Dogwarts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dogwarts.pt"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://dogwarts.pt",
    title: "Dogwarts - Cães Felizes & Donos Tranquilos",
    description:
      "Serviços de cuidados para cães com amor e confiança. Petsitting, dogwalking, creche e estadia familiar em Lisboa, Portugal.",
    siteName: "Dogwarts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dogwarts - Cães Felizes & Donos Tranquilos",
    description:
      "Serviços de cuidados para cães com amor e confiança. Petsitting, dogwalking, creche e estadia familiar em Lisboa, Portugal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        {/* Without JS, scroll-reveal elements must still be visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body
        className={`font-sans ${inter.variable} ${playfair.variable} ${GeistMono.variable} antialiased`}
      >
        <Preloader />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
