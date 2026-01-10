import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

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
  title: "Foodie's Choice | Authentic Indian Cuisine in Wembley",
  description: "Experience the rich flavors of traditional Indian recipes passed down through generations. Located in Wembley, serving authentic curries, biryanys, and street food.",
  openGraph: {
    title: "Foodie's Choice | Authentic Indian Cuisine",
    description: "Authentic Indian Cuisine in Wembley. Experience the rich flavors of traditional recipes passed down through generations.",
    url: "https://foodieschoice.co.uk",
    siteName: "Foodie's Choice",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodie's Choice | Authentic Indian Cuisine",
    description: "Authentic Indian Cuisine in Wembley. Order online for pickup or delivery.",
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
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
