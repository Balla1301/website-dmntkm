import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, subject, message } = body as Record<string, string>;

    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    // TODO: brancher un service d'envoi / notification (Resend, WhatsApp, etc.)
    // Pour l'instant on log côté serveur — à remplacer en production.
    console.log("[CONTACT]", { name, phone, subject, message });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }
}
