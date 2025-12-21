import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { affiliateProducts } from "@/data/products";

export function AffiliateSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-success/10 text-success px-4 py-1 rounded-full text-sm font-medium mb-4">
            Ofertas Especiais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira também nossas recomendações de produtos para saúde e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {affiliateProducts.slice(0, 10).map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-4 hover:border-success/50 transition-all duration-300 hover:shadow-lg group text-center"
            >
              <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-success transition-colors line-clamp-2">
                {product.name}
              </h3>
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground group-hover:text-success">
                Ver Oferta
                <ExternalLink className="w-3 h-3" />
              </Button>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            * Os links acima são de afiliados. Ao comprar através deles, você nos ajuda a manter o site funcionando.
          </p>
        </div>
      </div>
    </section>
  );
}
