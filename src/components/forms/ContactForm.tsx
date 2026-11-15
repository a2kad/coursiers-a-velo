"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/actions/contact";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="space-y-6">
      {/* Стабильный блок уведомления с фиксированным key */}
      {state.message ? (
        <div
          key={state.message}
          className={cn(
            "px-5 py-4 rounded-xl text-sm flex items-start gap-3 border",
            state.success
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-700"
          )}
        >
          {state.success && (
            <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
          )}
          <div>
            {state.success && <p className="font-semibold">Message envoyé !</p>}
            <p className={state.success ? "text-sm mt-1" : ""}>{state.message}</p>
          </div>
        </div>
      ) : null}

      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
          <CardDescription>
            Je vous répondrai dans les plus brefs délais.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            ref={formRef}
            action={formAction}
            className="space-y-6"
            data-gramm="false"
            data-enable-grammarly="false"
            suppressHydrationWarning
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  required
                  spellCheck={false}
                  data-gramm="false"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Société (optionnel)</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nom de votre société"
                  spellCheck={false}
                  data-gramm="false"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.fr"
                  required
                  spellCheck={false}
                  data-gramm="false"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  spellCheck={false}
                  data-gramm="false"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Sujet *</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Demande de devis, information..."
                required
                autoComplete="off"
                spellCheck={false}
                data-gramm="false"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Décrivez votre besoin..."
                rows={5}
                required
                autoComplete="off"
                spellCheck={false}
                data-gramm="false"
              />
            </div>

            {/* Стабильная кнопка без условного демонтирования узлов */}
            <button
              type="submit"
              disabled={isPending}
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-primary text-primary-foreground hover:bg-primary/90 relative"
              )}
            >
              <span className="flex items-center justify-center gap-2">
                {isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </span>
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}