import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink, Star, Bluetooth, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, AFFILIATE_LINK } from "@/data/products";

export function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="produtos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Catálogo Completo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-electric">Melhores Hoverboards</span>
            <br />
            <span className="text-foreground">Skates Elétricos 2024</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os <strong className="text-primary">melhores hoverboards</strong> com as melhores ofertas, marcas confiáveis e avaliações reais de compradores.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg transition-all ${
              canScrollLeft
                ? "opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shadow-lg transition-all ${
              canScrollRight
                ? "opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.slice(0, 12).map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[300px] snap-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.imageUrl}
                      alt={`${product.name} - Skate Elétrico Hoverboard Melhores Preços`}
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
                    <h3 className="font-display font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                      {product.shortDescription}
                    </p>

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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/produtos">
              Ver Todos os Produtos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
