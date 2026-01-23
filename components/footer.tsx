import Link from "next/link";
import Image from "next/image";
import { getSiteSettings } from "@/lib/sanity";

export default async function Footer() {
  const siteSettings = await getSiteSettings();

  return (
    <footer className="bg-background border-t border-border py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/dogwarts-logo-transparent.png"
                alt={siteSettings?.siteName || 'Dogwarts Logo'}
                width={32}
                height={32}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              <span className="text-lg lg:text-xl font-bold">
                {siteSettings?.siteName || 'Dogwarts'}
              </span>
            </Link>
            <p className="text-sm lg:text-base text-muted-foreground text-pretty">
              {siteSettings?.footer?.description || 'Cães felizes & donos tranquilos desde 2023.'}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-primary transition-colors"
                >
                  Petsitting
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-primary transition-colors"
                >
                  Dogwalking
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-primary transition-colors"
                >
                  Creche/Daycare
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="hover:text-primary transition-colors"
                >
                  Estadia Familiar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/testemunhos"
                  className="hover:text-primary transition-colors"
                >
                  Testemunhos
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>{siteSettings?.contact?.phone || '+351 XXX XXX XXX'}</li>
              <li>{siteSettings?.contact?.email || 'info@dogwarts.pt'}</li>
              <li>{siteSettings?.contact?.address || 'Lisboa, Portugal'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 lg:mt-8 pt-6 lg:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs lg:text-sm text-muted-foreground">
          <p>&copy; 2024 {siteSettings?.siteName || 'Dogwarts'}. Todos os direitos reservados.</p>
          <p className="text-muted-foreground/60">
            {siteSettings?.footer?.developer || 'Desenvolvido por Daniela Silva & Tiago Santos'}
          </p>
        </div>
      </div>
    </footer>
  );
}
