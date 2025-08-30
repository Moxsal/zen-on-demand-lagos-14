import { Shield, Award, CheckCircle, Heart, Users, Star } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed massage therapy practice"
    },
    {
      icon: Award,
      title: "Certified Therapists",
      description: "Professional massage therapy certifications"
    },
    {
      icon: CheckCircle,
      title: "Hygiene Protocols",
      description: "Strict sanitation and safety standards"
    },
    {
      icon: Heart,
      title: "5-Star Rated",
      description: "Top-rated wellness service provider"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Trusted by clients across Lagos"
    },
    {
      icon: Star,
      title: "Premium Equipment",
      description: "High-quality massage tools & products"
    }
  ];

  return (
    <section className="py-12 bg-sage/5 border-t border-sage/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
            Your Wellness & Safety is Our Priority
          </h3>
          <p className="text-muted-foreground">
            Professional standards you can trust
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="text-center group">
                <div className="p-4 rounded-2xl bg-primary/10 inline-flex mb-3 group-hover:bg-primary/20 transition-spa">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-tight">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;