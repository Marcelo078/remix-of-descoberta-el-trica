import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AFFILIATE_LINK } from "@/data/products";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "Produtos", path: "/produtos" },
  { name: "Artigos", path: "/artigos" },
  { name: "Sobre Nós", path: "/sobre" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-gradient-electric">
              Skates Elétrico
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="electric" size="lg" asChild>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-4 h-4" />
                Comprar Agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="electric" className="mt-2" asChild>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-4 h-4" />
                Comprar Agora
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
