"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2, "Nom requis"),
  company: z.string().optional(),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Sujet requis"),
  message: z.string().min(10, "Message trop court"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") as string,
    company: formData.get("company") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  const validated = schema.safeParse(raw);

  if (!validated.success) {
    return {
      success: false,
      message: "Veuillez remplir correctement tous les champs obligatoires.",
    };
  }

  // 1. Извлекаем проверенные данные формы в понятную переменную formValues
  const formValues = validated.data;

  try {
    // 2. Отправляем письмо через Resend
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Coursiers à vélo <onboarding@resend.dev>", // Измените после верификации домена
      to: process.env.CONTACT_EMAIL as string,
      replyTo: formValues.email,
      subject: `Contact — ${formValues.subject}`,
      html: `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${formValues.name}</p>
        <p><strong>Société :</strong> ${formValues.company || "—"}</p>
        <p><strong>Email :</strong> ${formValues.email}</p>
        <p><strong>Téléphone :</strong> ${formValues.phone || "—"}</p>
        <p><strong>Sujet :</strong> ${formValues.subject}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${formValues.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return {
        success: false,
        message: `Erreur Resend: ${resendError.message}`,
      };
    }

    return {
      success: true,
      message: "Votre message a bien été envoyé. Je vous répondrai rapidement.",
    };
  } catch (error) {
    console.error("Unexpected Error:", error);
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}