import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products, AFFILIATE_LINK } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Bluetooth, Lightbulb, ChevronRight, Check, ArrowLeft, Gauge, Battery, Weight } from "lucide-react";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Produto não encontrado</h1>
          <Button asChild>
            <Link to="/produtos">Ver todos os produtos</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.fullDescription,
    "image": product.imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Hoverboard"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": AFFILIATE_LINK
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `O ${product.name} é original?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, todos os produtos recomendados são de vendedores com alta reputação no Mercado Livre, garantindo originalidade e qualidade."
        }
      },
      {
        "@type": "Question",
        "name": `O ${product.name} tem garantia?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, todos os produtos vendidos através do Mercado Livre possuem garantia. Verifique os detalhes no anúncio do vendedor."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Análise Completa e Melhores Preços - Skates Elétrico</title>
        <meta name="description" content={`${product.shortDescription} Veja análise completa, especificações técnicas e melhores preços. ${product.keywords.join(', ')}.`} />
        <meta name="keywords" content={product.keywords.join(', ')} />
        <link rel="canonical" href={`https://skateseletrico.com.br/produto/${product.slug}`} />
        
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.name} | Melhores Preços`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:image" content={product.imageUrl} />
        
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Layout>
        <article className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary">Início</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/produtos" className="hover:text-primary">Produtos</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{product.name}</span>
            </nav>

            {/* Back Button */}
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <Link to="/produtos">
                <ArrowLeft className="w-4 h-4" />
                Voltar aos produtos
              </Link>
            </Button>

            {/* Product Header */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border">
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} - Hoverboard Skate Elétrico Melhores Preços Melhores Ofertas Melhores Marcas`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(127 avaliações)</span>
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <Gauge className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Velocidade</p>
                    <p className="font-bold text-foreground">{product.specs.speed}</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <Battery className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Autonomia</p>
                    <p className="font-bold text-foreground">{product.specs.range}</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <Weight className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">Peso</p>
                    <p className="font-bold text-foreground">{product.specs.weight}</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 text-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-bold text-primary">{product.specs.wheel.split(' ')[0]}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Roda</p>
                    <p className="font-bold text-foreground">{product.specs.wheel}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-3">Características</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icons */}
                <div className="flex gap-4">
                  {product.specs.bluetooth && (
                    <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                      <Bluetooth className="w-5 h-5 text-electric-blue" />
                      <span className="text-sm">Bluetooth</span>
                    </div>
                  )}
                  {product.specs.led && (
                    <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <span className="text-sm">LED RGB</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" className="flex-1" asChild>
                    <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                      Comprar no Mercado Livre
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  * Ao clicar você será redirecionado para o Mercado Livre, onde poderá ver o preço atualizado, opções de parcelamento e calcular o frete.
                </p>
              </div>
            </div>

            {/* Article Content */}
            <section className="max-w-4xl mx-auto mb-16">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Análise Completa do <span className="text-gradient-electric">{product.name}</span>
                </h2>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-muted-foreground mb-6">
                    {product.fullDescription}
                  </p>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Por que escolher este modelo?</h3>
                  <p className="text-muted-foreground mb-6">
                    O <strong className="text-primary">{product.name}</strong> se destaca no mercado por sua combinação única de qualidade, design e funcionalidades. Com rodas de {product.specs.wheel} e motor de {product.specs.motor}, este hoverboard oferece uma experiência de pilotagem suave e segura.
                  </p>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Especificações Técnicas</h3>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    <li><strong>Rodas:</strong> {product.specs.wheel} - Ideal para {product.category === 'Offroad' ? 'todos os terrenos' : 'uso urbano'}</li>
                    <li><strong>Motor:</strong> {product.specs.motor} - Potência suficiente para subidas e manobras</li>
                    <li><strong>Velocidade máxima:</strong> {product.specs.speed} - Seguro e divertido</li>
                    <li><strong>Autonomia:</strong> {product.specs.range} - Passeios longos sem preocupação</li>
                    <li><strong>Peso:</strong> {product.specs.weight} - Portátil e fácil de transportar</li>
                    <li><strong>Bluetooth:</strong> {product.specs.bluetooth ? 'Sim - Toque suas músicas favoritas' : 'Não'}</li>
                    <li><strong>LED:</strong> {product.specs.led ? 'Sim - Visual impressionante à noite' : 'Não'}</li>
                  </ul>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Avaliação Final</h3>
                  <p className="text-muted-foreground mb-6">
                    Recomendamos o <strong className="text-primary">{product.name}</strong> para quem busca um hoverboard de qualidade com excelente custo-benefício. O design {product.category === 'Offroad' ? 'offroad robusto' : 'moderno e elegante'} aliado às funcionalidades premium como {product.specs.bluetooth ? 'Bluetooth e ' : ''}LED fazem deste modelo uma excelente escolha.
                  </p>

                  <p className="text-sm text-muted-foreground italic">
                    Revisado por <strong className="text-primary">Marcelo Silva</strong> - Editor-Chefe do Skates Elétrico
                  </p>
                </div>
              </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Produtos Relacionados
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.id}
                      to={`/produto/${p.slug}`}
                      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all group"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={p.imageUrl}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </Layout>
    </>
  );
};

export default ProductDetailPage;
