import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Book Now", href: "#book" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Swedish Massage",
    "Deep Tissue Massage", 
    "Couples Massage",
    "Hot Stone Therapy",
    "Aromatherapy Massage",
    "Facial & Skincare"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold">
              Pamper Me
            </h3>
            <p className="text-background/80 leading-relaxed">
              Luxury mobile spa and in-hotel massage services delivering premium wellness experiences across Lagos.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open("https://instagram.com/pamperme_lagos", "_blank")}
                className="text-background hover:text-luxury hover:bg-background/10"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open("https://facebook.com/pampermemobile", "_blank")}
                className="text-background hover:text-luxury hover:bg-background/10"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-luxury">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-luxury transition-spa text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-luxury">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-background/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-luxury">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-luxury flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <div>Maison 55 Hotel</div>
                  <div>Adebisi Omotola Street</div>
                  <div>Iru, Victoria Island, Lagos</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-luxury" />
                <span className="text-background/80 text-sm">+234 800 000 0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-luxury" />
                <span className="text-background/80 text-sm">info@pamperme-lagos.com</span>
              </div>
            </div>
            
            <Button 
              size="sm"
              onClick={() => window.open("https://wa.me/2348000000000", "_blank")}
              className="bg-luxury hover:bg-luxury/90 text-luxury-foreground mt-4"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Pamper Me Mobile + In-Spa Massage Services. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <button 
                className="text-background/60 hover:text-luxury transition-spa"
                onClick={() => scrollToSection("#contact")}
              >
                Privacy Policy
              </button>
              <span className="text-background/40">•</span>
              <button 
                className="text-background/60 hover:text-luxury transition-spa"
                onClick={() => scrollToSection("#contact")}
              >
                Terms of Service
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-background/20">
            <p className="text-background/60 text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-luxury" /> for wellness in Lagos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;