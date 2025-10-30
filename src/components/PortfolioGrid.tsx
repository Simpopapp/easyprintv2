import portfolioMenu from "@/assets/portfolio-menu.jpg";
import portfolioBooks from "@/assets/portfolio-books.jpg";
import portfolioHotel from "@/assets/portfolio-hotel.jpg";
import portfolioLetters from "@/assets/portfolio-3d-letters.jpg";
import portfolioInvitation from "@/assets/portfolio-invitation.jpg";
import portfolioStickers from "@/assets/portfolio-stickers.jpg";
import newPortfolio1 from "@/assets/imgi_22_445089_d1d75bcd3a6347678d313694c7d5dfc4~mv2.jpg";
import newPortfolio2 from "@/assets/imgi_21_445089_126f8096d2aa4fa58cc0eb7d7297a955~mv2.jpg";
import newPortfolio3 from "@/assets/imgi_23_445089_68e2921087fd4b5184a17826d71bdf9b~mv2.jpg";
import newPortfolio4 from "@/assets/imgi_19_445089_7dbbf909f14c4e4c9b6dba57b7c91a62~mv2.png";
import newPortfolio5 from "@/assets/imgi_12_445089_233f3e1cd4cb4af48ea20965342e0669~mv2.jpg";
import newPortfolio6 from "@/assets/imgi_11_445089_10e9d43b43a64dc19ec3cccc5084d48c~mv2.jpg";
import newPortfolio7 from "@/assets/imgi_10_445089_c52125e77e884bb796039fd17508bb1c~mv2.jpg";
import newPortfolio8 from "@/assets/imgi_18_445089_0566436e22da45eb909edf357070119e~mv2.jpg";
import newPortfolio9 from "@/assets/imgi_17_445089_73641ab5a1224bc492034ec52f76a910~mv2.jpg";
import newPortfolio10 from "@/assets/imgi_26_445089_255e41f2f0ec43d8bcd1d73849385114~mv2.jpg";
import newPortfolio11 from "@/assets/imgi_27_445089_4ed1deb8b74b48db92c37579423c4741~mv2.jpg";
import newPortfolio12 from "@/assets/imgi_25_445089_c41176fa46f846eb8a2e20ad4032e466~mv2.jpg";
import newPortfolio13 from "@/assets/imgi_24_445089_13a6f7d61df04afe93594beb4461e137~mv2.jpg";
import newPortfolio14 from "@/assets/imgi_16_445089_eae301ae2cad406b8a7eb5db85d26491~mv2.jpg";
import newPortfolio15 from "@/assets/imgi_15_445089_22729e3286354f61b7f50f49fb51c189~mv2.jpg";
import newPortfolio16 from "@/assets/imgi_14_445089_0f3577cd2d6d4b2a98b0252ae5b50fba~mv2.jpg";
import newPortfolio17 from "@/assets/imgi_13_11062b_6e3f6cb853b346d3988a976cd723ce23~mv2.jpg";
import newPortfolio18 from "@/assets/imgi_20_445089_71fe3afe3ced4676b09aecb04458ebaa~mv2.jpg";
import newPortfolio19 from "@/assets/imgi_105_445089_57c00520ad514fe293006faf69c599cc~mv2.jpg";
import newPortfolio20 from "@/assets/imgi_106_445089_08d2219af3db40a1ae338d157702c78e~mv2.jpg";

