"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "ACCUEIL", href: "/" },
  { label: "SERVICES ET TARIFS", href: "/services" },
  { label: "QUI SUIS-JE ?", href: "/qui-suis-je" },
  { label: "CONTACT", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#e6e6e6]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
            C
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight text-black uppercase">
              Coursiers à vélo
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Coursiers à vélo
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center">
          <Link
            href="/commander"
            className={cn(
              buttonVariants({ size: "default" }),
              "bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wide font-semibold px-6 h-11 text-sm"
            )}
          >
            Commander une course
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "md:hidden"
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col gap-6 mt-8">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-base font-medium uppercase tracking-wide rounded-md hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t">
                <Link
                  href="/commander"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wide font-semibold"
                  )}
                >
                  Commander une course
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}