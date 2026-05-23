import PageHeader from "@/components/PageHeader";

const dieuwrine = {
  role: "Dieuwrine (Dirigeant)",
  name: "El Hadj Faliou Mbacké GNINGUE",
  description:
    "Guide et autorité morale de la Daara, garant de la fidélité à l'enseignement de Serigne Touba et de Serigne Saliou Mbacké.",
};

const bureau = [
  {
    role: "Secrétaire Général",
    name: "Balla GNINGUE",
    description:
      "Coordonne l'ensemble des activités de la Daara et assure le lien entre les commissions.",
  },
  {
    role: "Président — Commission Finance",
    name: "Serigne Modou Khabane SAMB",
    description:
      "Gère les ressources et la trésorerie de la Daara en toute transparence.",
  },
  {
    role: "Président — Audiovisuel & Sonorisation",
    name: "El Hadj Bara FALL",
    description:
      "Responsable du parc audiovisuel et de la captation des événements de la Daara.",
  },
  {
    role: "Président — Commission Sociale",
    name: "Serigne Modou GUEYE",
    description:
      "Anime les actions de solidarité, d'entraide et d'accompagnement des familles.",
  },
  {
    role: "Président — Commission Culturelle",
    name: "Serigne Saliou DIAKHATE",
    description:
      "Organise les conférences, rencontres et activités de transmission du patrimoine mouride.",
  },
  {
    role: "Président — Commission Organisation",
    name: "Serigne Cheikh NIANG",
    description:
      "Pilote la logistique des cérémonies, Magal et grands rassemblements.",
  },
  {
    role: "Président — Conservatoire des Kourels",
    name: "Serigne Babacar THIAW",
    description:
      "Veille à la transmission et à la qualité des Kourels (chœurs de récitation des Khassidas).",
  },
];

function MemberCard({
  role,
  name,
  description,
  highlight,
}: {
  role: string;
  name: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`card ${
        highlight ? "border-mouride-gold/60 bg-mouride-cream/50" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 rounded-full bg-gradient-hero flex items-center justify-center text-white font-display font-bold shrink-0">
          {name
            .split(" ")
            .filter((w) => w[0] === w[0]?.toUpperCase())
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-mouride-gold font-semibold">
            {role}
          </p>
          <h3 className="font-display text-lg font-bold text-mouride-dark">
            {name}
          </h3>
          <p className="mt-2 text-sm text-mouride-dark/70">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function BureauPage() {
  return (
    <>
      <PageHeader
        title="Le Bureau de la Daara"
        subtitle="Une équipe dévouée au service de la Daara et de sa mission spirituelle."
      />

      <section className="container-wide py-14">
        <h2 className="section-title">Notre Dieuwrine</h2>
        <p className="section-subtitle">
          À la tête de la Daara, notre dirigeant veille à la fidélité à
          l'enseignement de Serigne Saliou Mbacké.
        </p>
        <div className="mt-8 max-w-2xl">
          <MemberCard {...dieuwrine} highlight />
        </div>
      </section>

      <section className="container-wide pb-16">
        <h2 className="section-title">Les Commissions</h2>
        <p className="section-subtitle">
          Sept responsables organisent la vie spirituelle, sociale et matérielle
          de la Daara.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {bureau.map((m) => (
            <MemberCard key={m.role} {...m} />
          ))}
        </div>
      </section>
    </>
  );
}
