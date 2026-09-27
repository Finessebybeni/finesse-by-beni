import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Treatments | Finesse by Beni",
  description:
    "Browse nail, waxing, brow & lash, massage, and facial treatments at Finesse by Beni in Peterborough. View prices and book online via Fresha.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
