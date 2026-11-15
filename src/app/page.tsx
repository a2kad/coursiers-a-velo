import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bike, Clock, Leaf, MapPin } from "lucide-react";
import { cn } from "cn"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background placeholder - потом заменим на реальное фото */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            Coursiers à vélo
            <br />
            <span className="text-primary">100% écologique</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Livraison de plis et colis sur Le Havre et son agglomération.
            Rapide, économique et respectueux de l&apos;environnement.
          </p>

			<div className="flex flex-col sm:flex-row gap-4 justify-center">
			<Link
				href="/commander"
				className={cn(
				buttonVariants({ size: "lg" }),
				"bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
				)}
			>
				Commander une course
				<ArrowRight className="ml-2 h-5 w-5" />
			</Link>

			<Link
				href="/services"
				className={cn(
				buttonVariants({ size: "lg", variant: "outline" }),
				"border-white/30 bg-white/10 text-white hover:bg-white/20 text-base px-8"
				)}
			>
				Voir nos tarifs
			</Link>
			</div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>100% écologique</CardTitle>
                <CardDescription>
                  Tous nos déplacements se font exclusivement à vélo. Zéro émission.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Rapide & fiable</CardTitle>
                <CardDescription>
                  Nous connaissons parfaitement Le Havre. Vos envois arrivent à l&apos;heure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Présents depuis 2006</CardTitle>
                <CardDescription>
                  Plus de 300 entreprises nous font déjà confiance dans l&apos;agglomération havraise.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;une course maintenant ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
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
			<Bike className="ml-2 h-5 w-5" />
			</Link>
        </div>
      </section>
    </>
  );
}