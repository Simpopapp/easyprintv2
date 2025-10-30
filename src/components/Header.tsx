import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [{
    label: "Fachada",
    href: "#hero"
  }, {
    label: "Nossa Lojas",
    href: "#lojas"
  }, {
    label: "Quem somos",
    href: "#quem-somos"
  }, {
    label: "Serviços",
    href: "#serviços"
  }, {
    label: "Projetos",
    href: "#projetos"
  }, {
    label: "Clientes",
    href: "#clientes"
  }, {
    label: "Contato",
    href: "#contato"
  }, {
    label: "Blog",
    href: "#blog"
  }];
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glassmorphism shadow-xl' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between border-b transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
          <div className="flex items-center animate-slide-in-left">
            <img 
              src={logo} 
              alt="Easy Print - Impressão Digital" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 animate-slide-in-right delay-200">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Unidade Campinas</p>
                <p className="text-xs text-muted-foreground">19 98236-8224</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Patio Boulevard Mall</p>
                <p className="text-xs text-muted-foreground">19 98236-8224</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-sm">Unidade Vinhedo</p>
                <p className="text-xs text-muted-foreground">19 98414-5166</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-sm">Unidade Sumaré</p>
                <p className="text-xs text-muted-foreground">19 98236-8224</p>
              </div>
            </div>
          </div>
        </div>

        <nav className={`transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
          <ul className="flex items-center justify-center gap-8 flex-wrap">
            {menuItems.map((item, index) => <li key={index} className="animate-fade-in-up" style={{
            animationDelay: `${0.1 + index * 0.05}s`
          }}>
                <a href={item.href} onClick={e => handleClick(e, item.href)} className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-primary via-magenta-primary to-yellow-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>)}
          </ul>
        </nav>
      </div>
    </header>;
};
export default Header;