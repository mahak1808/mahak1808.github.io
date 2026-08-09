import type { Metadata } from "next";
import { Outfit, Be_Vietnam_Pro, Space_Mono } from "next/font/google";
import "./globals.css";
import { SITE_COLORS } from "@/constants/theme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mahak's Portfolio - React Native Developer",
  description:
    "I build mobile apps people actually use. React Native developer specializing in production-ready iOS & Android applications, with experience across APIs, real-time features, maps, notifications and modern web technologies.",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-be-vietnam",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" style={{ backgroundColor: SITE_COLORS.background }}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,300..600,0..1,-50..200"
        />
      </head>
      <body
        className={`${outfit.variable} ${beVietnamPro.variable} ${spaceMono.variable}`}
      >
        <div className={styles.bgContainer}>
          {/* Dot 1: Top-Left (Teal Glow) */}
          <div className={styles.dot1} />

          {/* Dot 2: Bottom-Right (Yellow Glow) */}
          <div className={styles.dot2} />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative min-h-screen z-10 flex flex-col">
          {children}
        </main>

        <div className="relative z-10">
          <Footer />
        </div>

        <WhatsAppButton />
      </body>
    </html>
  );
}

const styles = {
  bgContainer: "absolute top-0 left-0 w-full h-full bg-background",
  dot1: "absolute bottom-30 right-30 w-40 h-40 bg-primary-container/80 rounded-full blur-xl",
  dot2: "absolute top-20 left-20 w-30 h-30 bg-tertiary-container/80 rounded-full blur-xl",
};
