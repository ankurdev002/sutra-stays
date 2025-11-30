import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Inter_Tight,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sutra Stays | Stay. Belong. Be - Premium Stays in Delhi & Mumbai",
  description:
    "Discover curated stays that bring together nature, comfort, and mindful design. Every stay is a Sutra - a story of peace, presence, and pure nature. Book your perfect stay in Delhi and Mumbai.",
  keywords: [
    "Sutra Stays",
    "premium stays",
    "Delhi stays",
    "Mumbai stays",
    "curated accommodations",
    "mindful design",
    "peaceful stays",
    "luxury stays",
    "boutique hotels",
    "short term rentals",
  ],
  authors: [{ name: "Sutra Stays" }],
  creator: "Sutra Stays",
  publisher: "Sutra Stays",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sutrastays.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sutra Stays | Stay. Belong. Be - Premium Stays in Delhi & Mumbai",
    description:
      "Every stay is a Sutra - a story of peace, presence, and pure nature. Discover curated stays that bring together nature, comfort, and mindful design in Delhi and Mumbai.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sutrastays.com",
    siteName: "Sutra Stays",
    images: [
      {
        url: "/assets/backgrounds/main-bg.svg",
        width: 1200,
        height: 630,
        alt: "Sutra Stays - Premium Stays in Delhi & Mumbai",
      },
      {
        url: "/assets/logo/nav-logo.svg",
        width: 400,
        height: 400,
        alt: "Sutra Stays Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutra Stays | Stay. Belong. Be",
    description:
      "Every stay is a Sutra - a story of peace, presence, and pure nature. Discover curated stays in Delhi and Mumbai.",
    images: ["/assets/backgrounds/main-bg.svg"],
    creator: "@sutrastays",
    site: "@sutrastays",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo/nav-logo.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/assets/logo/nav-logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${interTight.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <GoogleAnalytics />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="h-full w-full bg-off-white">{children}</main>
          <Footer data-section="contact-us" />
        </div>
      </body>
    </html>
  );
}
