import React from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, MapPin, Phone, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  institucional: [
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Transparência", path: "/transparencia" },
    { name: "Política de Privacidade", path: "/privacidade" },
    { name: "Termos de Uso", path: "/termos" },
  ],
  produtos: [
    { name: "Hoverboards Offroad", path: "/produtos?categoria=offroad" },
    { name: "Hoverboards Urbanos", path: "/produtos?categoria=urbano" },
    { name: "Para Crianças", path: "/produtos?categoria=infantil" },
    { name: "Premium", path: "/produtos?categoria=premium" },
  ],
  suporte: [
    { name: "FAQ", path: "/faq" },
    { name: "Contato", path: "/contato" },
    { name: "Artigos", path: "/artigos" },
  ],
};

export const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <footer ref={ref} className="bg-card border-t border-border" {...props}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <Zap className="w-8 h-8 text-primary" />
                <span className="font-display font-bold text-xl text-gradient-electric">
                  Skates Elétrico
                </span>
              </Link>
              <p className="text-muted-foreground text-sm">
                As melhores análises e ofertas de hoverboards e skates elétricos do Brasil. Qualidade, procedência e avaliações reais.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Institucional</h4>
              <ul className="space-y-2">
                {footerLinks.institucional.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Produtos */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Categorias</h4>
              <ul className="space-y-2">
                {footerLinks.produtos.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  contato@skateseletrico.com.br
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  (11) 99999-9999
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  São Paulo, SP - Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm text-center md:text-left">
                © {new Date().getFullYear()} Skates Elétrico. Todos os direitos reservados.
              </p>
              <p className="text-muted-foreground text-xs text-center md:text-right">
                Este site contém links de afiliados. Podemos receber comissão por compras realizadas através dos nossos links.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";
