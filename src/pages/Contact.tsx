
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Phone, MapPin, Clock, Sparkles, Zap } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke('send-lead-email', {
        body: {
          ...data,
          type: 'contact'
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl floating-element"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full floating-element opacity-70"></div>
          <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-float opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-purple/10 text-primary text-sm font-medium mb-8 animate-fade-in hover-bounce border border-primary/20">
              <Sparkles className="w-5 h-5 mr-3 text-yellow-500 animate-float" />
              Get in Touch with Our Team
              <Zap className="w-4 h-4 ml-3 text-orange-500 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text-electric animate-fade-in">
              Contact EChiroPartners
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-stagger-1">
              Ready to transform your practice? Get in touch with our team for a personalized consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-vibrant animate-stagger-2 hover-3d">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center floating-element">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3">
                    Send us a message and we'll respond within 24 hours.
                  </p>
                  <div className="break-all">
                    <a 
                      href="mailto:digitalmar@actclinic.com" 
                      className="text-primary hover:text-primary/80 transition-colors text-sm sm:text-base font-medium story-link"
                    >
                      digitalmar@actclinic.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-vibrant animate-stagger-3 hover-3d">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center floating-element">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3">
                    Speak directly with our support team.
                  </p>
                  <p className="text-primary font-medium text-sm sm:text-base">
                    +1 (555) 123-4567
                  </p>
                </CardContent>
              </Card>

              <Card className="card-vibrant animate-stagger-4 hover-3d">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center floating-element">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p><span className="font-medium gradient-text">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
                    <p><span className="font-medium gradient-text">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
                    <p><span className="font-medium gradient-text">Sunday:</span> Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-glow animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl gradient-text-vibrant">Send us a Message</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="form-vibrant h-10 sm:h-11 text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="form-vibrant h-10 sm:h-11 text-sm sm:text-base overflow-hidden text-ellipsis"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="form-vibrant h-10 sm:h-11 text-sm sm:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">Practice/Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="ABC Chiropractic Clinic"
                          className="form-vibrant h-10 sm:h-11 text-sm sm:text-base overflow-hidden text-ellipsis"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your practice and how we can help..."
                        required
                        rows={4}
                        className="form-vibrant resize-none text-sm sm:text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-vibrant text-sm sm:text-base py-2 sm:py-3 h-auto hover-bounce"
                    >
                      {isSubmitting ? (
                        <div className="loading-dots flex items-center justify-center gap-1">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
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
