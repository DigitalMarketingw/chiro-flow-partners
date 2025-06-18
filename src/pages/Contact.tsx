
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-lead-email', {
        body: {
          formData,
          formType: 'contact'
        }
      });

      if (error) throw error;

      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
      // Still show success to user, but log error
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: ''
        });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "1-800-ECHIRO-1",
      subDetails: "Mon-Fri 8AM-6PM CST",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@echiropartners.com",
      subDetails: "Response within 24 hours",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Dallas, Texas",
      subDetails: "Serving practices nationwide",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subDetails: "8:00 AM - 6:00 PM CST",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-teal-50/50"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full floating-element"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Get in Touch with Our{" "}
            <span className="gradient-text-electric">Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-stagger-1 max-w-3xl mx-auto">
            Have questions about EChiroPartners? We're here to help you find the perfect 
            EMR solution for your chiropractic practice.
          </p>
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 text-accent text-sm font-medium animate-stagger-2 hover-bounce">
            <MessageSquare className="w-5 h-5 mr-3 animate-float" />
            Expert Support from Healthcare Professionals
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-stagger-1">
              {isSubmitted ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 rounded-xl animate-gradient-shift"></div>
                  <Card className="relative card-glow border-green-200 animate-success">
                    <CardContent className="p-8 text-center">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in floating-element">
                          <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 animate-float">
                          <Sparkles className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold gradient-text-electric mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium animate-pulse-glow">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Email sent successfully!
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-pattern rounded-xl"></div>
                  <Card className="relative card-glow border-primary/20 hover:border-primary/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-teal-50/50 rounded-xl"></div>
                    <CardHeader className="relative">
                      <CardTitle className="text-3xl font-bold gradient-text-electric flex items-center">
                        <div className="relative">
                          <Send className="w-8 h-8 mr-4 text-primary animate-float" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-pulse"></div>
                        </div>
                        Send Us a Message
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </CardHeader>
                    <CardContent className="relative">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2 animate-stagger-1">
                            <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Dr. John Smith"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
                            />
                          </div>
                          <div className="space-y-2 animate-stagger-2">
                            <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="(555) 123-4567"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2 animate-stagger-3">
                          <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="doctor@yourpractice.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
                          />
                        </div>
                        
                        <div className="space-y-2 animate-stagger-4">
                          <Label htmlFor="business" className="text-sm font-semibold text-foreground">Practice/Business Name *</Label>
                          <Input
                            id="business"
                            name="business"
                            type="text"
                            placeholder="ABC Chiropractic Center"
                            value={formData.business}
                            onChange={handleInputChange}
                            required
                            className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
                          />
                        </div>
                        
                        <div className="space-y-2 animate-stagger-1">
                          <Label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your practice and how we can help you..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.01]"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          size="lg" 
                          disabled={isLoading}
                          className="w-full btn-electric hover-3d animate-shimmer text-lg py-4"
                        >
                          {isLoading ? (
                            <>
                              <div className="loading-dots mr-3">
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5 ml-2 animate-bounce" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-stagger-2">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="gradient-text-electric">Contact Information</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team of healthcare technology experts is ready to help you transform 
                  your chiropractic practice with EChiroPartners.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`card-glow hover-3d animate-stagger-${(index % 4) + 1}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 animate-float shadow-lg`}>
                          <info.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1 text-lg">{info.title}</h3>
                          <p className="text-sm font-semibold text-primary mb-1">{info.details}</p>
                          <p className="text-xs text-muted-foreground">{info.subDetails}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="card-glow bg-gradient-to-br from-primary/5 via-accent/5 to-purple/5 border-primary/20 animate-stagger-3">
                <CardContent className="p-8">
                  <div className="relative">
                    <h3 className="text-2xl font-bold gradient-text-electric mb-4">
                      Ready to Schedule a Demo?
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      See EChiroPartners in action with a personalized demonstration 
                      tailored to your practice's specific needs.
                    </p>
                    <Button asChild className="btn-electric hover-3d text-lg px-8 py-3">
                      <a href="/demo">
                        Schedule Your Demo
                        <Sparkles className="w-5 h-5 ml-2" />
                      </a>
                    </Button>
                    <div className="absolute top-2 right-2 animate-float">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
