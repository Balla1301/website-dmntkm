import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import AdhesionSection from "@/components/AdhesionSection";
import {
  MosqueIcon,
  HandshakeIcon,
  ServiceIcon,
  CoffeeIcon,
  SpeakerIcon,
  TentIcon,
  PotIcon,
  QuoteIcon,
  MapPinIcon,
  CalendarIcon,
} from "@/components/Icons";

const pillars = [
  {
    title: "Spiritualité",
    text: "Récitations du Khassidas, Hadras, Wazifas et célébrations religieuses tout au long de l'année.",
    Icon: MosqueIcon,
  },
  {
    title: "Communauté",
    text: "Une famille soudée autour des valeurs de fraternité, de respect et d'entraide.",
    Icon: HandshakeIcon,
  },
  {
    title: "Service (Khidma)",
    text: "Engagement social, soutien aux familles et participation aux grands événements du Mouridisme.",
    Icon: ServiceIcon,
  },
];

const activities = [
  { title: "Café Touba", desc: "Production et vente de café Touba artisanal.", Icon: CoffeeIcon },
  { title: "Sonorisation & Audiovisuel", desc: "Location de matériel pour cérémonies et événements.", Icon: SpeakerIcon },
  { title: "Bâches & Tentes", desc: "Location de bâches pour Magal, Gamou et événements familiaux.", Icon: TentIcon },
  { title: "Matériel de cuisine", desc: "Location de marmites, ustensiles et équipements collectifs.", Icon: PotIcon },
];

