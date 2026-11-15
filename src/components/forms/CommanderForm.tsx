"use client";

import { useActionState, useState, useEffect } from "react";
import { sendCourseRequest, type FormState } from "@/app/actions/commander";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Package,
  User,
  Clock,
  Bike,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const initialState: FormState = {
  success: false,
  message: "",
};

export function CommanderForm() {
  const [state, formAction, isPending] = useActionState(
    sendCourseRequest,
    initialState
  );

  const [type, setType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

// Когда приходит успешный ответ — показываем success
  useEffect(() => {
    if (state.success) {
      setShowSuccess(true);
    }
  }, [state.success]);

  // При монтировании компонента всегда показываем форму
  useEffect(() => {
    setShowSuccess(false);
    setType("");
    setUrgency("");
  }, []);

  if (showSuccess) {
    return (
      <Card className="border shadow-sm">
        <CardContent className="py-16 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-3">Demande envoyée !</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            {state.message}
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-2"
            )}
          >
            Envoyer une autre demande
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {/* Скрытые поля для Select */}
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="urgency" value={urgency} />

      {/* Adresses */}
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <MapPin className="h-5 w-5 text-primary" />
            Adresses
          </CardTitle>
          <CardDescription>
            Indiquez le point de départ et la destination
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="pickup">Adresse de collecte</Label>
            <Input
              id="pickup"
              name="pickup"
              placeholder="Ex: 12 rue de la Paix, 14000 Le Havre"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="delivery">Adresse de livraison</Label>
            <Input
              id="delivery"
              name="delivery"
              placeholder="Ex: 45 avenue de la Mer, 14000 Le Havre"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">
              Instructions particulières (optionnel)
            </Label>
            <Textarea
              id="instructions"
              name="instructions"
              placeholder="Code d'entrée, étage, nom de l'interlocuteur..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Colis */}
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Package className="h-5 w-5 text-primary" />
            Détails du colis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Type d&apos;envoi</Label>
              <Select
                value={type}
                onValueChange={(value) => setType(value ?? "")}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pli / Document">Pli / Document</SelectItem>
                  <SelectItem value="Petit colis (< 5 kg)">
                    Petit colis (&lt; 5 kg)
                  </SelectItem>
                  <SelectItem value="Colis moyen (5-15 kg)">
                    Colis moyen (5-15 kg)
                  </SelectItem>
                  <SelectItem value="Grand colis (15-30 kg)">
                    Grand colis (15-30 kg)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Poids approximatif (kg)</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                placeholder="Ex: 2"
                min="0"
                max="30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Urgence</Label>
            <Select
              value={urgency}
              onValueChange={(value) => setUrgency(value ?? "")}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Course standard">Course standard</SelectItem>
                <SelectItem value="Urgent">
                  Urgent (le plus tôt possible)
                </SelectItem>
                <SelectItem value="Course planifiée">
                  Course planifiée
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <User className="h-5 w-5 text-primary" />
            Vos coordonnées
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom / Société</Label>
              <Input
                id="name"
                name="name"
                placeholder="Votre nom ou société"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="06 12 34 56 78"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="vous@exemple.fr"
              required
            />
          </div>
        </CardContent>
      </Card>

      {/* Error */}
      {state.message && !state.success && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
          {state.message}
        </div>
      )}

      {/* Submit */}
		<div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
		<p className="text-sm text-muted-foreground flex items-center gap-2">
			<Clock className="h-4 w-4" />
			Réponse sous 30 minutes en moyenne
		</p>

		<button
			type="submit"
			disabled={isPending || !type || !urgency}
			className={cn(
			buttonVariants({ size: "lg" }),
			"w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 min-w-[240px]",
			isPending && "opacity-80 cursor-not-allowed"
			)}
		>
			{isPending ? (
			"Envoi en cours..."
			) : (
			<span className="flex items-center gap-2">
				<Bike className="h-5 w-5" />
				Envoyer la demande
				<ArrowRight className="h-4 w-4" />
			</span>
			)}
		</button>
		</div>
    </form>
  );
}