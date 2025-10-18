import { Github, Linkedin, Mail, Heart, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-3">
                <img src={logo} alt="Logo" className="h-8 w-8 rounded-lg" />
                <h3 className="text-xl font-bold">Ing. Samir Vergara</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Desarrollando el futuro, una línea de código a la vez
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/web-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-orange-400 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samir-vergara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-blue-400 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:samirantoniovergaravergara@gmail.com"
                  className="p-2 hover:bg-red-400 rounded-lg transition-colors"				  
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
				
				<a
                  href="https://wa.me/573004122688"
                  className="p-2 hover:bg-green-400 rounded-lg transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Experiencia
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">Información</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📧 samirantoniovergaravergara@gmail.com</li>
                <li>📱 +57 300 412 2688</li>
                <li>📍 Colombia</li>
                <li className="pt-2">
                  <span className="text-xs">
                    Disponible para proyectos freelance y oportunidades laborales
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                © {currentYear} Ing. Samir Vergara. Hecho con <Heart className="h-4 w-4 text-destructive fill-destructive" /> y mucho café
              </p>
              <p className="text-xs text-muted-foreground">
                Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
