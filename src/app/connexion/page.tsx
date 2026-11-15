import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bike, LogIn } from "lucide-react";

export default function ConnexionPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-neutral-50 py-16 px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
              E
            </div>
            <span className="font-bold text-xl tracking-tight">
              Coursiers à vélo
            </span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Espace client
          </p>
        </div>

        <Card className="border shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Connexion</CardTitle>
            <CardDescription>
              Accédez à votre espace pour suivre vos courses
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="vous@exemple.fr"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Se connecter
              </button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-4 border-t pt-6">
            <p className="text-sm text-center text-muted-foreground">
              Pas encore de compte ?
            </p>
            <Link
              href="/commander"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full"
              )}
            >
              Commander une course
            </Link>
          </CardFooter>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-8">
          <Bike className="inline h-4 w-4 mr-1 -mt-0.5" />
          Service de coursier à vélo sur Le Havre
        </p>
      </div>
    </div>
  );
}