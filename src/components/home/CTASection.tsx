import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AFFILIATE_LINK } from "@/data/products";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-electric-orange/10 to-primary/20" />
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-orange/20 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Oferta por Tempo Limitado</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Garanta seu </span>
            <span className="text-gradient-electric">Hoverboard</span>
            <span className="text-foreground"> Agora!</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Aproveite as melhores ofertas do Mercado Livre com parcelamento em até <strong className="text-primary">12x sem juros</strong> e frete grátis para todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Ver Ofertas no Mercado Livre
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            * Preços e disponibilidade sujeitos a alteração. Consulte o anúncio para mais detalhes.
          </p>
        </div>
      </div>
    </section>
  );
}
