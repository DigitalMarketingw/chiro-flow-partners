
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  FileText, 
  CreditCard, 
  Shield, 
  Cloud, 
  BarChart3,
  Star,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking with patient reminders and waitlist management."
    },
    {
      icon: FileText,
      title: "SOAP Notes",
      description: "Streamlined documentation with templates, voice-to-text, and clinical decision support."
    },
    {
      icon: CreditCard,
      title: "Integrated Billing",
      description: "Automated insurance claims, payment processing, and revenue cycle management."
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Bank-level security with encrypted data storage and audit trails."
    },
    {
      icon: Cloud,
      title: "Cloud Access",
      description: "Access your practice data securely from anywhere, on any device."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Real-time insights into practice performance and patient outcomes."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      practice: "Wellness Chiropractic Center",
      content: "EChiroPartners reduced our admin time by 50% and increased our revenue by 30%. The patient experience has never been better.",
      rating: 5
    },
    {
      name: "Dr. James Rodriguez",
      practice: "SpineHealth Clinic",
      content: "The transition was seamless and the support team was incredible. Our entire workflow is now streamlined and efficient.",
      rating: 5
    },
    {
      name: "Dr. Emily Chen",
      practice: "Active Life Chiropractic",
      content: "Finally, an EMR system designed specifically for chiropractors. It understands our unique needs and workflow.",
      rating: 5
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Run Your Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive EMR solution built specifically for chiropractic practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/features" className="flex items-center">
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Chiropractic Practices
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers are saying about EChiroPartners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.practice}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of chiropractors who have already made the switch to EChiroPartners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link to="/demo">Schedule Your Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
