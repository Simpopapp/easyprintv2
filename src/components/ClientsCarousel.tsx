import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import logo1 from "@/assets/clients/bombril.jpg";
import logo2 from "@/assets/clients/capodarte.jpg";
import logo3 from "@/assets/clients/dovos.jpg";
import logo4 from "@/assets/clients/hardrock.jpg";
import logo5 from "@/assets/clients/hope.jpg";
import logo6 from "@/assets/clients/johnson.jpg";
import logo7 from "@/assets/clients/morana.jpg";
import logo8 from "@/assets/clients/regus.jpg";
import logo_bmw from "@/assets/clients/logo_bmw.png";

const ClientsCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const clients = [
    { name: "Bombril", logo: logo1, href: "https://www.bombril.com.br/" },
    { name: "Capodarte", logo: logo2, href: "https://www.capodarte.com.br/" },
    { name: "Copra", logo: logo3, href: "https://www.copra.com.br/" },
    { name: "Orsnix", logo: logo4, href: "https://www.orsnix.com.br/" },
    { name: "Hope", logo: logo5, href: "https://www.hopelingerie.com.br/" },
    { name: "WestRock", logo: logo6, href: "https://www.westrock.com/" },
    { name: "Morana", logo: logo7, href: "https://www.morana.com.br/" },
    { name: "Regus", logo: logo8, href: "https://www.regus.com/pt-br" },
    { name: "BMW", logo: logo_bmw, href: "https://www.bmw.com.br/pt/index.html" }
  ];

  // Duplicate clients for infinite loop effect
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clientes" className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider">CLIENTES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Alguns dos <span className="bg-gradient-to-r from-cyan-primary to-magenta-primary bg-clip-text text-transparent">nossos clientes</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 rounded-full bg-white shadow-xl hover:bg-gray-100 hover:scale-110 transition-all" 
            onClick={() => setIsPaused(!isPaused)}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 rounded-full bg-white shadow-xl hover:bg-gray-100 hover:scale-110 transition-all" 
            onClick={() => setIsPaused(!isPaused)}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex gap-12 animate-carousel-scroll"
              style={{ 
                animationPlayState: isPaused ? 'paused' : 'running',
                width: 'fit-content'
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div key={index} className="flex-shrink-0 flex items-center justify-center w-56">
                  <a href={client.href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl no-blur-filter">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-full h-full object-contain p-4 bg-white"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
