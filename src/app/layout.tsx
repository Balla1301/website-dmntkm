import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daara Madjmahoun Nourayni — Touba Keur Massar",
  description:
    "Daara Madjmahoun Nourayni de Touba Keur Massar, fondée en 2004 sous le nom de Serigne Saliou Mbacké. Spiritualité, communauté et projets.",
  keywords: [
    "Daara",
    "Dahira",
    "Madjmahoun Nourayni",
    "Touba Keur Massar",
    "Serigne Saliou Mbacké",
    "Mouridisme",
    "Café Touba",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
