import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/Toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SkyJourney Travels | Premium Travel & Tours",
    template: "%s | SkyJourney Travels",
  },
  description:
    "Explore the world with confidence. Premium travel services including flight booking, hotel reservations, visa assistance, and curated holiday packages. Your trusted travel partner since 2010.",
  keywords: [
    "travel agency",
    "tours",
    "flight booking",
    "hotel reservations",
    "visa assistance",
    "holiday packages",
    "Dubai",
    "London",
    "Istanbul",
    "Zanzibar",
    "Cairo",
  ],
  authors: [{ name: "SkyJourney Travels" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skyjourneytravels.com",
    siteName: "SkyJourney Travels",
    title: "SkyJourney Travels | Premium Travel & Tours",
    description:
      "Explore the world with confidence. Premium travel services since 2010.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "SkyJourney Travels - Explore the World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyJourney Travels | Premium Travel & Tours",
    description: "Explore the world with confidence. Premium travel services since 2010.",
    images: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=630&fit=crop"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
