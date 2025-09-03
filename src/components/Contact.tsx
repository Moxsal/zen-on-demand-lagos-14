import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Star } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: ["+234901 661 6251"],
      action: () => window.open("tel:+2349016616251", "_self"),
      actionText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["modelshub306@gmail.com"],
      action: () => window.open("mailto:modelshub306@gmail.com", "_self"),
      actionText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Maison 55 Hotel",
        "Adebisi Omotola Street",
        "Iru, Victoria Island, Lagos"
      ],
      action: () => window.open("https://maps.google.com/?q=Maison+55+Hotel+Victoria+Island+Lagos", "_blank"),
      actionText: "View Map"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Monday - Sunday: 9:00 AM - 10:00 PM",
        "Same-day bookings available"
      ],
      action: () => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" }),
      actionText: "Book Now"
    }
  ];

  const serviceAreas = [
    "Victoria Island", "Ikoyi", "Banana Island", "Lekki Phase 1",
    "Oniru", "Eko Atlantic", "Ikeja GRA", "Yaba"
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury wellness? Contact us to schedule your appointment or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="text-center shadow-card hover:shadow-spa transition-spa border-border/50">
                <CardHeader className="pb-4">
                  <div className="bg-sage/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-playfair text-foreground">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={info.action}
                    className="hover:bg-primary hover:text-primary-foreground transition-spa"
                  >
                    {info.actionText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
              Mobile Service Areas
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We provide mobile spa services across select Lagos zones. Our professional therapists 
              will bring everything needed for your wellness experience directly to your location.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-luxury rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground italic">
              Additional areas available upon request. Travel charges may apply for locations outside our standard zones.
            </p>
          </div>

          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-luxury border-border/50 bg-gradient-sage">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-playfair font-semibold text-sage-foreground mb-4">
                  Ready to Relax?
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1 bg-background hover:bg-background/90 text-foreground shadow-spa"
                    onClick={() => window.open("https://wa.me/2349016616251", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-sage-foreground text-sage-foreground hover:bg-sage-foreground hover:text-sage"
                    onClick={() => document.querySelector("#book")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Book Online
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Google Business */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-playfair font-semibold text-foreground mb-3">
                  Find Us on Google
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Visit our Google Business page for reviews and directions
                </p>
                <Button 
                  variant="outline" 
                  className="hover:bg-primary hover:text-primary-foreground transition-spa"
                  onClick={() => window.open("https://share.google/v8dxZEziHB4WqScmx", "_blank")}
                >
                  <Star className="w-4 h-4 mr-2" />
                  Google Business
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;