import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inside the Studio | Finesse by Beni",
  description:
    "A look inside the Finesse by Beni studio in Peterborough — recent work, the space, and what to expect from your appointment.",
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
