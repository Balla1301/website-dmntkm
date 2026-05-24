"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; label: string };

const slides: Slide[] = [
  { src: "/kourel1.jpg", label: "Kourel — récitation des Khassidas" },
  { src: "/zikroullah.jpg", label: "Zikrullah — souvenir d'Allah" },
  { src: "/Ziar-HTDKH.jpg", label: "Ziar — Hizbou Tarqiya Daarou Khoudoss" },
  { src: "/cellule-feminie.jpg", label: "Cellule féminine de la Daara" },
  { src: "/adolescent.jpg", label: "Cellule des adolescents" },
  { src: "/cafe-vente.jpg", label: "Café Touba — production & vente" },
  { src: "/audio-sonno.jpg", label: "Sonorisation & audiovisuel" },
];

const INTERVAL_MS = 4500;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-mouride-dark/30 relative">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="font-display font-bold text-lg drop-shadow-md">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Image ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === i
                ? "w-8 bg-mouride-gold"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
