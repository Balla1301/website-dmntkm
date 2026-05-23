"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Erreur lors de l'envoi");
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <h2 className="font-display text-2xl font-bold text-mouride-dark">
        Écrivez-nous
      </h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-mouride-dark">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-mouride-green/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mouride-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-mouride-dark">
            Téléphone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+221 ..."
            className="mt-1 w-full rounded-md border border-mouride-green/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mouride-gold"
          />
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-mouride-dark">
            Sujet *
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className="mt-1 w-full rounded-md border border-mouride-green/30 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-mouride-gold"
          >
            <option value="" disabled>Choisir un sujet</option>
            <option>Information générale</option>
            <option>Participation à la Daara</option>
            <option>Devis : Café Touba</option>
            <option>Devis : Sonorisation / Audiovisuel</option>
            <option>Devis : Bâches & tentes</option>
            <option>Devis : Matériel de cuisine</option>
            <option>Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-mouride-dark">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-mouride-green/30 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mouride-gold"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-mouride-green font-medium">
          ✓ Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          ✗ {errorMsg || "Une erreur est survenue. Réessayez plus tard."}
        </p>
      )}
    </form>
  );
}
