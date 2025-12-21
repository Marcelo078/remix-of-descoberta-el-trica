import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Zap, Target, Users, Heart, Award, TrendingUp } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Skates Elétrico - Quem Somos</title>
        <meta name="description" content="Conheça o Skates Elétrico, seu portal de confiança para análises e ofertas de hoverboards e skates elétricos no Brasil." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://skateseletrico.com.br/sobre" />
      </Helmet>

      <Layout>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Hero */}
            <header className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Nossa História</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Sobre o <span className="text-gradient-electric">Skates Elétrico</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Somos apaixonados por mobilidade elétrica e queremos ajudar você a encontrar o <strong className="text-primary">hoverboard perfeito</strong>.
              </p>
            </header>

            {/* Mission Section */}
            <section className="max-w-4xl mx-auto mb-16">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Nossa Missão
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  O <strong className="text-primary">Skates Elétrico</strong> nasceu da paixão por mobilidade urbana sustentável e diversão. Nosso objetivo é ser a referência número um em análises e recomendações de hoverboards e skates elétricos no Brasil.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  Acreditamos que todo mundo merece ter acesso a informações confiáveis e imparciais antes de fazer uma compra importante. Por isso, dedicamos tempo e esforço para analisar cada produto, verificar avaliações reais de compradores e selecionar apenas as melhores ofertas.
                </p>
                <p className="text-muted-foreground text-lg">
                  Nossa equipe, liderada pelo revisor <strong className="text-primary">Marcelo Silva</strong>, testa e avalia cada produto com critérios rigorosos de qualidade, segurança e custo-benefício.
                </p>
              </div>
            </section>

            {/* Values */}
            <section className="mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                Nossos Valores
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: Target,
                    title: "Precisão",
                    description: "Informações verificadas e análises detalhadas para você tomar a melhor decisão."
                  },
                  {
                    icon: Users,
                    title: "Comunidade",
                    description: "Valorizamos feedback e experiências reais de nossa comunidade de leitores."
                  },
                  {
                    icon: Heart,
                    title: "Paixão",
                    description: "Amamos o que fazemos e isso se reflete na qualidade do nosso conteúdo."
                  },
                  {
                    icon: Award,
                    title: "Qualidade",
                    description: "Recomendamos apenas produtos que passam em nossos critérios rigorosos."
                  },
                  {
                    icon: TrendingUp,
                    title: "Atualização",
                    description: "Mantemos nosso conteúdo sempre atualizado com as últimas novidades do mercado."
                  },
                  {
                    icon: Zap,
                    title: "Inovação",
                    description: "Buscamos constantemente novas formas de entregar valor aos nossos leitores."
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Team */}
            <section className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Nosso Revisor Principal
                </h2>
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-3xl text-primary">MS</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Marcelo Silva</h3>
                <p className="text-primary font-medium mb-4">Editor-Chefe & Revisor Técnico</p>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Com mais de 5 anos de experiência em análise de produtos eletrônicos e mobilidade urbana, Marcelo lidera nossa equipe de conteúdo garantindo que cada análise seja precisa, imparcial e útil para nossos leitores.
                </p>
              </div>
            </section>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default AboutPage;