const guides = [
  {
    name: "Serigne Touba & Serigne Mountakha",
    title: "Fondateur & Khalife Général actuel",
    role: "La lignée mouride",
    img: "/STMM.jpg",
    bio: "Cheikh Ahmadou Bamba Khadimou Rassoul (RTA), fondateur du Mouridisme, et Serigne Mountakha Mbacké, actuel Khalife Général qui poursuit son œuvre spirituelle.",
    ratio: "aspect-[4/5]" as const,
  },
  {
    name: "Serigne Saliou Mbacké",
    title: "5ᵉ Khalife Général des Mourides (RTA)",
    role: "Guide spirituel de notre Daara",
    img: "/SSM.jpg",
    bio: "Digne fils de Serigne Touba (1915-2007). C'est lui qui, de sa propre bouche et de sa propre main, nous a donné le nom de notre Daara.",
    ratio: "aspect-[4/5]" as const,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Fondation 2004 */}
      <section className="container-wide py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-mouride-cream border-4 border-mouride-gold/40 shadow-xl relative">
              <Image
                src="/SSM.jpg"
                alt="Serigne Saliou Mbacké — guide spirituel de la Daara"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 via-transparent">
                <div className="text-white">
                  <p className="font-display font-bold text-lg">
                    Serigne Saliou Mbacké
                  </p>
                  <p className="text-sm text-mouride-gold">
                    5ᵉ Khalife des Mourides (RTA)
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-mouride-gold text-mouride-dark rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3">
              <CalendarIcon className="w-8 h-8" />
              <div>
                <p className="text-2xl font-display font-bold leading-none">2004</p>
                <p className="text-xs font-semibold">Année de fondation</p>
              </div>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-widest text-mouride-gold text-sm font-semibold">
              Un nom béni
            </p>
            <h2 className="mt-2 section-title">
              Un nom donné par Serigne Saliou Mbacké
            </h2>
            <p className="mt-4 text-mouride-dark/85 leading-relaxed">
              Notre Daara a été <strong>fondée en 2004</strong> à Keur Massar.
              C'est <strong>Serigne Saliou Mbacké</strong>, digne fils de
              Serigne Touba et alors Khalife Général des Mourides, qui nous a
              donné lui-même le nom de
              {" "}<strong className="text-mouride-green">« Madjmahoun Nourayni »</strong>
              {" "}— « la réunion des lumières ».
            </p>
            <div className="mt-6 rounded-xl border-l-4 border-mouride-gold bg-mouride-cream/60 p-5">
              <QuoteIcon className="w-7 h-7 text-mouride-gold mb-2" />
              <p className="italic text-mouride-dark/90 leading-relaxed">
                « De sa propre bouche, il prononça le nom. De sa propre main,
                il l'écrivit. Puis il nous demanda si l'écriture était claire. »
              </p>
              <p className="mt-2 text-xs text-mouride-green font-semibold uppercase tracking-wider">
                — Souvenir des fondateurs
              </p>
            </div>
            <p className="mt-6 text-mouride-dark/85 leading-relaxed">
              Ce nom, reçu directement de la main du Khalife, est pour nous un
              trésor spirituel et la boussole de chacune de nos actions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/histoire" className="btn-primary">Lire toute l'histoire</Link>
              <Link href="/bureau" className="btn-outline">Notre bureau</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="bg-mouride-cream/60 border-y border-mouride-green/10">
        <div className="container-wide py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title">Nos piliers</h2>
            <p className="section-subtitle">
              La Daara repose sur trois piliers indissociables, à l'image de
              l'enseignement de Serigne Touba.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="card text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-mouride-green/10 text-mouride-green flex items-center justify-center">
                  <p.Icon className="w-7 h-7" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-mouride-dark">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-mouride-dark/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides spirituels */}
      <section className="container-wide py-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-widest text-mouride-gold text-sm font-semibold">
            Nos guides spirituels
          </p>
          <h2 className="mt-2 section-title">Sur les pas des Khalifes</h2>
          <p className="section-subtitle">
            Notre Daara s'inscrit dans la lignée bénie du Mouridisme, de
            Serigne Touba au Khalife actuel.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {guides.map((g) => (
            <article key={g.name} className="card !p-0 overflow-hidden group">
              <div className={`${g.ratio} relative bg-mouride-green/10 overflow-hidden`}>
                <Image
                  src={g.img}
                  alt={g.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-mouride-gold/95 text-mouride-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {g.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-mouride-dark">
                  {g.name}
                </h3>
                <p className="text-sm text-mouride-green font-semibold">
                  {g.title}
                </p>
                <p className="mt-3 text-sm text-mouride-dark/75 leading-relaxed">
                  {g.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Activités */}
      <section className="bg-mouride-cream/60 border-y border-mouride-green/10">
        <div className="container-wide py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title">Nos projets & activités</h2>
            <p className="section-subtitle">
              Au-delà de la spiritualité, la Daara porte des projets
              économiques qui soutiennent ses missions et la communauté.
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((a) => (
              <div key={a.title} className="card">
                <div className="h-12 w-12 rounded-lg bg-mouride-green/10 text-mouride-green flex items-center justify-center">
                  <a.Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-mouride-green">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-mouride-dark/70">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/activites" className="btn-primary">Voir toutes nos activités</Link>
          </div>
        </div>
      </section>

      {/* Adhésion */}
      <AdhesionSection />

      {/* Siège social */}
      <section className="container-wide py-16">
        <div className="rounded-3xl bg-gradient-hero text-white overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-12">
              <div className="inline-flex items-center gap-2 bg-mouride-gold/20 text-mouride-gold px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                <MapPinIcon className="w-4 h-4" />
                Notre siège
              </div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold">
                Siège social de la Daara
              </h2>
              <p className="mt-4 text-white/90 text-lg">
                Keur Massar — Parcelles Assainies, <strong>Unité 6</strong>
              </p>
              <p className="mt-2 text-white/75">
                Dakar, Sénégal
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary bg-mouride-gold text-mouride-dark hover:bg-white">
                  Nous rendre visite
                </Link>
              </div>
            </div>
            <div className="relative min-h-[280px] bg-mouride-dark/50">
              <iframe
                title="Localisation Keur Massar Parcelles Assainies Unité 6"
                src="https://www.google.com/maps?q=Keur+Massar+Parcelles+Assainies+Unite+6+Dakar&output=embed"
                className="absolute inset-0 w-full h-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
