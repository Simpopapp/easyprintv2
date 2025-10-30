import { Eye, MessageCircle, Heart, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCards = () => {
  const posts = [
    {
      title: "Como enviar mensagens no WhatsApp",
      background: "url('/images/whatsapp_bg.webp')",
      bgColor: "#25D366",
      href: "/noticia/whatsapp",
      author: "contato66805",
      date: "1 de nov. de 2020",
      readTime: "1 min",
      views: 195,
      comments: 1
    },
    {
      title: "Novembro AZUL",
      background: "url('/images/novembro_azul_bg.webp')",
      bgColor: "#1E3A8A",
      href: "/noticia/novembro-azul",
      author: "contato66805",
      date: "1 de nov. de 2020",
      readTime: "2 min",
      views: 13,
      comments: 0
    },
    {
      title: "OUTUBRO ROSA – TUDO O QUE VOC...",
      background: "url('/images/outubro_rosa_bg.jpg')",
      bgColor: "#EC4899",
      href: "/noticia/outubro-rosa",
      author: "Easy Print",
      date: "10 de out. de 2020",
      readTime: "11 min",
      views: 38,
      comments: 0
    }
  ];

  return (
    <section id="blog" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider">BLOG</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Últimas <span className="bg-gradient-to-r from-cyan-primary to-magenta-primary bg-clip-text text-transparent">Notícias</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link to={post.href} key={index} className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group transform hover:-translate-y-2 duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="h-96 p-8 flex flex-col justify-end relative bg-cover bg-center" style={{ backgroundImage: post.background, backgroundColor: post.bgColor }}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-2xl mb-4 text-shadow-strong group-hover:scale-105 transition-transform duration-300">
                    {post.title}
                  </h3>
                  
                  <div className="flex flex-col gap-3 text-white/95 text-sm">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} de leitura</span>
                    </div>
                    
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                      <button className="flex items-center gap-1 hover:scale-125 transition-transform bg-white/10 backdrop-blur-sm p-2 rounded-full">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 h-2 gradient-cmyk rounded-full shadow-lg animate-fade-in delay-600" style={{ backgroundSize: '200% 200%', animation: 'rotateGradient 3s ease infinite' }}></div>
      </div>
    </section>
  );
};

export default BlogCards;
