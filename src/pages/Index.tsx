import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AffiliateSection } from "@/components/home/AffiliateSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Skates Elétrico",
    "url": "https://skateseletrico.com.br",
    "description": "Melhores Hoverboards e Skates Elétricos do Brasil. Análises, comparativos e ofertas exclusivas.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://skateseletrico.com.br/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Skates Elétrico",
    "url": "https://skateseletrico.com.br",
    "logo": "https://skateseletrico.com.br/logo.png",
    "sameAs": [
      "https://facebook.com/skateseletrico",
      "https://instagram.com/skateseletrico",
      "https://youtube.com/skateseletrico"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Skates Elétrico | Melhores Hoverboards e Skates Elétricos do Brasil</title>
        <meta name="description" content="Encontre os melhores hoverboards e skates elétricos do Brasil. Análises detalhadas, comparativos, melhores preços e ofertas exclusivas. Marcas confiáveis e avaliações reais." />
        <meta name="keywords" content="hoverboard, skate elétrico, melhores hoverboards, hoverboard barato, skate elétrico bluetooth, hoverboard led, melhores preços, melhores ofertas, melhores marcas" />
        <link rel="canonical" href="https://skateseletrico.com.br" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Skates Elétrico | Melhores Hoverboards do Brasil" />
        <meta property="og:description" content="Descubra os melhores hoverboards com análises reais e ofertas exclusivas." />
        <meta property="og:url" content="https://skateseletrico.com.br" />
        <meta property="og:site_name" content="Skates Elétrico" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skates Elétrico | Melhores Hoverboards do Brasil" />
        <meta name="twitter:description" content="Descubra os melhores hoverboards com análises reais e ofertas exclusivas." />
        
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </Helmet>

      <Layout>
        <HeroSection />
        <ProductCarousel />
        <FeaturesSection />
        <AffiliateSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
