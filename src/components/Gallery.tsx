import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import spaHeroImage from "@/assets/spa-hero.jpg";
import mobileSpaImage from "@/assets/mobile-spa.jpg";
import spaTreatmentImage from "@/assets/spa-treatment.jpg";
import spaProductsImage from "@/assets/spa-products.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      image: spaHeroImage,
      title: "Luxury Spa Environment",
      description: "Serene treatment room with premium amenities"
    },
    {
      image: mobileSpaImage,
      title: "Mobile Spa Setup",
      description: "Professional spa equipment delivered to your space"
    },
    {
      image: spaTreatmentImage,
      title: "Expert Massage Therapy",
      description: "Licensed therapists providing therapeutic treatments"
    },
    {
      image: spaProductsImage,
      title: "Premium Spa Products",
      description: "High-quality oils and wellness accessories"
    }
  ];

  const testimonials = [
    {
      name: "Adunni Oladele",
      location: "Ikoyi, Lagos",
      rating: 5,
      comment: "Absolutely incredible service! The therapist was professional and the massage was exactly what I needed after a long week. The convenience of having it at my hotel was perfect."
    },
    {
      name: "Michael Johnson",
      location: "Victoria Island",
      rating: 5,
      comment: "Pamper Me transformed my business trip into a relaxing experience. The couples massage with my wife was romantic and therapeutic. Highly recommend!"
    },
    {
      name: "Kemi Adebayo",
      location: "Banana Island",
      rating: 5,
      comment: "The facial treatment was amazing! My skin feels refreshed and glowing. The mobile service made it so convenient - no travel stress, just pure relaxation."
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Gallery Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
            Experience Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our world of luxury wellness and see what makes our spa experience special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {galleryItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 shadow-card hover:shadow-luxury transition-spa">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-spa"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-spa">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-foreground mb-4">
            What Our Clients Say
          </h3>
          <p className="text-muted-foreground">
            Real experiences from our valued clients across Lagos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-border/50 shadow-card hover:shadow-spa transition-spa">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-luxury text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.location}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open("https://instagram.com/pamperme_lagos", "_blank")}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-spa"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View More on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;