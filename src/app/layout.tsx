import type { Metadata } from "next";
import { Archivo_Black, Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: `${profile.name} — Python Developer & CS Undergrad`,
  description: profile.summary.slice(0, 155),
  keywords: [
    "Abhishek Gupta",
    "Python Developer",
    "Data Structures and Algorithms",
    "Machine Learning",
    "Brainware University",
    "Java",
    "SQL",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.headline,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/profile-square.webp", width: 1200, height: 1200, alt: `${profile.name} — portrait` }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — Portfolio`,
    description: profile.headline,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
