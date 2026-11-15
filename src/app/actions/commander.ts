"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  pickup: z.string().min(5, "Adresse de collecte requise"),
  delivery: z.string().min(5, "Adresse de livraison requise"),
  instructions: z.string().optional(),
  type: z.string().min(1, "Type d'envoi requis"),
  weight: z.string().optional(),
  urgency: z.string().min(1, "Urgence requise"),
  name: z.string().min(2, "Nom requis"),
  phone: z.string().min(8, "Téléphone requis"),
  email: z.string().email("Email invalide"),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function sendCourseRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    pickup: formData.get("pickup") as string,
    delivery: formData.get("delivery") as string,
    instructions: formData.get("instructions") as string,
    type: formData.get("type") as string,
    weight: formData.get("weight") as string,
    urgency: formData.get("urgency") as string,
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
  };

  const validated = schema.safeParse(raw);

  if (!validated.success) {
    return {
      success: false,
      message: "Veuillez corriger les erreurs dans le formulaire.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const data = validated.data;

  try {
    await resend.emails.send({
      from: "Coursiers à vélo <onboarding@resend.dev>", // замени после верификации домена
      to: process.env.CONTACT_EMAIL as string,
      subject: `Nouvelle course — ${data.name}`,
      html: `
        <h2>Nouvelle demande de course</h2>
        <p><strong>Nom / Société :</strong> ${data.name}</p>
        <p><strong>Téléphone :</strong> ${data.phone}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <hr />
        <p><strong>Collecte :</strong> ${data.pickup}</p>
        <p><strong>Livraison :</strong> ${data.delivery}</p>
        <p><strong>Instructions :</strong> ${data.instructions || "—"}</p>
        <hr />
        <p><strong>Type :</strong> ${data.type}</p>
        <p><strong>Poids :</strong> ${data.weight || "—"} kg</p>
        <p><strong>Urgence :</strong> ${data.urgency}</p>
      `,
    });

    return {
      success: true,
      message:
        "Votre demande a bien été envoyée. Je vous recontacte très rapidement.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}