import { PhoneIcon, UsersIcon, StarIcon } from "./Icons";

type Contact = {
  name: string;
  role?: string;
  phone: string;
};

const dieuwrigne: Contact = {
  name: "El Hadj Falilou Mbacké GNINGUE",
  role: "Dieuwrigne",
  phone: "+221 77 312 79 04",
};

const hommes: Contact[] = [
  {
    name: "Serigne Balla GNINGUE",
    role: "Secrétaire Général",
    phone: "+221 77 864 99 04",
  },
  {
    name: "Serigne Fallou Mbacké GUEYE",
    phone: "+221 78 102 87 79",
  },
];

const femmes: Contact[] = [
  {
    name: "Soxna Mame Diarra KANE",
    phone: "+221 77 445 69 93",
  },
  {
    name: "Sokhna Maty GUEYE",
    phone: "+221 78 469 00 40",
  },
];

function ContactLine({ c }: { c: Contact }) {
  const telHref = `tel:${c.phone.replace(/\s/g, "")}`;
  return (
    <li className="flex items-start gap-3 py-2">
      <div className="h-9 w-9 rounded-full bg-mouride-green/10 text-mouride-green flex items-center justify-center shrink-0">
        <PhoneIcon className="w-4 h-4" />
      </div>
      <div>
        <p className="font-semibold text-mouride-dark leading-tight">
          {c.name}
        </p>
        {c.role && (
          <p className="text-xs uppercase tracking-wider text-mouride-gold font-semibold">
            {c.role}
          </p>
        )}
        <a
          href={telHref}
          className="text-sm text-mouride-green hover:text-mouride-dark font-medium"
        >
          {c.phone}
        </a>
      </div>
    </li>
  );
}

export default function AdhesionSection() {
  return (
    <section className="container-wide py-16" id="adhesion">
      <div className="text-center max-w-2xl mx-auto">
        <p className="uppercase tracking-widest text-mouride-gold text-sm font-semibold">
          Rejoignez-nous
        </p>
        <h2 className="mt-2 section-title">Adhérer à la Daara</h2>
        <p className="section-subtitle">
          Vous souhaitez rejoindre la Daara Madjmahoun Nourayni&nbsp;? Contactez
          le secrétariat général. Une porte d'entrée pour les frères et une
          autre pour les sœurs.
        </p>
      </div>

      {/* Dieuwrigne en avant */}
      <div className="mt-10 max-w-3xl mx-auto">
        <div className="card border-mouride-gold/60 bg-gradient-to-br from-mouride-cream to-white">
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-full bg-mouride-gold text-mouride-dark flex items-center justify-center shrink-0">
              <StarIcon className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-mouride-gold font-bold">
                Dieuwrigne — Dirigeant de la Daara
              </p>
              <p className="font-display text-xl font-bold text-mouride-dark">
                {dieuwrigne.name}
              </p>
              <a
                href={`tel:${dieuwrigne.phone.replace(/\s/g, "")}`}
                className="mt-1 inline-flex items-center gap-2 text-mouride-green hover:text-mouride-dark font-semibold"
              >
                <PhoneIcon className="w-4 h-4" />
                {dieuwrigne.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Deux colonnes hommes / femmes */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-mouride-green text-white flex items-center justify-center">
              <UsersIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-mouride-dark">
                Pour les hommes
              </h3>
              <p className="text-xs text-mouride-green/80">
                Contactez le secrétariat général
              </p>
            </div>
          </div>
          <ul className="mt-4 divide-y divide-mouride-green/10">
            {hommes.map((c) => (
              <ContactLine key={c.phone} c={c} />
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-mouride-gold text-mouride-dark flex items-center justify-center">
              <UsersIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-mouride-dark">
                Pour les femmes
              </h3>
              <p className="text-xs text-mouride-green/80">
                Cellule féminine de la Daara
              </p>
            </div>
          </div>
          <ul className="mt-4 divide-y divide-mouride-green/10">
            {femmes.map((c) => (
              <ContactLine key={c.phone} c={c} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
