import { Facebook, Youtube, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/easyprintgr",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Youtube",
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCvUSZMnDeyI_3d_h340bAOA?view_as=subscriber",
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/easygrcamp/",
    color: "bg-pink-600 hover:bg-pink-700",
  },
];

const FloatingSocialIcons = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center justify-center w-12 h-12 text-white shadow-lg
            transition-all duration-300 ease-in-out transform
            hover:scale-110 hover:-translate-x-1
            ${link.color}
          `}
          aria-label={link.name}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;
