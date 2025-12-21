import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Skates Elétrico</title>
        <meta name="description" content="Conheça nossa Política de Privacidade e como protegemos seus dados pessoais." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://skateseletrico.com.br/privacidade" />
      </Helmet>

      <Layout>
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Política de Privacidade
              </h1>
              <p className="text-muted-foreground">
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
              </p>
            </header>

            <div className="prose prose-lg prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p className="text-muted-foreground mb-4">
                  O site <strong className="text-primary">Skates Elétrico</strong> está comprometido em proteger a privacidade de seus visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Informações Coletadas</h2>
                <p className="text-muted-foreground mb-4">
                  Podemos coletar os seguintes tipos de informações:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Dados de navegação (páginas visitadas, tempo de permanência)</li>
                  <li>Informações do dispositivo (tipo de navegador, sistema operacional)</li>
                  <li>Endereço IP e localização aproximada</li>
                  <li>Dados fornecidos voluntariamente (como e-mail para newsletter)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Uso das Informações</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Melhorar a experiência de navegação no site</li>
                  <li>Personalizar conteúdo e recomendações</li>
                  <li>Enviar comunicações relevantes (quando autorizado)</li>
                  <li>Analisar métricas e melhorar nossos serviços</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. Cookies e Tecnologias Semelhantes</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Links de Afiliados</h2>
                <p className="text-muted-foreground mb-4">
                  Este site contém links de afiliados para o Mercado Livre e outros parceiros. Quando você clica nesses links e realiza uma compra, podemos receber uma comissão. Isso não afeta o preço que você paga pelo produto.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">6. Compartilhamento de Dados</h2>
                <p className="text-muted-foreground mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou proteger nossos direitos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">7. Segurança</h2>
                <p className="text-muted-foreground mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">8. Seus Direitos</h2>
                <p className="text-muted-foreground mb-4">
                  De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar consentimentos dados anteriormente</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">9. Contato</h2>
                <p className="text-muted-foreground mb-4">
                  Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato conosco através do e-mail: <strong className="text-primary">privacidade@skateseletrico.com.br</strong>
                </p>
              </section>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default PrivacyPage;
