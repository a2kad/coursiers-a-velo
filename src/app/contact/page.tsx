import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white hover:bg-white/20"
          >
            Contact
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Entrons en
            <br />
            <span className="text-primary">contact</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Une question, un devis ou une course à organiser ?
            N&apos;hésitez pas à me contacter.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Mes coordonnées</h2>
                <p className="text-muted-foreground mb-8">
                  Je suis disponible du lundi au vendredi pour répondre à vos
                  demandes.
                </p>
              </div>

              <Card className="border shadow-sm">
                <CardContent className="pt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a
                        href="tel:+33612345678"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        06 12 34 56 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:contact@test.fr"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@test.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Zone d&apos;intervention</p>
                      <p className="text-muted-foreground">
                        Le Havre et son agglomération
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-muted-foreground">
                        Lundi – Vendredi<br />
                        8h00 – 18h00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Link
                href="/commander"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                Commander une course
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}