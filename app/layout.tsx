import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
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
      <body
        className={`font-sans ${inter.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
