import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Heart,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Shield,
  Users,
  Star,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { responsive, brand } from "@/lib/responsive-utils";
import { getFAQPage, getFAQs, getSiteSettings } from "@/lib/sanity";
import { PortableText } from '@portabletext/react';

export default async function FAQPage() {
  const [faqPageData, faqs, siteSettings] = await Promise.all([
    getFAQPage(),
    getFAQs(),
    getSiteSettings()
  ]);
  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage="/faq" siteName={siteSettings?.siteName} />

      {/* Hero Section */}
      <section 
        className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
        aria-labelledby="faq-hero-heading"
        role="banner"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        
        <div className={responsive.container}>
          <div className={`${responsive.textCenter} ${responsive.spaceY.md} ${responsive.maxWidth['3xl']} mx-auto relative z-10`}>
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary-foreground border-primary/30 hover:bg-primary/30 transition-colors"
            >
              {faqPageData?.hero?.badge || 'Perguntas Frequentes'}
            </Badge>
            <h1 
              id="faq-hero-heading"
              className={`${responsive.heading1} font-serif text-balance`}
            >
              {faqPageData?.hero?.title || 'Tudo o Que Precisa de Saber Sobre a Dogwarts'}
            </h1>
            <p className={`${responsive.bodyLarge} text-muted-foreground text-pretty`}>
              {faqPageData?.hero?.description || 'Encontre respostas às perguntas mais comuns sobre os nossos serviços, políticas e cuidados com o seu patudo.'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${responsive.sectionPadding} ${brand.gradients.accent}`}>
        <div className={responsive.container}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {faqPageData?.faqCategories?.map((category: any) => (
                  <div key={category._key}>
                    <h2 className="text-2xl font-serif font-bold mb-6">
                      {category.title}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs?.map((faq: any) => (
                        <AccordionItem
                          key={faq._key}
                          value={faq._key}
                          className="border border-border rounded-lg px-6"
                        >
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            <PortableText value={faq.answer} />
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )) || (
                  // Fallback content
                  <div>
                    <h2 className="text-2xl font-serif font-bold mb-6">
                      Serviços e Preços
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      <AccordionItem
                        value="item-1"
                        className="border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left">
                          Quais são os horários disponíveis para os serviços?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          Os nossos serviços estão disponíveis de segunda a
                          domingo, das 7h às 20h. Para estadia familiar,
                          oferecemos cuidados 24h. Serviços de emergência podem
                          ser disponibilizados mediante consulta prévia.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-[#FDCF4D]/20 bg-[#FDCF4D]/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#FDCF4D]" />
                    {faqPageData?.contactCard?.title || 'Ainda tem dúvidas?'}
                  </CardTitle>
                  <CardDescription>
                    {faqPageData?.contactCard?.description || 'Estamos aqui para ajudar! Entre em contacto connosco.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90">
                    <Phone className="w-4 h-4 mr-2" />
                    {faqPageData?.contactCard?.phoneButton || 'Ligar Agora'}
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Mail className="w-4 h-4 mr-2" />
                    {faqPageData?.contactCard?.emailButton || 'Enviar Email'}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#8B5CF6]" />
                    {faqPageData?.businessHours?.title || 'Horários de Atendimento'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {faqPageData?.businessHours?.hours?.map((hour: any) => (
                    <div key={hour._key} className="flex justify-between">
                      <span>{hour.day}</span>
                      <span className="font-medium">{hour.time}</span>
                    </div>
                  )) || (
                    // Fallback content
                    <>
                      <div className="flex justify-between">
                        <span>Segunda - Sexta:</span>
                        <span className="font-medium">7h - 20h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábado - Domingo:</span>
                        <span className="font-medium">8h - 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emergências:</span>
                        <span className="font-medium">24h</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#10B981]" />
                    {faqPageData?.guarantees?.title || 'Garantias'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {faqPageData?.guarantees?.items?.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-[#FDCF4D] mt-0.5" />
                      <span>{item}</span>
                    </div>
                  )) || (
                    // Fallback content
                    <>
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#FDCF4D] mt-0.5" />
                        <span>Cuidadores experientes e treinados</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#FDCF4D] mt-0.5" />
                        <span>Seguro de responsabilidade civil</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#FDCF4D] mt-0.5" />
                        <span>Updates regulares com fotos</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#FDCF4D] mt-0.5" />
                        <span>Suporte de emergência 24h</span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${responsive.sectionPadding} bg-[#1F3B75] text-white`}>
        <div className={`${responsive.container} ${responsive.textCenter}`}>
          <div className={`${responsive.maxWidth['3xl']} mx-auto ${responsive.spaceY.lg}`}>
            <h2 className={`${responsive.heading1} font-serif text-balance text-white`}>
              {faqPageData?.cta?.title || 'Pronto para Conhecer os Nossos Serviços?'}
            </h2>
            <p className={`${responsive.bodyLarge} text-white text-pretty`}>
              {faqPageData?.cta?.description || 'Agende uma consulta gratuita e descubra como podemos cuidar do seu patudo com todo o amor e dedicação.'}
            </p>
            <div className={`${responsive.buttonGroupCenter}`}>
              <Button
                size="lg"
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
                asChild
              >
                <Link href="/contactos">
                  <Heart className="w-5 h-5 mr-2" />
                  {faqPageData?.cta?.primaryButton || 'Agendar Consulta'}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
                asChild
              >
                <Link href="/testemunhos">
                  <Users className="w-5 h-5 mr-2" />
                  {faqPageData?.cta?.secondaryButton || 'Ver Testemunhos'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="space-y-4 sm:col-span-2 md:col-span-1">
              <img
                src="/dogwarts-logo-transparent.png"
                alt="Dogwarts Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-black">Dogwarts</span>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
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
              <ul className="space-y-2 text-muted-foreground text-sm">
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
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>+351 XXX XXX XXX</li>
                <li>info@dogwarts.pt</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 text-center text-muted-foreground">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
              <p className="text-sm">
                &copy; 2024 Dogwarts. Todos os direitos reservados.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Desenvolvido por Daniela Silva & Tiago Santos
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
