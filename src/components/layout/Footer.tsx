import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                C
              </div>
              <span className="font-bold text-lg uppercase">CYCLO COURSIER</span>
            </div>
            <p className="text-sm text-white/70 max-w-xs">
              Coursiers à vélo sur Le Havre et son agglomération.
              Livraison de plis et colis 100% écologique depuis 2006.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services et tarifs
                </Link>
              </li>
              <li>
				<Link href="/qui-suis-je" className="hover:text-white transition-colors">
				Qui suis-je ?
				</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:contact@test.fr" className="hover:text-white transition-colors">
                  contact@test.fr
                </a>
              </li>
              <li>
                <a href="tel:+33612345678" className="hover:text-white transition-colors">
                  06 12 34 56 78
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2026 CYCLO COURSIER. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/donnees-personnelles" className="hover:text-white transition-colors">
              Données personnelles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}