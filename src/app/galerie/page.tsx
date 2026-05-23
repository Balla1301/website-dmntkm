import PageHeader from "@/components/PageHeader";

const placeholders = [
  "Magal de Touba",
  "Récitations du Khassida",
  "Gamou de la Daara",
  "Action sociale",
  "Sonorisation événement",
  "Production Café Touba",
  "Cérémonie communautaire",
  "Conservatoire des Kourels",
];

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        title="Galerie"
        subtitle="Quelques moments forts de la vie de notre Daara. Les photos et vidéos seront ajoutées progressivement."
      />

      <section className="container-wide py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {placeholders.map((label, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-mouride-green/10 border border-mouride-green/20 flex items-end p-3"
            >
              <span className="text-xs font-medium text-mouride-dark/70 bg-white/80 rounded px-2 py-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-mouride-dark/60 italic">
          Bientôt : photos et vidéos des Magal, Gamou et activités sociales.
        </p>
      </section>
    </>
  );
}
