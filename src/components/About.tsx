import { Card, CardContent } from "@/components/ui/card";
import { Shield, MapPin, Clock, Users } from "lucide-react";
import mobileSpaImage from "@/assets/mobile-spa.jpg";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Mobile & In-Hotel",
      description: "Professional spa services at Maison 55 Hotel or delivered to your location across Lagos"
    },
    {
      icon: Shield,
      title: "Licensed Professionals",
      description: "Certified massage therapists with years of experience in luxury wellness"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "7 days a week availability with same-day appointments when possible"
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Customized treatments tailored to your specific wellness needs and preferences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-6">
              Bringing Luxury Wellness to Your Space
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pamper Me Mobile + In-Spa Massage Services offers premier wellness experiences 
              across Lagos. Based at the luxurious Maison 55 Hotel in Victoria Island, we 
              bring professional spa treatments directly to you, ensuring convenience without 
              compromising on quality.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission is to make premium wellness accessible and convenient. Whether you're 
              staying at our partner hotel or need mobile services at your location, our certified 
              therapists deliver exceptional care using professional-grade equipment and premium products.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-sage/20 p-2 rounded-lg flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={mobileSpaImage} 
                alt="Mobile spa setup in luxury hotel room"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm shadow-spa border-border/50">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;