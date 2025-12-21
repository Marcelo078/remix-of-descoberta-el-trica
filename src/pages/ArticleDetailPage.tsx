import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Tag, Share2, ExternalLink } from "lucide-react";

const ArticleDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link to="/artigos">Voltar aos Artigos</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Skates Elétrico",
      "logo": {
        "@type": "ImageObject",
        "url": "https://skateseletrico.com.br/logo.png"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Skates Elétrico</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={[...article.keywords, ...article.longTailKeywords].join(", ")} />
        <meta name="author" content={article.author} />
        <link rel="canonical" href={`https://skateseletrico.com.br/artigo/${article.slug}`} />
        
        <meta property="og:title" content={article.titleVariants.discovery} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.titleVariants.ranking} />
        <meta name="twitter:description" content={article.metaDescription} />
        
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Layout>
        <article className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <Link to="/artigos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar aos Artigos
            </Link>

            {/* Hero Image */}
            <div className="relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-8">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground drop-shadow-lg">
                  {article.title}
                </h1>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Por <strong className="text-foreground">{article.author}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString("pt-BR")}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-display prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-strong:text-primary prose-strong:font-semibold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                    prose-table:border-border prose-th:bg-muted prose-th:text-foreground
                    prose-td:border-border"
                  dangerouslySetInnerHTML={{ 
                    __html: article.content
                      .replace(/^## /gm, '<h2 class="text-2xl font-bold mt-10 mb-4 text-foreground">')
                      .replace(/^### /gm, '<h3 class="text-xl font-semibold mt-8 mb-3 text-foreground">')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^- (.*?)$/gm, '<li>$1</li>')
                      .replace(/^(\d+)\. (.*?)$/gm, '<li>$2</li>')
                  }}
                />

                {/* FAQ Section */}
                <section className="mt-12 bg-card border border-border rounded-2xl p-6 md:p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Perguntas Frequentes
                  </h2>
                  <div className="space-y-4">
                    {article.faq.map((item, index) => (
                      <details key={index} className="group border-b border-border pb-4">
                        <summary className="cursor-pointer font-medium text-foreground hover:text-primary transition-colors">
                          {item.question}
                        </summary>
                        <p className="mt-3 text-muted-foreground pl-4 border-l-2 border-primary/30">
                          {item.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>

                {/* CTA */}
                <div className="mt-12 bg-gradient-electric rounded-2xl p-8 text-center">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Gostou da Análise?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Confira o produto completo e aproveite as melhores ofertas!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="btn-electric" asChild>
                      <a href="https://mercadolivre.com/sec/28Ru8g8" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver no Mercado Livre
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to={`/produto/${article.relatedProductSlug}`}>
                        Ver Detalhes do Produto
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Keywords */}
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3">Palavras-chave</h4>
                    <div className="flex flex-wrap gap-2">
                      {article.longTailKeywords.slice(0, 5).map((kw, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3">Artigos Relacionados</h4>
                    <div className="space-y-3">
                      {articles
                        .filter(a => a.id !== article.id && a.category === article.category)
                        .slice(0, 3)
                        .map((related) => (
                          <Link
                            key={related.id}
                            to={`/artigo/${related.slug}`}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {related.title.slice(0, 50)}...
                          </Link>
                        ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="bg-card border border-border rounded-xl p-5">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Compartilhar
                    </h4>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={`https://wa.me/?text=${encodeURIComponent(article.title)}`} target="_blank">
                          WhatsApp
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={`https://pinterest.com/pin/create/button/?description=${encodeURIComponent(article.title)}`} target="_blank">
                          Pinterest
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default ArticleDetailPage;
