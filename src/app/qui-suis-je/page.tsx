import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Bike,
  Leaf,
  MapPin,
  Users,
  Clock,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function QuiSuisJePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white hover:bg-white/20"
          >
            Qui suis-je ?
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Coursiers à vélo
            <br />
            <span className="text-primary">depuis 2006</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Passionné par la mobilité douce et le service de proximité,
            j&apos;accompagne les entreprises de Le Havre et de son agglomération
            dans leurs envois quotidiens.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Mon histoire
            </h2>

            <div className="prose prose-neutral max-w-none text-muted-foreground space-y-6 text-lg leading-relaxed">
              <p>
                Depuis 2006, je propose un service de coursier 100 % à vélo sur
                Le Havre et son agglomération. L&apos;idée est simple : livrer des
                plis et des petits colis rapidement, de manière fiable et
                respectueuse de l&apos;environnement.
              </p>
              <p>
                Au fil des années, plus de 300 entreprises m&apos;ont fait
                confiance. Qu&apos;il s&apos;agisse d&apos;envois ponctuels ou
                de collectes régulières de courrier, je m&apos;adapte aux
                besoins de chacun.
              </p>
              <p>
                Mon engagement reste le même : un service de proximité,
                humain et écologique, au service des professionnels Le Havrenais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mes valeurs
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ce qui guide mon travail au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Écologie</h3>
              <p className="text-sm text-muted-foreground">
                100 % des déplacements se font à vélo. Zéro émission.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fiabilité</h3>
              <p className="text-sm text-muted-foreground">
                Ponctualité et sérieux dans chaque course.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Proximité</h3>
              <p className="text-sm text-muted-foreground">
                Un service humain, à l&apos;écoute des besoins locaux.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ancrage local</h3>
              <p className="text-sm text-muted-foreground">
                Une connaissance fine de Le Havre et de son agglomération.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Bike className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Envie de travailler ensemble ?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Contactez-moi pour vos envois réguliers ou ponctuels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-white/30 bg-white/10 text-white hover:bg-white/20"
              )}
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}