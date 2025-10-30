import heroImage from "@/assets/hero-interior.jpg";
import { ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[700px] overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-64 h-64 bg-cyan-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-magenta-primary opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-primary opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: 'scale(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-primary/10 via-transparent to-magenta-primary/10 animate-pulse"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        {/* Decorative Element */}
        <div className="mb-8 animate-fade-in delay-100">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-primary animate-pulse" />
            <span className="text-white text-sm font-medium tracking-wider">IMPRESSÃO DE ALTA QUALIDADE</span>
            <Sparkles className="w-4 h-4 text-cyan-primary animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white text-shadow-strong max-w-5xl mb-6 animate-fade-in-up delay-200 leading-tight">
          Você pensa e a<br />
          <span className="bg-gradient-to-r from-cyan-primary via-magenta-primary to-yellow-primary bg-clip-text text-transparent animate-pulse">
            gente produz
          </span>
        </h1>
        
        <p className="text-xl md:text-3xl lg:text-4xl text-white/95 text-shadow max-w-3xl font-light animate-fade-in-up delay-400 mb-8">
          Simples assim
        </p>

        {/* CTA Button */}
        <div className="animate-scale-in delay-600">
          <a 
            href="#contato" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-primary to-primary hover:from-primary hover:to-cyan-primary text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-cyan-primary/50 hover:scale-105 transform"
          >
            Solicite um Orçamento
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>

        {/* Stats */}
        <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-12 animate-fade-in delay-800">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white text-shadow-strong">15+</div>
            <div className="text-sm text-white/80 font-medium">Anos de Experiência</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white text-shadow-strong">5000+</div>
            <div className="text-sm text-white/80 font-medium">Projetos Entregues</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white text-shadow-strong">100%</div>
            <div className="text-sm text-white/80 font-medium">Satisfação</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/80 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/10">
            <div className="w-2 h-4 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* CMYK Gradient Bar with Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-2 gradient-cmyk shadow-lg" style={{
        backgroundSize: '200% 200%',
        animation: 'rotateGradient 3s ease infinite'
      }}></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-32 right-20 w-16 h-16 border-4 border-cyan-primary/30 rotate-45 animate-float"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 border-4 border-magenta-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-yellow-primary/30 animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;