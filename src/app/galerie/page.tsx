import Image from "next/image";
import PageHeader from "@/components/PageHeader";

type Photo = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: "Spiritualité" | "Cellules" | "Activités";
  span?: "wide" | "tall";
};

const photos: Photo[] = [
  {
    src: "/kourel1.jpg",
    alt: "Kourel de la Daara",
    title: "Kourel",
    caption: "Récitation des Khassidas de Serigne Touba",
    category: "Spiritualité",
    span: "wide",
  },
  {
    src: "/zikroullah.jpg",
    alt: "Séance de Zikrullah",
    title: "Zikrullah",
    caption: "Souvenir d'Allah en assemblée",
    category: "Spiritualité",
  },
  {
    src: "/Ziar-HTDKH.jpg",
    alt: "Ziar de la Daara chez Hizbou Tarqiya à Daarou Khoudoss",
    title: "Ziar — Hizbou Tarqiya",
    caption: "Visite spirituelle à Daarou Khoudoss",
    category: "Spiritualité",
    span: "tall",
  },
  {
    src: "/cellule-feminie.jpg",
    alt: "Cellule féminine de la Daara",
    title: "Cellule Féminine",
    caption: "Les sœurs de la Daara, piliers de la communauté",
    category: "Cellules",
    span: "wide",
  },
  {
    src: "/adolescent.jpg",
    alt: "Cellule des adolescents",
    title: "Cellule Adolescents",
    caption: "La relève spirituelle de la Daara",
    category: "Cellules",
  },
  {
    src: "/cafe-vente.jpg",
    alt: "Vente de Café Touba",
    title: "Café Touba",
    caption: "Production et vente de Café Touba",
    category: "Activités",
  },
  {
    src: "/audio-sonno.jpg",
    alt: "Sonorisation & audiovisuel",
    title: "Sonorisation & Audiovisuel",
    caption: "Notre matériel au service des événements",
    category: "Activités",
    span: "wide",
  },
];

const categories = ["Spiritualité", "Cellules", "Activités"] as const;

const categoryStyles: Record<(typeof categories)[number], string> = {
  Spiritualité: "bg-mouride-green text-white",
  Cellules: "bg-mouride-gold text-mouride-dark",
  Activités: "bg-mouride-dark text-mouride-gold",
};

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        title="Galerie"
        subtitle="Moments forts de la vie de notre Daara : spiritualité, cellules, activités et projets."
      />

      {/* Grille principale en mosaïque */}
      <section className="container-wide py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] gap-4">
          {photos.map((p) => {
            const colSpan = p.span === "wide" ? "md:col-span-2" : "";
            const rowSpan = p.span === "tall" ? "row-span-2" : "";
            return (
              <figure
                key={p.src}
                className={`relative group rounded-2xl overflow-hidden border border-mouride-green/15 shadow-sm hover:shadow-xl transition-all ${colSpan} ${rowSpan}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryStyles[p.category]}`}
                  >
                    {p.category}
                  </span>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="font-display font-bold">{p.title}</p>
                  <p className="text-xs text-white/85">{p.caption}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Section par catégorie */}
      <section className="bg-mouride-cream/60 border-y border-mouride-green/10">
        <div className="container-wide py-14">
          <h2 className="section-title text-center">Explorer par thématique</h2>
          <p className="section-subtitle text-center">
            La vie de la Daara à travers ses trois grandes dimensions.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const count = photos.filter((p) => p.category === cat).length;
              const cover = photos.find((p) => p.category === cat);
              return (
                <div
                  key={cat}
                  className="card !p-0 overflow-hidden group"
                >
                  <div className="aspect-[4/3] relative">
                    {cover && (
                      <Image
                        src={cover.src}
                        alt={cat}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p
                        className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${categoryStyles[cat]}`}
                      >
                        {cat}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">
                        {cat}
                      </h3>
                      <p className="text-sm text-white/80">
                        {count} photo{count > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-wide py-10 text-center">
        <p className="text-sm text-mouride-dark/60 italic">
          De nouvelles photos et vidéos seront ajoutées progressivement après chaque Magal, Gamou et activité majeure.
        </p>
      </section>
    </>
  );
}
