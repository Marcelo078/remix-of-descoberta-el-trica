import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { AlertTriangle, ExternalLink, Info, Shield } from "lucide-react";

const TransparencyPage = () => {
  return (
    <>
      <Helmet>
        <title>Transparência e Isenção de Responsabilidade | Skates Elétrico</title>
        <meta name="description" content="Saiba como funcionamos, nosso modelo de negócio com afiliados e nossa política de transparência." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://skateseletrico.com.br/transparencia" />
      </Helmet>

      <Layout>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Transparência e Isenção de Responsabilidade
              </h1>
              <p className="text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
              </p>
            </header>

            <div className="space-y-8">
              {/* Affiliate Disclosure */}
              <section className="bg-primary/10 border border-primary/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      Divulgação de Afiliados
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      O <strong className="text-primary">Skates Elétrico</strong> participa de programas de afiliados, incluindo o programa de afiliados do Mercado Livre e da Monetizze. Isso significa que podemos receber uma comissão quando você clica em nossos links e realiza uma compra.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">Importante:</strong> O fato de recebermos comissões NÃO afeta nossas análises e recomendações. Nosso compromisso é sempre com a qualidade e honestidade do conteúdo.
                    </p>
                    <p className="text-muted-foreground">
                      As comissões que recebemos nos ajudam a manter o site funcionando, pagar nossa equipe e continuar produzindo conteúdo gratuito e de qualidade para você.
                    </p>
                  </div>
                </div>
              </section>

              {/* How We Work */}
              <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      Como Trabalhamos
                    </h2>
                    <ul className="text-muted-foreground space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        <span>Pesquisamos e selecionamos produtos com base em qualidade, avaliações e custo-benefício.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        <span>Analisamos avaliações reais de compradores no Mercado Livre e outras fontes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        <span>Verificamos a reputação do vendedor e histórico de entregas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">4.</span>
                        <span>Criamos conteúdo informativo e comparativo para ajudar na sua decisão.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">5.</span>
                        <span>Incluímos links de afiliados que nos geram comissão se você comprar.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Disclaimer */}
              <section className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      Isenção de Responsabilidade
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">NÃO somos vendedores.</strong> Não vendemos produtos diretamente. Todas as compras são realizadas através dos sites de nossos parceiros (Mercado Livre, Monetizze, etc.).
                    </p>
                    <p className="text-muted-foreground mb-4">
                      <strong className="text-foreground">NÃO nos responsabilizamos por:</strong>
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Qualidade dos produtos vendidos por terceiros</li>
                      <li>Prazos de entrega ou problemas logísticos</li>
                      <li>Políticas de troca e devolução dos vendedores</li>
                      <li>Divergências entre as informações do anúncio e o produto recebido</li>
                      <li>Garantia dos produtos</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Recomendamos sempre verificar as informações diretamente no anúncio antes de finalizar sua compra, incluindo descrição do produto, avaliações, reputação do vendedor e política de devolução.
                    </p>
                  </div>
                </div>
              </section>

              {/* Our Commitment */}
              <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      Nosso Compromisso
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Apesar de recebermos comissões, nosso compromisso principal é com você, nosso leitor. Prometemos:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>✓ Ser sempre honestos em nossas análises</li>
                      <li>✓ Recomendar apenas produtos que consideramos de qualidade</li>
                      <li>✓ Divulgar claramente quando um link é de afiliado</li>
                      <li>✓ Atualizar nossas recomendações regularmente</li>
                      <li>✓ Ouvir o feedback da nossa comunidade</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="text-center">
                <p className="text-muted-foreground">
                  Dúvidas sobre nossa política de transparência? Entre em contato:
                  <br />
                  <strong className="text-primary">contato@skateseletrico.com.br</strong>
                </p>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default TransparencyPage;
