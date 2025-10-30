import aboutBg from "@/assets/about-sky.jpg";
import { Button } from "./ui/button";
import { Target, Users, Rocket, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    { icon: Target, label: "Precisão", color: "from-cyan-primary to-blue-500" },
    { icon: Users, label: "Parceria", color: "from-blue-500 to-magenta-primary" },
    { icon: Rocket, label: "Inovação", color: "from-magenta-primary to-pink-500" },
    { icon: Heart, label: "Paixão", color: "from-pink-500 to-red-500" }
  ];

  return (
    <section 
      id="quem-somos"
      className="relative py-40 px-4 parallax-section overflow-hidden"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-magenta-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative container mx-auto max-w-5xl text-center z-10">
        {/* Badge */}
        <div className="inline-block mb-6 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            <span className="text-white text-sm font-semibold tracking-wider">NOSSA HISTÓRIA</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 text-shadow-strong animate-fade-in-up delay-100">
          SOBRE <span className="bg-gradient-to-r from-cyan-primary via-yellow-primary to-magenta-primary bg-clip-text text-transparent">NÓS</span>
        </h2>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-16 border border-white/20 shadow-2xl mb-12 animate-scale-in delay-200">
          <p className="text-white text-lg md:text-xl leading-relaxed mb-6 text-shadow">
            A <strong className="text-yellow-primary">EASY PRINT SOLUÇÕES GRÁFICAS</strong> surgiu em meados do ano de 2014, na cidade de Campinas-SP, ao partir da ideia de dois jovens fascinados pelo ramo gráfico, cuja experiência profissional abrangiam desde a criação de identidades visuais até a execução de projetos impressos, norteados pela expectativa e necessidade de seus clientes, tendo como princípios fundamentais: Bom Atendimento, Minuciosidade, Qualidade e Produtividade.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-bold text-lg">{value.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-scale-in delay-700">
          <Button 
            size="lg" 
            className="bg-white hover:bg-white/90 text-foreground px-10 py-6 rounded-full text-lg font-bold shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            Conheça Nossa História
          </Button>
        </div>
      </div>

      {/* CMYK Gradient Bar with Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-2 gradient-cmyk shadow-lg" style={{
        backgroundSize: '200% 200%',
        animation: 'rotateGradient 3s ease infinite'
      }}></div>
    </section>
  );
};

export default AboutSection;
