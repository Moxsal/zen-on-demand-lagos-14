import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Zap, Shield, Baby, Footprints, Sparkles, HandHeart, Users2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Swedish Massage",
      description: "Gentle, relaxing full-body massage using smooth, flowing strokes to promote deep relaxation and overall wellness",
      benefits: ["Stress relief", "Improved sleep", "Mood boost", "Immune support"],
      popular: true,
      icon: Heart,
    },
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting deeper muscle layers to address chronic tension and promote healing",
      benefits: ["Pain relief", "Recovery support", "Improved mobility", "Reduced muscle tension"],
      popular: false,
      icon: Zap,
    },
    {
      title: "Hot Stone Massage",
      description: "Heated volcanic stones combined with massage therapy for ultimate relaxation and muscle relief",
      benefits: ["Deep relaxation", "Better circulation", "Reduced anxiety", "Eased stiffness"],
      popular: false,
      icon: Shield,
    },
    {
      title: "Aromatherapy Massage",
      description: "Essential oil-infused massage therapy that harmonizes mind, body, and spirit for holistic wellness",
      benefits: ["Emotional balance", "Stress reduction", "Energy boost", "Improved breathing"],
      popular: false,
      icon: Brain,
    },
    {
      title: "Prenatal Massage",
      description: "Specialized gentle massage designed specifically for expecting mothers' comfort and wellness",
      benefits: ["Back pain relief", "Reduced swelling", "Better circulation", "Improved sleep"],
      popular: true,
      icon: Baby,
    },
    {
      title: "Reflexology (Foot Massage)",
      description: "Therapeutic foot massage focusing on pressure points to promote whole-body wellness and balance",
      benefits: ["Energy flow balance", "Nervous system support", "Digestion aid", "Stress relief"],
      popular: false,
      icon: Footprints,
    },
    {
      title: "Facials & Skin Care Treatments",
      description: "Professional facial treatments using premium products for radiant, healthy-looking skin",
      benefits: ["Hydration", "Anti-aging", "Improved tone", "Refreshed skin"],
      popular: true,
      icon: Sparkles,
    },
    {
      title: "Manicure & Pedicure Spa Treatments",
      description: "Complete hand and foot care treatments combining beauty and therapeutic wellness benefits",
      benefits: ["Circulation boost", "Tension relief", "Improved appearance", "Relaxation"],
      popular: false,
      icon: HandHeart,
    },
    {
      title: "Couples & Group Packages",
      description: "Shared wellness experiences designed for couples, friends, or family bonding and relaxation",
      benefits: ["Bonding", "Shared relaxation", "Memorable experience", "Group wellness"],
      popular: true,
      icon: Users2,
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
                className="relative group hover:shadow-luxury transition-spa border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-4 bg-gradient-luxury text-luxury-foreground px-3 py-1 rounded-full text-sm font-medium shadow-spa z-10">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 mr-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-playfair text-foreground group-hover:text-primary transition-spa">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Health Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <Badge 
                          key={benefitIndex}
                          variant="secondary" 
                          className="text-xs bg-sage/20 text-sage-foreground border-sage/30 hover:bg-sage/30 transition-spa"
                        >
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button 
                    onClick={scrollToBooking}
                    className="w-full bg-gradient-sage hover:opacity-90 transition-spa shadow-spa"
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Wellness Commitment & Certifications */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-luxury rounded-2xl p-8 text-center shadow-luxury">
            <h3 className="text-2xl font-playfair font-semibold text-luxury-foreground mb-4">
              Custom Wellness Packages
            </h3>
            <p className="text-luxury-foreground/80 mb-6">
              Personalized treatment combinations designed for your specific wellness goals and health needs.
            </p>
            <Button 
              onClick={scrollToBooking}
              className="bg-background hover:bg-background/90 text-foreground border-0 shadow-spa"
            >
              Create My Package
            </Button>
          </div>
          
          <div className="bg-sage/10 border border-sage/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
              Professional Standards
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Licensed & Certified Therapists
              </p>
              <p className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Premium Equipment & Products
              </p>
              <p className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Strict Hygiene Protocols
              </p>
            </div>
            <Button 
              variant="outline"
              onClick={scrollToBooking}
              className="mt-4 border-sage/30 hover:bg-sage/20 transition-spa"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;