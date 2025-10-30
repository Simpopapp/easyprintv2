import { Facebook, Youtube, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3 animate-fade-in">
            
            <img src={logo} alt="Easy Print - Impressão Digital" className="h-16 w-auto" />
          </div>
          
          <div className="flex items-center gap-4 animate-fade-in delay-200">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-[#1877F2]/50 transition-all duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-[#FF0000]/50 transition-all duration-300">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center hover:-translate-y-2 hover:shadow-lg hover:shadow-[#833AB4]/50 transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

        <p className="text-center text-sm text-gray-400 animate-fade-in delay-400">
          © {new Date().getFullYear()} Easy Print, feito por <span className="text-primary font-semibold">Exato Digital E Gráfica Ltda</span>
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-cmyk" style={{
        backgroundSize: '200% 200%',
        animation: 'rotateGradient 3s ease infinite'
      }}></div>
    </footer>
  );
};

export default Footer;
