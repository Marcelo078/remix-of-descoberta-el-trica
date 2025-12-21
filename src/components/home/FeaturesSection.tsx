import { Shield, Truck, CreditCard, Headphones, Award, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Todos os produtos são vendidos através do Mercado Livre, com garantia e proteção ao comprador.",
  },
  {
    icon: Award,
    title: "Melhores Marcas",
    description: "Selecionamos apenas as melhores marcas do mercado, com qualidade e procedência garantidas.",
  },
  {
    icon: ThumbsUp,
    title: "Avaliações Reais",
    description: "Análises detalhadas e avaliações de compradores reais para você fazer a melhor escolha.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Frete calculado direto no Mercado Livre, com opções de entrega expressa disponíveis.",
  },
  {
    icon: CreditCard,
    title: "Parcelamento",
    description: "Parcele em até 12x sem juros no cartão de crédito através do Mercado Pago.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Tire suas dúvidas antes de comprar. Estamos aqui para ajudar na sua escolha.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Por que escolher a gente?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vantagens Exclusivas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos a melhor experiência de compra para você encontrar o <strong className="text-primary">hoverboard perfeito</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
