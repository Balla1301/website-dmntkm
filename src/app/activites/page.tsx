import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  CoffeeIcon,
  SpeakerIcon,
  TentIcon,
  PotIcon,
  CheckIcon,
} from "@/components/Icons";

const projects = [
  {
    title: "Café Touba",
    tagline: "Une boisson, une tradition",
    Icon: CoffeeIcon,
    description:
      "Notre Daara produit et commercialise du Café Touba selon la recette traditionnelle, riche en poivre de Selim (djar). Une activité qui finance nos projets spirituels et sociaux.",
    points: [
      "Café moulu et café en grain",
      "Conditionnements variés (sachets, paquets familiaux)",
      "Livraison à Keur Massar et environs",
    ],
  },
  {
    title: "Location de Sonorisation & Audiovisuel",
    tagline: "Pour vos cérémonies et événements",
    Icon: SpeakerIcon,
    description:
      "La Daara met à disposition un parc complet de matériel audiovisuel : enceintes, micros, tables de mixage, projecteurs et écrans pour vos Magal, Gamou, mariages et baptêmes.",
    points: [
      "Sonorisation professionnelle pour grands rassemblements",
      "Captation vidéo & retransmission",
      "Techniciens formés à disposition",
    ],
  },
  {
    title: "Location de Bâches & Tentes",
    tagline: "Accueillez vos invités avec dignité",
    Icon: TentIcon,
    description:
      "Bâches, tentes, chaises et tables : tout ce qu'il faut pour accueillir confortablement vos invités lors de vos cérémonies religieuses ou familiales.",
    points: [
      "Bâches de différentes tailles",
      "Chaises et tables en quantité",
      "Montage et démontage assurés",
    ],
  },
  {
    title: "Location de Matériel de Cuisine",
    tagline: "Pour cuisiner pour la communauté",
    Icon: PotIcon,
    description:
      "Grandes marmites, ustensiles, bouteilles de gaz : nous louons le matériel nécessaire pour préparer les repas collectifs lors des Magal, Gamou et cérémonies familiales.",
    points: [
      "Marmites grandes capacités",
      "Ustensiles de cuisine collectifs",
      "Solutions adaptées aux grandes assemblées",
    ],
  },
];

export default function ActivitesPage() {
  return (
    <>
      <PageHeader
        title="Nos Activités & Projets"
        subtitle="En dehors de la spiritualité, la Daara porte plusieurs projets économiques qui soutiennent ses missions."
      />

      <section className="container-wide py-14 space-y-10">
        {projects.map((p, idx) => (
          <article
            key={p.title}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-mouride-green/15 to-mouride-gold/15 border border-mouride-green/20 flex items-center justify-center">
              <p.Icon className="w-28 h-28 text-mouride-green/80" strokeWidth={1.2} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider font-semibold text-mouride-gold">
                {p.tagline}
              </p>
              <h2 className="mt-1 font-display text-2xl md:text-3xl font-bold text-mouride-dark">
                {p.title}
              </h2>
              <p className="mt-3 text-mouride-dark/80">{p.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 items-start">
                    <CheckIcon className="w-5 h-5 text-mouride-gold shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary mt-6">
                Demander un devis
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
