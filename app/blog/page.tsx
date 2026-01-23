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
import { getBlogPage, getBlogPosts, getFeaturedBlogPosts, getSiteSettings } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

export default async function BlogPage() {
  const [blogPageData, blogPosts, featuredPosts, siteSettings] = await Promise.all([
    getBlogPage(),
    getBlogPosts(),
    getFeaturedBlogPosts(),
    getSiteSettings()
  ]);

  return (
    <div className="min-h-screen font-sans">
      <Navbar currentPage="/blog" siteName={siteSettings?.siteName} />

      {/* Hero Section */}
      <section 
        className={`relative ${responsive.sectionPadding} ${brand.gradients.hero} overflow-hidden`}
        aria-labelledby="blog-hero-heading"
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
              {blogPageData?.hero?.badge || 'Blog Dogwarts'}
            </Badge>
            <h1 
              id="blog-hero-heading"
              className={`${responsive.heading1} font-serif text-balance`}
            >
              {blogPageData?.hero?.title || 'Dicas e Conselhos para Cães Felizes'}
            </h1>
            <p className={`${responsive.bodyLarge} text-muted-foreground text-pretty`}>
              {blogPageData?.hero?.description || 'Partilhamos conhecimento e experiência para ajudar a cuidar melhor do seu patudo. Artigos escritos por especialistas em cuidados caninos.'}
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
                {blogPageData?.featuredPost ? (
                  <Card className="overflow-hidden border-[#FDCF4D]/20 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/happy-golden-retriever-playing-in-a-cozy-home-envi.jpg"
                        alt={blogPageData.featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge
                          variant="secondary"
                          className="bg-[#8B5CF6] text-white border-[#8B5CF6]"
                        >
                          {blogPageData.featuredPost.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blogPageData.featuredPost.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blogPageData.featuredPost.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {blogPageData.featuredPost.author}
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-serif hover:text-[#1F3B75] transition-colors cursor-pointer">
                        {blogPageData.featuredPost.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {blogPageData.featuredPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90" asChild>
                        <Link href={`/blog/${blogPageData.featuredPost.slug?.current || '#'}`}>
                          Ler Artigo Completo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  // Fallback content
                  <Card className="overflow-hidden border-[#FDCF4D]/20 hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src="/happy-golden-retriever-playing-in-a-cozy-home-envi.jpg"
                        alt="Artigo em destaque"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge
                          variant="secondary"
                          className="bg-[#8B5CF6] text-white border-[#8B5CF6]"
                        >
                          Saúde & Bem-estar
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          15 Jan 2024
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          5 min
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          Equipa Dogwarts
                        </div>
                      </div>
                      <CardTitle className="text-2xl font-serif hover:text-[#1F3B75] transition-colors cursor-pointer">
                        10 Sinais de que o Seu Cão Está Feliz e Saudável
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Aprenda a reconhecer os indicadores de bem-estar no seu patudo e como manter a sua felicidade no dia a dia.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90">
                        Ler Artigo Completo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Recent Posts */}
              <div>
                <h2 className="text-2xl font-serif font-bold mb-8">
                  Artigos Recentes
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPageData?.blogPosts?.map((post: any, index: number) => (
                    <Card
                      key={post._key}
                      className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src="/founder-with-four-dogs-in-cozy-living-room-portra.jpg"
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
                          asChild
                        >
                          <Link href={`/blog/${post.slug?.current || '#'}`}>
                            Ler Mais
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )) || (
                    // Fallback content
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src="/founder-with-four-dogs-in-cozy-living-room-portra.jpg"
                          alt="Artigo do blog"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            Dicas & Conselhos
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            10 Jan 2024
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            7 min
                          </div>
                        </div>
                        <CardTitle className="text-lg font-serif group-hover:text-[#1F3B75] transition-colors cursor-pointer line-clamp-2">
                          Como Preparar o Seu Cão para a Primeira Estadia Fora de Casa
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed line-clamp-3">
                          Dicas essenciais para tornar a experiência de deixar o seu cão aos cuidados de outros mais tranquila para ambos.
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
                  )}
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
                  {blogPageData?.categories?.map((category: any) => {
                    const iconMap: { [key: string]: any } = {
                      'Saúde & Bem-estar': Heart,
                      'Dicas & Conselhos': Lightbulb,
                      'Comportamento': BookOpen,
                      'Exercício & Atividade': Shield,
                    };
                    const IconComponent = iconMap[category.name] || BookOpen;
                    return (
                      <div
                        key={category._key}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-4 h-4 text-[#8B5CF6]" />
                          <span className="text-sm font-medium">
                            {category.name}
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count || 0}
                        </Badge>
                      </div>
                    );
                  }) || (
                    // Fallback content
                    <>
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Heart className="w-4 h-4 text-[#8B5CF6]" />
                          <span className="text-sm font-medium">
                            Saúde & Bem-estar
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          8
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Lightbulb className="w-4 h-4 text-[#8B5CF6]" />
                          <span className="text-sm font-medium">
                            Dicas & Conselhos
                          </span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          12
                        </Badge>
                      </div>
                    </>
                  )}
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
                  {blogPosts.slice(0, 3).map((post: any, index: number) => (
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
              {blogPageData?.cta?.title || 'Tem Alguma Pergunta Sobre Cuidados Caninos?'}
            </h2>
            <p className={`${responsive.bodyLarge} text-white text-pretty`}>
              {blogPageData?.cta?.description || 'A nossa equipa de especialistas está sempre disponível para ajudar com dúvidas sobre o bem-estar do seu patudo.'}
            </p>
            <div className={`${responsive.buttonGroupCenter}`}>
              <Button
                size="lg"
                className="bg-[#FDCF4D] text-[#1F3B75] hover:bg-[#FDCF4D]/90"
                asChild
              >
                <Link href="/contactos">
                  <Heart className="w-5 h-5 mr-2" />
                  {blogPageData?.cta?.primaryButton || 'Contactar Especialistas'}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1F3B75] bg-transparent"
                asChild
              >
                <Link href="/faq">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {blogPageData?.cta?.secondaryButton || 'Ver FAQ'}
                </Link>
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
