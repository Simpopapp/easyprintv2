import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-primary/5 via-transparent to-magenta-primary/5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider">CONTATO</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Fale <span className="bg-gradient-to-r from-cyan-primary to-magenta-primary bg-clip-text text-transparent">Conosco</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 animate-slide-in-left delay-200">
            <h3 className="text-3xl font-bold mb-8">Solicite um orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nome" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} required className="h-12" />
                <Input placeholder="Sobrenome" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} required className="h-12" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="h-12" />
                <Input type="tel" placeholder="Telefone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required className="h-12" />
              </div>
              <Textarea placeholder="Digite sua mensagem aqui..." rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-primary to-primary hover:from-primary hover:to-cyan-primary text-white font-bold py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-8 animate-slide-in-right delay-400">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Patio Boulevard Mall
              </h4>
              <div className="space-y-4">
                <a href="mailto:campinas@easygr.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  campinas@easygr.com.br
                </a>
                <a href="https://wa.me/5519982368224" className="flex items-center gap-3 text-whatsapp hover:scale-105 transition-transform font-semibold">
                  <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  (19) 98236-8224
                </a>
                <p className="text-muted-foreground pl-13">Av. Carlos Grimaldi, 1160-1170 Jardim Conceição</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Unidade Vinhedo
              </h4>
              <div className="space-y-4">
                <a href="mailto:vinhedo@easygr.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  vinhedo@easygr.com.br
                </a>
                <a href="https://wa.me/5519984145166" className="flex items-center gap-3 text-whatsapp hover:scale-105 transition-transform font-semibold">
                  <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  (19) 98414-5166
                </a>
                <p className="text-muted-foreground pl-13">Rua São Paulo. 307 - Nova Vinhedo - Vinhedo - SP - 13284206</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h4 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Unidade Sumaré
              </h4>
              <div className="space-y-4">
                <a href="mailto:contato@easygr.com.br" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  contato@easygr.com.br
                </a>
                <a href="https://wa.me/5519982368224" className="flex items-center gap-3 text-whatsapp hover:scale-105 transition-transform font-semibold">
                  <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  (19) 98236-8224
                </a>
                <p className="text-muted-foreground pl-13">Avenida Engenheiro Jaime Pinheiro Ulhôa Cintra, 2260, Parque Bandeirantes - Sumaré - São Paulo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
