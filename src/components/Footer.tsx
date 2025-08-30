import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook, Heart, MessageCircle } from "lucide-react";

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
    "Swedish Massage Therapy",
    "Deep Tissue & Pain Relief", 
    "Prenatal Massage Care",
    "Hot Stone Therapy",
    "Aromatherapy Wellness",
    "Reflexology & Foot Care",
    "Facials & Skincare",
    "Couples & Group Sessions"
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-semibold">
              Pamper Me Luxury Massage Spa
            </h3>
            <p className="text-background/80 leading-relaxed">
              Licensed massage therapists delivering professional wellness and therapeutic massage services across Lagos. Your health and relaxation are our priority.
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
                <span className="text-background/80 text-sm">901 661 6251</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-luxury" />
                <span className="text-background/80 text-sm">info@pamperme-lagos.com</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 mt-4">
              <Button 
                size="sm"
                onClick={() => window.open("tel:+19016616251", "_self")}
                className="bg-luxury hover:bg-luxury/90 text-luxury-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button 
                size="sm"
                onClick={() => window.open("https://wa.me/19016616251", "_blank")}
                className="bg-luxury hover:bg-luxury/90 text-luxury-foreground"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <h5 className="text-luxury font-semibold">Licensed Professionals</h5>
              <p className="text-background/70 text-sm">Certified massage therapists with years of experience</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-luxury font-semibold">Safe & Hygienic</h5>
              <p className="text-background/70 text-sm">Strict sanitization protocols for your safety</p>
            </div>
            <div className="space-y-2">
              <h5 className="text-luxury font-semibold">Satisfaction Guaranteed</h5>
              <p className="text-background/70 text-sm">100% satisfaction or money-back guarantee</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Pamper Me Luxury Massage Spa. All rights reserved. | Licensed Wellness Provider
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
              <span className="text-background/40">•</span>
              <button 
                className="text-background/60 hover:text-luxury transition-spa"
                onClick={() => scrollToSection("#contact")}
              >
                Health Disclaimer
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-background/20">
            <p className="text-background/60 text-sm flex items-center justify-center">
              Promoting wellness and therapeutic healing <Heart className="w-4 h-4 mx-1 text-luxury" /> in Lagos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;