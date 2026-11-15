import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bike,
  Package,
  Mail,
  FileText,
  Clock,
  Leaf,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Courses standard",
    description:
      "Comme plus de 300 sociétés de l'agglomération, confiez-nous vos envois : plis, documents ou colis jusqu'à 30 kg. Réguliers ou ponctuels.",
    price: "À partir de 5€ HT",
    features: [
      "Livraison le jour même",
      "Suivi en temps réel",
      "Jusqu'à 30 kg",
      "Zone Le Havre + agglomération",
    ],
  },
  {
    icon: Mail,
    title: "Remise / collecte du courrier",
    description:
      "Levée de votre boîte postale le matin et dépôt de votre courrier dans vos locaux avant 9h. Collecte de votre courrier affranchi l'après-midi vers La Poste.",
    price: "À partir de 3,50€ HT",
    features: [
      "Levée matinale",
      "Dépôt avant 9h",
      "Collecte après-midi",
      "Service régulier possible",
    ],
  },
  {
    icon: FileText,
    title: "Dépôt de documents",
    description:
      "Nous nous chargeons à votre place des démarches administratives auprès de certains établissements : URSSAF, Sécurité sociale, Trésor public, Greffe, Cadastre, etc.",
    price: "Sur devis",
    features: [
      "URSSAF & Sécurité sociale",
      "Trésor public",
      "Greffe du tribunal",
      "Cadastre & Impôts",
    ],
  },
];

const advantages = [
  {
    icon: Leaf,
    title: "100% écologique",
    text: "Tous nos déplacements se font exclusivement à vélo. Zéro émission de CO₂.",
  },
  {
    icon: Clock,
    title: "Rapide & fiable",
    text: "Nous connaissons parfaitement Le Havre. Vos envois arrivent à l'heure.",
  },
  {
    icon: MapPin,
    title: "Présents depuis 2006",
    text: "Plus de 300 entreprises nous font déjà confiance sur l'agglomération Le Havrenaise.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white hover:bg-white/20"
          >
            Services & Tarifs
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Nos services de
            <br />
            <span className="text-primary">coursier à vélo</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Présents à vos côtés depuis 2006, nous sommes spécialisés dans
            l&apos;acheminement à vélo de plis et petits colis sur
            l&apos;agglomération Le Havrenaise.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="flex flex-col border shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-4 pt-2">
                  <div className="text-lg font-semibold text-primary">
                    {service.price}
                  </div>
                  <Link
                    href="/commander"
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    Commander
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir Coursiers à vélo ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Le transport exclusivement à vélo en zone urbaine offre de
              multiples avantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm border text-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Bike className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;une course maintenant ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Commandez en quelques clics. Nous nous occupons du reste.
          </p>
          <Link
            href="/commander"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Commander une course
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}