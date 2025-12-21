import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | Skates Elétrico</title>
        <meta name="description" content="Leia nossos Termos de Uso e condições para utilização do site Skates Elétrico." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://skateseletrico.com.br/termos" />
      </Helmet>

      <Layout>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Termos de Uso
              </h1>
              <p className="text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
              </p>
            </header>

            <div className="prose prose-lg prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Ao acessar e utilizar o site <strong className="text-primary">Skates Elétrico</strong>, você concorda com estes Termos de Uso. Se não concordar com qualquer parte destes termos, por favor, não utilize nosso site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
                <p className="text-muted-foreground mb-4">
                  O Skates Elétrico é um site de conteúdo que fornece análises, comparativos e informações sobre hoverboards e skates elétricos. Atuamos como afiliados do Mercado Livre e outros parceiros, recebendo comissão por vendas realizadas através de nossos links.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Conteúdo do Site</h2>
                <p className="text-muted-foreground mb-4">
                  Todo o conteúdo do site, incluindo textos, imagens, gráficos, logotipos e materiais, é de propriedade do Skates Elétrico ou de seus respectivos proprietários. É proibida a reprodução, distribuição ou modificação sem autorização prévia.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Links de Afiliados</h2>
                <p className="text-muted-foreground mb-4">
                  Este site contém links de afiliados. Quando você clica nesses links e realiza uma compra, podemos receber uma comissão do vendedor. Isso não afeta o preço que você paga pelo produto e nos ajuda a manter o site funcionando.
                </p>
                <p className="text-muted-foreground mb-4">
                  Não somos responsáveis pela qualidade, entrega ou qualquer outro aspecto relacionado aos produtos vendidos pelos nossos parceiros. Todas as transações são realizadas diretamente entre você e o vendedor.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Isenção de Responsabilidade</h2>
                <p className="text-muted-foreground mb-4">
                  As informações fornecidas neste site são apenas para fins informativos. Não garantimos a precisão, completude ou atualidade das informações. O uso das informações é por sua conta e risco.
                </p>
                <p className="text-muted-foreground mb-4">
                  Não somos responsáveis por qualquer dano direto, indireto, incidental ou consequencial resultante do uso ou incapacidade de uso do site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Conduta do Usuário</h2>
                <p className="text-muted-foreground mb-4">
                  Ao utilizar nosso site, você concorda em:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Não violar leis ou regulamentos aplicáveis</li>
                  <li>Não tentar acessar áreas restritas do site</li>
                  <li>Não interferir no funcionamento normal do site</li>
                  <li>Não copiar ou reproduzir conteúdo sem autorização</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Propriedade Intelectual</h2>
                <p className="text-muted-foreground mb-4">
                  Todas as marcas, logotipos e nomes comerciais exibidos no site são propriedade de seus respectivos donos. O uso dessas marcas não implica qualquer afiliação ou endosso.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Alterações nos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. Recomendamos revisar esta página periodicamente.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Lei Aplicável</h2>
                <p className="text-muted-foreground mb-4">
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">10. Contato</h2>
                <p className="text-muted-foreground mb-4">
                  Para dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail: <strong className="text-primary">contato@skateseletrico.com.br</strong>
                </p>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default TermsPage;
