import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Phone, Mail, MessageCircle, Clock, Shield, Users, Star } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/dogwarts-logo-simple.png" alt="Dogwarts Logo" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-serif font-bold text-foreground">Dogwarts</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="/sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="/testemunhos" className="text-foreground hover:text-primary transition-colors">
                Testemunhos
              </Link>
              <Link href="/contactos" className="text-foreground hover:text-primary transition-colors">
                Contactos
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Agendar Agora</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Perguntas Frequentes
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-balance">
              Tudo o Que Precisa de Saber Sobre a <span className="text-primary">Dogwarts</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Encontre respostas às perguntas mais comuns sobre os nossos serviços, políticas e cuidados com o seu
              patudo.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Serviços e Preços</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Quais são os horários disponíveis para os serviços?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Os nossos serviços estão disponíveis de segunda a domingo, das 7h às 20h. Para estadia familiar,
                        oferecemos cuidados 24h. Serviços de emergência podem ser disponibilizados mediante consulta
                        prévia.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Como são calculados os preços dos serviços?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Os preços variam conforme o tipo de serviço, duração e frequência. Oferecemos descontos para
                        clientes regulares: 10% para serviços semanais e 20% para contratos mensais. Contacte-nos para
                        um orçamento personalizado.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Que cuidados especiais podem ser providenciados?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Providenciamos administração de medicamentos, cuidados para cães idosos ou com necessidades
                        especiais, dietas específicas e acompanhamento veterinário quando necessário. Todos os cuidados
                        especiais são discutidos previamente.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">Posso cancelar ou reagendar um serviço?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Sim, aceitamos cancelamentos até 24h antes do serviço agendado sem custos adicionais. Para
                        reagendamentos, tentamos sempre acomodar as suas necessidades conforme a nossa disponibilidade.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Segurança e Cuidados</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="safety-1" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">Como garantem a segurança dos cães?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Todos os nossos cuidadores são experientes e treinados em primeiros socorros para animais.
                        Mantemos contacto regular com os tutores através de fotos e updates. Temos protocolos de
                        emergência e contacto direto com veterinários de confiança.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="safety-2" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Que informações precisam sobre o meu cão?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Precisamos de informações sobre rotina, alimentação, medicamentos, comportamento, contactos
                        veterinários e de emergência. Também pedimos o cartão de vacinação atualizado e informações
                        sobre socialização com outros cães.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="safety-3" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Os cães ficam sozinhos durante os serviços?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Nunca deixamos os cães sozinhos durante os nossos cuidados. No petsitting, o cuidador permanece
                        com o cão durante toda a sessão. Na estadia familiar, o cão integra-se na nossa rotina familiar
                        com supervisão constante.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="safety-4" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">Têm seguro de responsabilidade civil?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Sim, temos seguro de responsabilidade civil que cobre todos os nossos serviços. Todos os cães
                        sob os nossos cuidados estão protegidos durante o período de serviço.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6">Agendamento e Contacto</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="booking-1" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">Como posso agendar um serviço?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Pode agendar através do nosso formulário online, WhatsApp, telefone ou email. Recomendamos
                        agendar com pelo menos 48h de antecedência, especialmente para fins de semana e feriados.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="booking-2" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Fazem uma visita prévia antes do primeiro serviço?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Sim, sempre fazemos uma consulta prévia gratuita para conhecer o cão, discutir necessidades
                        específicas, esclarecer dúvidas e estabelecer confiança. Esta visita é essencial para garantir o
                        melhor cuidado.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="booking-3" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">
                        Qual é a área de cobertura dos serviços?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Cobrimos principalmente a área da Grande Lisboa. Para localizações mais distantes, pode haver um
                        custo adicional de deslocação. Contacte-nos para confirmar se servimos a sua área.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="booking-4" className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left">Que formas de pagamento aceitam?</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Aceitamos pagamento em dinheiro, transferência bancária e MB Way. Para clientes regulares,
                        oferecemos a opção de pagamento mensal. O pagamento é efetuado após a prestação do serviço.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Ainda tem dúvidas?
                  </CardTitle>
                  <CardDescription>Estamos aqui para ajudar! Entre em contacto connosco.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    Horários de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-secondary" />
                    Garantias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5" />
                    <span>Cuidadores experientes e treinados</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5" />
                    <span>Seguro de responsabilidade civil</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5" />
                    <span>Updates regulares com fotos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-primary mt-0.5" />
                    <span>Suporte de emergência 24h</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-balance">
              Pronto para Conhecer os Nossos Serviços?
            </h2>
            <p className="text-xl text-secondary-foreground/80 text-pretty">
              Agende uma consulta gratuita e descubra como podemos cuidar do seu patudo com todo o amor e dedicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Heart className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                Ver Testemunhos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/dogwarts-logo-simple.png" alt="Dogwarts Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-serif font-bold">Dogwarts</span>
              </div>
              <p className="text-muted-foreground text-pretty">Cães felizes & donos tranquilos desde 2023.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Petsitting
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Dogwalking
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Creche/Daycare
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-primary transition-colors">
                    Estadia Familiar
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/sobre" className="hover:text-primary transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/testemunhos" className="hover:text-primary transition-colors">
                    Testemunhos
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>+351 XXX XXX XXX</li>
                <li>info@dogwarts.pt</li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Dogwarts. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
