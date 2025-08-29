import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/spa-hero.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold text-foreground mb-6 leading-tight">
            Luxury Spa Experiences
            <span className="block text-primary">Delivered to Your Doorstep</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience premium mobile spa and in-hotel massage services across Lagos. 
            Professional wellness treatments in the comfort of your space.
          </p>

          {/* Location Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-spa">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Victoria Island, Lagos • Mobile Services Available</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-spa transition-spa"
              onClick={() => scrollToSection("#book")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Session
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-spa transition-spa"
              onClick={() => window.open("https://wa.me/2348000000000", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-luxury rounded-full"></div>
              <span>Licensed Therapists</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-luxury rounded-full"></div>
              <span>Hotel Partnership</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-luxury rounded-full"></div>
              <span>Premium Equipment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sage/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-luxury/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;