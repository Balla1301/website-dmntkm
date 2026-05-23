import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { QuoteIcon, CalendarIcon, MapPinIcon, StarIcon } from "@/components/Icons";

export default function HistoirePage() {
  return (
    <>
      <PageHeader
        title="Notre Histoire & Spiritualité"
        subtitle="Une Daara fondée en 2004 à Keur Massar, sous le nom béni de Serigne Saliou Mbacké."
      />

      {/* Le récit du nom */}
      <section className="container-wide py-14">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-mouride-gold/40 shadow-xl relative">
              <Image
                src="/SSM.jpg"
                alt="Serigne Saliou Mbacké"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                <p className="font-display font-bold">Serigne Saliou Mbacké</p>
                <p className="text-sm text-mouride-gold">
                  5ᵉ Khalife des Mourides (1915 - 2007)
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 space-y-5">
            <p className="uppercase tracking-widest text-mouride-gold text-sm font-semibold">
              Aux origines
            </p>
            <h2 className="section-title">
              Un nom reçu de la main de Serigne Saliou Mbacké
            </h2>
            <p className="text-mouride-dark/85 leading-relaxed">
              La <strong>Daara Madjmahoun Nourayni</strong> — littéralement
              {" "}« <em>la réunion des lumières</em> » — a vu le jour en
              {" "}<strong>2004</strong> à <strong>Keur Massar</strong>, dans le
              quartier des Parcelles Assainies, Unité 6.
            </p>
            <p className="text-mouride-dark/85 leading-relaxed">
              Notre Daara porte un nom <strong>donné personnellement par
              Serigne Saliou Mbacké</strong>, digne fils de Serigne Touba et
              alors Khalife Général des Mourides.
            </p>
            <div className="rounded-xl border-l-4 border-mouride-gold bg-mouride-cream/60 p-6">
              <QuoteIcon className="w-8 h-8 text-mouride-gold mb-2" />
              <p className="italic text-mouride-dark/90 leading-relaxed text-lg">
                De sa propre bouche, il prononça le nom. De sa propre main,
                il l'écrivit sur un papier. Puis il nous le tendit en demandant :
                {" "}<strong>« L'écriture est-elle bien claire ? »</strong>
              </p>
              <p className="mt-3 text-xs text-mouride-green font-semibold uppercase tracking-wider">
                — Souvenir des fondateurs
              </p>
            </div>
            <p className="text-mouride-dark/85 leading-relaxed">
              Ce geste, à la fois humble et sacré, est resté gravé dans la
              mémoire des fondateurs. Le nom écrit par le Khalife est devenu le
              sceau spirituel de la Daara — un trésor que nous nous efforçons
              d'honorer chaque jour.
            </p>
          </div>
        </div>
      </section>

      {/* Repères */}
      <section className="bg-mouride-cream/60 border-y border-mouride-green/10">
        <div className="container-wide py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="card text-center">
            <CalendarIcon className="w-8 h-8 mx-auto text-mouride-gold" />
            <p className="mt-3 text-xs uppercase tracking-wider text-mouride-green font-semibold">Fondation</p>
            <p className="font-display text-2xl font-bold text-mouride-dark">2004</p>
          </div>
          <div className="card text-center">
            <MapPinIcon className="w-8 h-8 mx-auto text-mouride-gold" />
            <p className="mt-3 text-xs uppercase tracking-wider text-mouride-green font-semibold">Siège</p>
            <p className="font-display text-base font-bold text-mouride-dark">
              Keur Massar
              <br />
              <span className="text-sm font-normal">Parcelles Assainies, Unité 6</span>
            </p>
          </div>
          <div className="card text-center">
            <StarIcon className="w-8 h-8 mx-auto text-mouride-gold" />
            <p className="mt-3 text-xs uppercase tracking-wider text-mouride-green font-semibold">Guide spirituel</p>
            <p className="font-display text-base font-bold text-mouride-dark">
              Serigne Saliou Mbacké (RTA)
            </p>
          </div>
          <div className="card text-center">
            <StarIcon className="w-8 h-8 mx-auto text-mouride-gold" />
            <p className="mt-3 text-xs uppercase tracking-wider text-mouride-green font-semibold">Obédience</p>
            <p className="font-display text-base font-bold text-mouride-dark">Mouridiyya</p>
          </div>
        </div>
      </section>

      {/* Vocation spirituelle */}
      <section className="container-wide py-14 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6 text-mouride-dark/85 leading-relaxed">
          <h2 className="section-title">Notre vocation spirituelle</h2>
          <p>
            La Daara est avant tout un lieu de <strong>tarbiyya</strong>
            {" "}(éducation spirituelle) et de communion. Tout au long de l'année,
            nous organisons :
          </p>
          <ul className="space-y-2">
            {[
              "Les récitations hebdomadaires des Khassidas de Serigne Touba",
              "La nuit du Laylatoul Khadr",
              "Le Ziar auprès du Khalife",
              "La vivification des journées et nuits sous la recommandation du Khalife",
              "Les actions de bienfaisance envers les familles de Keur Massar",
            ].map((it) => (
              <li key={it} className="flex gap-2">
                <StarIcon className="w-5 h-5 text-mouride-gold shrink-0 mt-0.5" />
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <h2 className="section-title pt-6">Nos valeurs</h2>
          <p>
            <strong>Khidma</strong> (le service), <strong>Tarbiyya</strong>
            {" "}(l'éducation), <strong>Akhlaq</strong> (la noblesse de
            caractère) : trois piliers qui guident chacune de nos actions, de
            la prière collective au plus modeste des projets communautaires.
          </p>
        </div>

        <aside className="card bg-gradient-to-br from-mouride-cream to-white border-mouride-gold/40">
          <QuoteIcon className="w-7 h-7 text-mouride-gold" />
          <p className="italic text-mouride-dark/80 mt-3">
            « Travaille comme si tu ne devais jamais mourir, prie comme si tu
            devais mourir demain. »
          </p>
          <p className="mt-2 text-xs text-mouride-green font-semibold">— Sagesse mouride</p>
        </aside>
      </section>
    </>
  );
}
