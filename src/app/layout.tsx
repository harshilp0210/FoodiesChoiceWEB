import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AnnouncementBanner, GrowthPopup } from "@/components/GrowthFeatures";

import { Toaster } from "sonner";



const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foodies Choice POS – Order Online & Restaurant Management System",
  description: "Order delicious food online, reserve your table, or explore our Foodies Choice POS system for restaurants. Fast, secure, and easy to use.",
  openGraph: {
    title: "Foodies Choice POS – Order Online & Restaurant Management System",
    description: "Order delicious food online, reserve your table, or explore our Foodies Choice POS system for restaurants.",
    url: "https://foodieschoice.co.uk",
    siteName: "Foodies Choice",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodies Choice POS",
    description: "Order delicious food online, reserve your table, or explore our POS system.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-black text-white selection:bg-orange-500 selection:text-white`}
      >
        <SmoothScroll>
          <AnnouncementBanner />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <GrowthPopup />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
