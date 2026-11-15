import { Badge } from "@/components/ui/badge";
import { CommanderForm } from "@/components/forms/CommanderForm";

export default function CommanderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge
            variant="secondary"
            className="mb-5 bg-white/10 text-white hover:bg-white/20"
          >
            Commander
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Commander une
            <span className="text-primary"> course</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Remplissez le formulaire ci-dessous. Je vous recontacte rapidement
            pour confirmer la prise en charge.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <CommanderForm />
        </div>
      </section>
    </>
  );
}