import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "@/components/Icons";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Nous Contacter"
        subtitle="Pour toute information, demande de devis ou participation à la Daara, écrivez-nous ou rendez-nous visite à notre siège."
      />

      <section className="container-wide py-14 grid md:grid-cols-3 gap-8">
        <aside className="space-y-4">
          <div className="card">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-mouride-green/10 text-mouride-green flex items-center justify-center shrink-0">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-mouride-dark">
                  Siège social
                </h3>
                <p className="mt-1 text-sm text-mouride-dark/80">
                  Keur Massar — Parcelles Assainies
                  <br />
                  <strong>Unité 6</strong>
                  <br />
                  Dakar, Sénégal
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-mouride-green/10 text-mouride-green flex items-center justify-center shrink-0">
                <PhoneIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-mouride-dark">
                  Téléphone
                </h3>
                <p className="mt-1 text-sm text-mouride-dark/80">
                  +221 — à compléter
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-mouride-green/10 text-mouride-green flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-mouride-dark">
                  Email
                </h3>
                <p className="mt-1 text-sm text-mouride-dark/80 break-all">
                  contact@dahira-madjmahoun-nourayni.sn
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-mouride-cream/60">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-mouride-gold/20 text-mouride-gold flex items-center justify-center shrink-0">
                <ClockIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-mouride-dark">
                  Horaires des activités
                </h3>
                <ul className="mt-2 text-sm text-mouride-dark/80 space-y-1">
                  <li>Récitations : à préciser</li>
                  <li>Réunions du bureau : à préciser</li>
                  <li>Grands Magal : selon le calendrier mouride</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>

        <div className="md:col-span-2 space-y-6">
          <ContactForm />

          <div className="card !p-0 overflow-hidden">
            <iframe
              title="Carte — Keur Massar Parcelles Assainies Unité 6"
              src="https://www.google.com/maps?q=Keur+Massar+Parcelles+Assainies+Unite+6+Dakar&output=embed"
              className="w-full h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
