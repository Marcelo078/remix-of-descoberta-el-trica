import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AFFILIATE_LINK } from "@/data/products";
import heroImage from "@/assets/hero-hoverboard.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">
                Avaliações Reais • Melhores Preços
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">Descubra os </span>
              <span className="text-gradient-electric">Melhores Hoverboards</span>
              <span className="text-foreground"> do Brasil</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Análises completas, comparativos detalhados e as <strong className="text-primary">melhores ofertas</strong> em skates elétricos. Qualidade e procedência garantidas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Ver Ofertas
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#produtos">
                  Explorar Produtos
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm">Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="text-sm">+500 Avaliações</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Hoverboard Skate Elétrico - Melhores Ofertas e Preços do Brasil"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg animate-bounce-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9/5</p>
                  <p className="text-xs text-muted-foreground">Avaliação Média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
