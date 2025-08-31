import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    location: "",
    message: ""
  });

  const services = [
    "Swedish Massage (60-90 min)",
    "Deep Tissue Massage (60-90 min)",
    "Couples Massage (60-90 min)",
    "Hot Stone Therapy (75-90 min)",
    "Aromatherapy Massage (60-75 min)",
    "Facial & Skincare (45-60 min)",
    "Package Deal (Please specify in message)"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.service || !formData.date) {
      toast({
        title: "Please fill in required fields",
        description: "Name, phone, service, and date are required.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hello Pamper Me! I'd like to book an appointment:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Location: ${formData.location}
Additional Notes: ${formData.message}

Please confirm availability. Thank you!`;

    const whatsappUrl = `https://wa.me/2348025488808?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Booking request sent!",
      description: "We'll confirm your appointment via WhatsApp shortly.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="book" className="py-20 bg-gradient-spa">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
            Book Your Spa Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your personalized wellness session. We'll confirm availability and coordinate all details.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-spa border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("tel:+2348025488808", "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call: +234 802 548 8808
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("https://wa.me/2348025488808", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("mailto:modelshub306@gmail.com", "_self")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-spa border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="w-5 h-5 mr-2" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Maison 55 Hotel<br />
                  Adebisi Omotola Street<br />
                  Iru, Victoria Island<br />
                  Lagos, Nigeria
                </p>
                <p className="text-sm text-primary mt-2 font-medium">
                  + Mobile services across Lagos zones
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-luxury border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Appointment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service *</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Maison 55 Hotel / Your address for mobile service"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requests</Label>
                    <Textarea
                      id="message"
                      placeholder="Any specific needs, preferences, or questions..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-spa transition-spa"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Booking Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll confirm your booking via WhatsApp within 2 hours during business hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;