import { Phone, ExternalLink } from "lucide-react";

	const PortfolioGrid = () => {
  const portfolioItems = [
    { src: portfolioMenu, alt: "Cardápios Premium", title: "Cardápios Premium", delay: 200, span: 1 }, // Posição 1 (Card de Texto)
    { src: newPortfolio3, alt: "Novo Projeto 3", title: "Novo Projeto 3", delay: 500, span: 1 },
    { src: newPortfolio4, alt: "Novo Projeto 4", title: "Novo Projeto 4", delay: 600, span: 1 },
    { src: newPortfolio1, alt: "Novo Projeto 1", title: "Novo Projeto 1", delay: 300, span: 2 }, // Posição 4 (col-span-2)
    { src: newPortfolio5, alt: "Novo Projeto 5", title: "Novo Projeto 5", delay: 200, span: 1 },
    { src: newPortfolio6, alt: "Novo Projeto 6", title: "Novo Projeto 6", delay: 300, span: 1 },
    { src: newPortfolio7, alt: "Novo Projeto 7", title: "Novo Projeto 7", delay: 400, span: 1 },
    { src: newPortfolio8, alt: "Novo Projeto 8", title: "Novo Projeto 8", delay: 500, span: 1 },
    { src: newPortfolio2, alt: "Novo Projeto 2", title: "Novo Projeto 2", delay: 400, span: 2 }, // Posição 9 (col-span-2)
    { src: newPortfolio9, alt: "Novo Projeto 9", title: "Novo Projeto 9", delay: 600, span: 1 },
    { src: newPortfolio10, alt: "Novo Projeto 10", title: "Novo Projeto 10", delay: 200, span: 1 },
    { src: newPortfolio11, alt: "Novo Projeto 11", title: "Novo Projeto 11", delay: 300, span: 1 },
    { src: newPortfolio12, alt: "Novo Projeto 12", title: "Novo Projeto 12", delay: 400, span: 1 },
    { src: newPortfolio13, alt: "Novo Projeto 13", title: "Novo Projeto 13", delay: 500, span: 1 },
    { src: newPortfolio14, alt: "Novo Projeto 14", title: "Novo Projeto 14", delay: 600, span: 1 },

    { src: newPortfolio15, alt: "Novo Projeto 15", title: "Novo Projeto 15", delay: 200, span: 1 }, // Posição 20 (col-span-2)
    { src: newPortfolio16, alt: "Novo Projeto 16", title: "Novo Projeto 16", delay: 300, span: 1 },
    { src: newPortfolio17, alt: "Novo Projeto 17", title: "Novo Projeto 17", delay: 400, span: 1 },
    { src: newPortfolio18, alt: "Novo Projeto 18", title: "Novo Projeto 18", delay: 500, span: 1 }, // Posição 25 (col-span-2)
    { src: newPortfolio19, alt: "Novo Projeto 19", title: "Novo Projeto 19", delay: 600, span: 1 },
    { src: newPortfolio20, alt: "Novo Projeto 20", title: "Novo Projeto 20", delay: 200, span: 1 },
    { src: portfolioBooks, alt: "Livros", title: "Livros", delay: 300, span: 1 },
    { src: portfolioHotel, alt: "Fachada", title: "Fachada", delay: 400, span: 1 },
    { src: portfolioLetters, alt: "Letras 3D", title: "Letras 3D", delay: 500, span: 1 },
    { src: portfolioInvitation, alt: "Convite", title: "Convite", delay: 600, span: 1 },
    { src: portfolioStickers, alt: "Adesivos", title: "Adesivos", delay: 200, span: 1 }, // Posição 30 (col-span-2)
  ];
  return (
    <section id="projetos" className="relative pt-32 pb-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      <div className="relative z-10">
        <div className="text-center mb-16 px-4 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm tracking-wider">PORTFÓLIO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Nossos <span className="bg-gradient-to-r from-cyan-primary via-primary to-magenta-primary bg-clip-text text-transparent">Projetos</span>
          </h2>
        </div>

	        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0">
<div className="group flex flex-col justify-between p-10 bg-white break-inside-avoid mb-0.5 animate-fade-in-up delay-100">         <div>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-primary to-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Cardápios</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Impressão de cardápios personalizados com acabamento premium.
              </p>
            </div>
            <a href="https://wa.me/5519982368224" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-whatsapp hover:gap-3 transition-all font-semibold group/link">
              <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center group-hover/link:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              Solicitar Orçamento
            </a>
          </div>
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
        className={`group cursor-pointer transition-all duration-300 ${item.span === 2 ? 'md:col-span-2' : ''}`}
            >
       <div className="relative h-full overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-white font-bold text-xl mb-2 text-shadow-strong">{item.title}</h4>
                  <div className="flex items-center gap-2 text-white/90">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Ver detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
	        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
