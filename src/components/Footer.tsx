import Link from "next/link";
import Image from "next/image";
import { MapPinIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-16 bg-mouride-dark text-mouride-cream">
      <div className="container-wide py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo Daara Madjmahoun Nourayni"
              width={56}
              height={56}
              className="bg-white rounded-full p-1"
            />
            <h3 className="font-display text-xl font-bold text-mouride-gold">
              Daara Madjmahoun Nourayni
            </h3>
          </div>
          <p className="mt-3 text-sm text-mouride-cream/80 max-w-md">
            Touba Keur Massar — fondée en 2004, sous le nom béni de Serigne
            Saliou Mbacké, digne fils de Serigne Touba (RTA).
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-mouride-gold">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/histoire" className="hover:text-mouride-gold">Histoire</Link></li>
            <li><Link href="/bureau" className="hover:text-mouride-gold">Le Bureau</Link></li>
            <li><Link href="/activites" className="hover:text-mouride-gold">Activités</Link></li>
            <li><Link href="/galerie" className="hover:text-mouride-gold">Galerie</Link></li>
            <li><Link href="/contact" className="hover:text-mouride-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-mouride-gold">Siège social</h4>
          <ul className="mt-3 space-y-3 text-sm text-mouride-cream/80">
            <li className="flex gap-2">
              <MapPinIcon className="w-4 h-4 text-mouride-gold shrink-0 mt-0.5" />
              <span>
                Keur Massar — Parcelles Assainies, Unité 6
                <br />
                Dakar, Sénégal
              </span>
            </li>
            <li className="flex gap-2">
              <MailIcon className="w-4 h-4 text-mouride-gold shrink-0 mt-0.5" />
              <span className="break-all">contact@dahira-madjmahoun-nourayni.sn</span>
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="w-4 h-4 text-mouride-gold shrink-0 mt-0.5" />
              <span>+221 — à compléter</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-4 text-center text-xs text-mouride-cream/60">
          © {new Date().getFullYear()} Daara Madjmahoun Nourayni — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
