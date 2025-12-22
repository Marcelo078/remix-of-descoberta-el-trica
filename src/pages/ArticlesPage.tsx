import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const ArticlesPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Skates Elétrico",
    "description": "Artigos, análises e guias sobre hoverboards e skates elétricos",
    "url": "https://skateseletrico.com.br/artigos",
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "datePublished": article.date
    }))
  };

  return (
    <>
      <Helmet>
        <title>Artigos | Análises e Guias de Hoverboards - Skates Elétrico</title>
        <meta name="description" content="Artigos completos com análises detalhadas, guias de compra e comparativos dos melhores hoverboards e skates elétricos do Brasil." />
        <meta name="keywords" content="artigos hoverboard, análise skate elétrico, guia de compra hoverboard, comparativo hoverboard" />
        <link rel="canonical" href="https://skateseletrico.com.br/artigos" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Layout>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Header */}
            <header className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Blog
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Artigos e </span>
                <span className="text-gradient-electric">Análises</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conteúdo completo e atualizado para ajudar você a escolher o <strong className="text-primary">melhor hoverboard</strong>.
              </p>
            </header>

            {/* Featured Article */}
            {articles.length > 0 && (
              <article className="mb-12">
                <Link
                  to={`/artigo/${articles[0].slug}`}
                  className="block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src={articles[0].image}
                        alt={articles[0].imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                          Destaque
                        </span>
                        <span className="text-muted-foreground text-sm">{articles[0].category}</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {articles[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {articles[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {articles[0].author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {articles[0].readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )}

            {/* Articles Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(1).map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all group flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-3 h-3 text-primary" />
                      <span className="text-xs text-muted-foreground">{article.category}</span>
                    </div>
                    <h2 className="font-display font-semibold text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors flex-grow">
                      {article.title}
                    </h2>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{new Date(article.date).toLocaleDateString("pt-BR")}</span>
                      <span>{article.readTime} de leitura</span>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4" asChild>
                      <Link to={`/artigo/${article.slug}`}>
                        Ler artigo
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ArticlesPage;
