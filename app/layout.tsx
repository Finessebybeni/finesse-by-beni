import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import Analytics from "../components/Analytics";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: "Finesse by Beni",
  description: "Luxury nails, brows, lashes and beauty treatments in Peterborough. Book your appointment today at Finesse by Beni.",

  openGraph: {
    title: "Finesse by Beni – Nails & Beauty in Peterborough",
    description:
      "Luxury nails, brows and beauty treatments in a calm, private studio. Book online today.",
    url: "https://www.finessebybeni.com",
    siteName: "Finesse by Beni",
    images: [
      {
        url: "https://www.finessebybeni.com/finesse-preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Navbar />
        <AnnouncementBar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}