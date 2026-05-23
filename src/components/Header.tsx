"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/histoire", label: "Histoire" },
  { href: "/bureau", label: "Le Bureau" },
  { href: "/activites", label: "Activités" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
  { href: "/#adhesion", label: "Adhérer", cta: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-mouride-green/10">
      <div className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Logo size={48} className="h-12 w-12" />
          <div className="leading-tight">
            <p className="font-display font-bold text-mouride-dark">
              Daara Madjmahoun Nourayni
            </p>
            <p className="text-xs text-mouride-green/70">Touba Keur Massar — 2004</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.cta
                  ? "text-sm font-semibold bg-mouride-gold text-mouride-dark px-4 py-2 rounded-md hover:bg-mouride-dark hover:text-white transition"
                  : "text-sm font-medium text-mouride-dark hover:text-mouride-gold transition"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden p-2 text-mouride-dark"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mouride-green/10 bg-white">
          <div className="container-wide py-3 flex flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-mouride-dark py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
