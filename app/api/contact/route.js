import { Resend } from "resend";

// Adresse qui reçoit les messages du formulaire.
const CONTACT_EMAIL = "monelcocou@gmail.com";

// Expéditeur technique. onboarding@resend.dev fonctionne sans domaine vérifié,
// mais n'autorise l'envoi que vers l'adresse du compte Resend.
// Une fois monelcocou.com vérifié chez Resend : "Portfolio <contact@monelcocou.com>".
const FROM_EMAIL = "Portfolio <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY absente de l'environnement.");
    return Response.json(
      { error: "Le formulaire n’est pas configuré. Écrivez-moi directement." },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const firstname = String(body.firstname || "").trim();
  const lastname = String(body.lastname || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();

  // Champ piège : invisible pour un humain, rempli par les robots.
  if (String(body.website || "").length > 0) {
    return Response.json({ ok: true });
  }

  if (!firstname || !lastname || !email || !message) {
    return Response.json(
      { error: "Merci de remplir les champs obligatoires." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json(
      { error: "Cette adresse email semble invalide." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return Response.json(
      { error: "Message trop long (5000 caractères maximum)." },
      { status: 400 },
    );
  }

  const text = [
    `Nom : ${firstname} ${lastname}`,
    `Email : ${email}`,
    phone && `Téléphone : ${phone}`,
    subject && `Objet : ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio — ${subject || "Nouveau message"} (${firstname} ${lastname})`,
      text,
    });

    if (error) {
      console.error("Resend a refusé l'envoi :", error);
      return Response.json(
        { error: "L’envoi a échoué. Réessayez ou écrivez-moi directement." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (exception) {
    console.error("Erreur lors de l'envoi :", exception);
    return Response.json(
      { error: "L’envoi a échoué. Réessayez ou écrivez-moi directement." },
      { status: 500 },
    );
  }
}
