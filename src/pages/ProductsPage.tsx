import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products, AFFILIATE_LINK } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Bluetooth, Lightbulb, Filter } from "lucide-react";
import { useState } from "react";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", "Offroad", "Urbano", "Infantil", "Premium"];
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Melhores Hoverboards e Skates Elétricos",
    "description": "Lista completa dos melhores hoverboards com análises e ofertas.",
    "numberOfItems": products.length,
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.shortDescription,
        "image": product.imageUrl,
        "url": `https://skateseletrico.com.br/produto/${product.slug}`
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Produtos | Melhores Hoverboards e Skates Elétricos 2024</title>
        <meta name="description" content="Catálogo completo de hoverboards e skates elétricos. Compare modelos, veja análises detalhadas e encontre as melhores ofertas do Brasil." />
        <meta name="keywords" content="hoverboard, skate elétrico, melhores hoverboards 2024, hoverboard barato, skate elétrico bluetooth, hoverboard led" />
        <link rel="canonical" href="https://skateseletrico.com.br/produtos" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Layout>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Header */}
            <header className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Catálogo Completo
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gradient-electric">Melhores Hoverboards</span>
                <br />
                <span className="text-foreground">Skates Elétricos 2024</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare os <strong className="text-primary">melhores hoverboards</strong> do mercado. Análises detalhadas, especificações técnicas e links diretos para as melhores ofertas.
              </p>
            </header>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <div className="flex items-center gap-2 text-muted-foreground mr-4">
                <Filter className="w-4 h-4" />
                <span className="text-sm">Filtrar:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {category === "all" ? "Todos" : category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} - Hoverboard Skate Elétrico Melhores Preços Melhores Ofertas`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="font-display font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                      {product.shortDescription}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                      <div>Roda: <span className="text-foreground">{product.specs.wheel}</span></div>
                      <div>Motor: <span className="text-foreground">{product.specs.motor}</span></div>
                      <div>Veloc.: <span className="text-foreground">{product.specs.speed}</span></div>
                      <div>Alcance: <span className="text-foreground">{product.specs.range}</span></div>
                    </div>

                    {/* Features */}
                    <div className="flex gap-3 mb-4">
                      {product.specs.bluetooth && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Bluetooth className="w-3 h-3 text-electric-blue" />
                          Bluetooth
                        </div>
                      )}
                      {product.specs.led && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Lightbulb className="w-3 h-3 text-primary" />
                          LED
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-primary fill-primary" />
                        4.8
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <Link to={`/produto/${product.slug}`}>
                          Saiba Mais
                        </Link>
                      </Button>
                      <Button variant="electric" size="sm" className="flex-1" asChild>
                        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          Comprar
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Encontrou o seu <span className="text-gradient-electric">Hoverboard</span>?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Clique no botão abaixo para ver todos os modelos disponíveis no Mercado Livre com as melhores ofertas e frete grátis.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Ver Ofertas no Mercado Livre
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductsPage;
