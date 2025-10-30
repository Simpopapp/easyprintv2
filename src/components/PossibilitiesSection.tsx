import { Button } from "./ui/button";
import { Printer, Palette, Award, Zap } from "lucide-react";

const PossibilitiesSection = () => {
  const features = [
    {
      icon: Printer,
      title: "Impressão Digital",
      description: "Tecnologia de ponta para resultados perfeitos"
    },
    {
      icon: Palette,
      title: "Design Criativo",
      description: "Equipe especializada em soluções visuais"
    },
    {
      icon: Award,
      title: "Alta Qualidade",
      description: "Materiais premium e acabamentos especiais"
    },
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Prazos ágeis sem perder a qualidade"
    }
  ];

  return (
    <section id="serviços" className="relative py-32 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-magenta-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm tracking-wider">NOSSOS SERVIÇOS</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center leading-tight">
            Infinitas possibilidades em<br />
            <span className="bg-gradient-to-r from-cyan-primary via-primary to-magenta-primary bg-clip-text text-transparent">
              impressão e comunicação visual
            </span>
          </h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Medium Text */}
            <div className="animate-slide-in-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Deixe sua <span className="text-cyan-primary">criatividade</span> fazer<br />
                a <span className="text-magenta-primary">diferença</span>
              </h3>
            </div>

            {/* Right Side - Descriptive Text with Visual Enhancement */}
            <div className="relative animate-slide-in-right delay-200">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-primary/5 via-primary/5 to-magenta-primary/5 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10 space-y-5">
                <div className="space-y-1">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-primary to-primary rounded-full"></div>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    Valorize marcas, crie ambientes, produza materiais inovadores, comunique-se com o 
                    seu público de maneira original e envolvente. Impressione usando novas tecnologias, 
                    processos, formatos e matérias-primas.
                  </p>
                </div>
                
                <div className="space-y-1">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-magenta-primary rounded-full"></div>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    Nós da Easy Print somos o parceiro certo para quem não abre mão da qualidade e 
                    agilidade, estamos no mercado mostrando o que somos capaz de fazer.
                  </p>
                </div>
                
                <div className="space-y-1">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-primary via-primary to-magenta-primary rounded-full"></div>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    Nosso crescimento é fruto da inovação e da ousadia dos nossos diretores, um 
                    sentimento que contagia toda a empresa para que possamos sempre surpreender os 
                    nossos clientes, oferecendo o que há de mais moderno no segmento. O maior 
                    desafio é, junto com você, chegar às soluções mais adequadas e inteligentes, com o 
                    melhor custo-benefício.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-primary to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services List */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100 animate-fade-in-up delay-400">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8 text-center">
            Nossa expertise abrange <strong className="text-primary">cardápios</strong>, <strong className="text-primary">catálogos</strong>, 
            <strong className="text-primary"> banners</strong>, <strong className="text-primary">fachadas</strong>, 
            <strong className="text-primary"> adesivos</strong>, <strong className="text-primary">materiais de PDV</strong> e muito mais. 
            Com tecnologia de ponta e acabamentos especiais, transformamos suas ideias em realidade com precisão e qualidade excepcional.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-primary to-primary hover:from-primary hover:to-cyan-primary text-white px-10 py-6 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>

        {/* Decorative gradient bar */}
        <div className="mt-16 h-2 gradient-cmyk rounded-full shadow-lg animate-fade-in delay-600" style={{
          backgroundSize: '200% 200%',
          animation: 'rotateGradient 3s ease infinite'
        }}></div>
      </div>
    </section>
  );
};

export default PossibilitiesSection;
