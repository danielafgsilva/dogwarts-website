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
  Heart,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { responsive, brand } from "@/lib/responsive-utils";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Sinais de que o Seu Cão Está Feliz e Saudável",
      excerpt:
        "Aprenda a reconhecer os indicadores de bem-estar no seu patudo e como manter a sua felicidade no dia a dia.",
      category: "Saúde & Bem-estar",
      date: "15 Jan 2024",
      readTime: "5 min",
      author: "Equipa Dogwarts",
      image: "/happy-golden-retriever-playing-in-a-cozy-home-envi.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Como Preparar o Seu Cão para a Primeira Estadia Fora de Casa",
      excerpt:
        "Dicas essenciais para tornar a experiência de deixar o seu cão aos cuidados de outros mais tranquila para ambos.",
      category: "Dicas & Conselhos",
      date: "10 Jan 2024",
      readTime: "7 min",
      author: "Equipa Dogwarts",
      image: "/founder-with-four-dogs-in-cozy-living-room-portra.jpg",
    },
    {
      id: 3,
      title:
        "A Importância da Socialização Canina: Benefícios dos Passeios em Grupo",
      excerpt:
        "Descubra como os passeios em grupo podem melhorar o comportamento e a felicidade do seu cão.",
      category: "Comportamento",
      date: "5 Jan 2024",
      readTime: "6 min",
      author: "Equipa Dogwarts",
      image: "/dog-walker-with-multiple-happy-dogs-in-lisbon-pa.jpg",
    },
    {
      id: 4,
      title: "Cuidados Especiais para Cães Idosos: O Que Deve Saber",
      excerpt:
        "Orientações importantes para garantir conforto e qualidade de vida aos cães seniores.",
      category: "Saúde & Bem-estar",
      date: "28 Dez 2023",
      readTime: "8 min",
      author: "Equipa Dogwarts",
      image: "/cozy-dog-nap-time-in-comfortable-living-room-dogw.jpg",
    },
    {
      id: 5,
      title: "Rotinas de Exercício: Mantendo o Seu Cão Ativo e Saudável",
      excerpt:
        "Planos de exercício adaptados a diferentes idades, raças e necessidades dos cães.",
      category: "Exercício & Atividade",
      date: "20 Dez 2023",
      readTime: "6 min",
      author: "Equipa Dogwarts",
      image: "/happy-dogs-playing-together-in-sunny-garden-dogwa.jpg",
    },
    {
      id: 6,
      title: "Sinais de Stress em Cães: Como Identificar e Ajudar",
      excerpt:
        "Aprenda a reconhecer os sinais de ansiedade e stress no seu cão e como proporcionar alívio.",
      category: "Comportamento",
      date: "15 Dez 2023",
      readTime: "7 min",
      author: "Equipa Dogwarts",
      image: "/bella-labrador-socializing-daycare-dogwarts-lisb.jpg",
    },
  ];

  const categories = [
    { name: "Saúde & Bem-estar", count: 8, icon: Heart },
    { name: "Dicas & Conselhos", count: 12, icon: Lightbulb },
    { name: "Comportamento", count: 6, icon: BookOpen },
    { name: "Exercício & Atividade", count: 5, icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      <Navbar currentPage="/blog" />

      {/* Hero Section */}
      <section className={`${responsive.sectionPadding} bg-[#1F3B75] text-white`}>
        <div className={responsive.container}>
          <div className={`${responsive.textCenter} ${responsive.spaceY.md} ${responsive.maxWidth['3xl']} mx-auto`}>
            <Badge
              variant="secondary"
              className="bg-[#FDCF4D] text-[#1F3B75] border-[#FDCF4D] hover:bg-[#FDCF4D]/90"
            >
              Blog Dogwarts
            </Badge>
            <h1 className={`${responsive.heading1} font-serif text-balance text-white`}>
              Dicas e Conselhos para{" "}
              <span className="text-[#FDCF4D]">Cães Felizes</span>
            </h1>
            <p className={`${responsive.bodyLarge} text-white/90 text-pretty`}>
              Partilhamos conhecimento e experiência para ajudar a cuidar melhor
              do seu patudo. Artigos escritos por especialistas em cuidados
              caninos.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-16">
                <h2 className="text-2xl font-serif font-bold mb-8">
                  Artigo em Destaque
                </h2>
                <Card className="overflow-hidden border-[#FDCF4D]/20 hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge
                          variant="secondary"
                          className="bg-[#8B5CF6] text-white border-[#8B5CF6]"
                        >
                          {blogPosts[0].category}
                        </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-serif hover:text-[#1F3B75] transition-colors cursor-pointer">
                      {blogPosts[0].title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {blogPosts[0].excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90">
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Posts */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-8">
                  Artigos Recentes
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.slice(1).map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-lg font-serif group-hover:text-[#1F3B75] transition-colors cursor-pointer line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-[#FDCF4D] group-hover:text-[#1F3B75] transition-colors bg-transparent"
                        >
                          Ler Mais
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#FDCF4D] text-[#FDCF4D] hover:bg-[#FDCF4D] hover:text-[#1F3B75] bg-transparent"
                >
                  Carregar Mais Artigos
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#8B5CF6]" />
                    Categorias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <div
                        key={category.name}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-4 h-4 text-[#8B5CF6]" />
                          <span className="text-sm font-medium">
                            {category.name}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-[#FDCF4D]/20 bg-[#FDCF4D]/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#FDCF4D]" />
                    Newsletter Dogwarts
                  </CardTitle>
                  <CardDescription>
                    Receba dicas semanais sobre cuidados caninos diretamente no
                    seu email.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="O seu email"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FDCF4D]/20 focus:border-[#FDCF4D]"
                    />
                  </div>
                  <Button className="w-full bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90">
                    Subscrever
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Prometemos não enviar spam. Pode cancelar a qualquer
                    momento.
                  </p>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-[#8B5CF6]" />
                    Artigos Populares
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div
                      key={post.id}
                      className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-[#8B5CF6]">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  ))}
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
              Tem Alguma Pergunta Sobre Cuidados Caninos?
            </h2>
            <p className={`${responsive.bodyLarge} text-white/90 text-pretty`}>
              A nossa equipa de especialistas está sempre disponível para ajudar
              com dúvidas sobre o bem-estar do seu patudo.
            </p>
            <div className={`${responsive.buttonGroupCenter}`}>
              <Button
                size="lg"
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
              >
                <Heart className="w-5 h-5 mr-2" />
                Contactar Especialistas
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Ver FAQ
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
                <img
                  src="/dogwarts-logo-simple.png"
                  alt="Dogwarts Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-serif font-bold text-black">Dogwarts</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Cães felizes & donos tranquilos desde 2023.
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
  );
}
