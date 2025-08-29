import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Swedish Massage",
      description: "Gentle, relaxing full-body massage to reduce stress and improve circulation",
      duration: "60-90 minutes",
      price: "From ₦25,000",
      popular: true,
      icon: Heart,
    },
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting muscle tension and chronic pain relief",
      duration: "60-90 minutes", 
      price: "From ₦30,000",
      popular: false,
      icon: Star,
    },
    {
      title: "Couples Massage",
      description: "Romantic spa experience for two with synchronized massage therapy",
      duration: "60-90 minutes",
      price: "From ₦45,000",
      popular: true,
      icon: Users,
    },
    {
      title: "Hot Stone Therapy",
      description: "Heated stone massage for deep relaxation and muscle tension relief",
      duration: "75-90 minutes",
      price: "From ₦35,000",
      popular: false,
      icon: Heart,
    },
    {
      title: "Aromatherapy Massage",
      description: "Essential oil massage combining therapeutic benefits with relaxation",
      duration: "60-75 minutes",
      price: "From ₦28,000",
      popular: false,
      icon: Heart,
    },
    {
      title: "Facial & Skincare",
      description: "Professional facial treatments for healthy, glowing skin",
      duration: "45-60 minutes",
      price: "From ₦20,000",
      popular: true,
      icon: Star,
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector("#book");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
            Our Wellness Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of professional spa treatments, all delivered with premium equipment and expert care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="relative group hover:shadow-luxury transition-spa cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-4 bg-luxury text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-playfair text-foreground group-hover:text-primary transition-spa">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">
                      {service.price}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={scrollToBooking}
                      className="hover:bg-primary hover:text-primary-foreground transition-spa"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Package Deals */}
        <div className="mt-16 bg-gradient-luxury rounded-2xl p-8 text-center shadow-luxury">
          <h3 className="text-2xl font-playfair font-semibold text-luxury-foreground mb-4">
            Special Packages Available
          </h3>
          <p className="text-luxury-foreground/80 mb-6 max-w-2xl mx-auto">
            Save up to 20% with our wellness packages. Perfect for regular self-care or special occasions.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToBooking}
            className="bg-background hover:bg-background/90 text-foreground border-0 shadow-spa"
          >
            View Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;