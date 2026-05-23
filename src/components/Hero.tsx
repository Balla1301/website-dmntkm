import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-wide relative py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-mouride-gold text-sm font-semibold">
            Bismillāhi Ar-Raḥmāni Ar-Raḥīm
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Daara Madjmahoun Nourayni
          </h1>
          <p className="mt-1 text-mouride-gold/90 font-display">
            Touba Keur Massar
          </p>
          <p className="mt-4 text-lg text-white/90 max-w-xl">
            Une communauté spirituelle de Keur Massar, fondée en 2004 et placée
            sous le nom béni de Serigne Saliou Mbacké, digne fils de Serigne
            Touba (RTA).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/histoire" className="btn-primary bg-mouride-gold text-mouride-dark hover:bg-white hover:text-mouride-dark">
              Découvrir notre histoire
            </Link>
            <Link href="/activites" className="btn-outline border-white text-white hover:bg-white hover:text-mouride-dark">
              Nos activités
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="aspect-square max-w-md mx-auto rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center p-6">
            <Image
              src="/logo.png"
              alt="Logo Daara Madjmahoun Nourayni — Touba Keur Massar"
              width={420}
              height={420}
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
          <p className="mt-4 text-center italic text-white/80">
            « Khidma, Tarbiyya, Akhlaq » — Service, Éducation, Vertu
          </p>
        </div>
      </div>
    </section>
  );
}
