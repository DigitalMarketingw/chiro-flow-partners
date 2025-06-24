
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered appointment scheduling with automated reminders and conflict resolution."
    },
    {
      icon: Users,
      title: "Patient Management", 
      description: "Comprehensive patient records with treatment history and progress tracking."
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Paperless documentation with e-signatures and secure cloud storage."
    },
    {
      icon: DollarSign,
      title: "Billing & Insurance",
      description: "Automated billing, insurance claims processing, and payment tracking."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into practice performance and patient outcomes."
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Built-in security measures ensuring full HIPAA compliance and data protection."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      practice: "Wellness Chiropractic Center",
      content: "EChiroPartners transformed our practice. We've seen a 40% increase in efficiency and our patients love the new system.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen", 
      practice: "Advanced Spine Care",
      content: "The automation features have saved us countless hours. We can focus on what matters most - our patients.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl floating-element"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full floating-element opacity-70"></div>
          <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-gradient-to-r from-primary to-accent rounded-full animate-float opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 animate-bounce-in">
              <Sparkles className="w-4 h-4 mr-2 animate-float" />
              Made By Chiropractors, For Chiropractors
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Modern EMR for
              <span className="gradient-text-electric block mt-2">Chiropractic Practices</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-stagger-1">
              Streamline your practice with our comprehensive practice management solution 
              designed specifically for chiropractors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-stagger-2">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover-bounce text-lg px-8 py-4 h-auto">
                <Link to="/demo" className="flex items-center">
                  Get Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale text-lg px-8 py-4 h-auto border-primary/20">
                <Link to="/features">View Features</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-stagger-3">
              <div className="text-center hover-bounce">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Practices</div>
              </div>
              <div className="text-center hover-bounce">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center hover-bounce">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center hover-bounce">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 animate-bounce-in">
              <Target className="w-4 h-4 mr-2 animate-pulse" />
              Comprehensive Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-electric animate-fade-in">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-stagger-1">
              Streamline your practice with our all-in-one solution designed specifically for chiropractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className={`card-glow hover-3d animate-stagger-${Math.min(index + 1, 4)}`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 floating-element">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="gradient-text">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 animate-bounce-in">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Proven Results
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-vibrant animate-fade-in">
              Transform Your Practice Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-stagger-1">
              Join thousands of chiropractors who have revolutionized their practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-vibrant hover-3d animate-stagger-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-element animate-pulse-glow">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">35% Revenue Increase</h3>
                <p className="text-muted-foreground">Streamlined operations lead to significant growth</p>
              </CardContent>
            </Card>

            <Card className="card-vibrant hover-3d animate-stagger-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-element animate-pulse-glow">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">15+ Hours Saved</h3>
                <p className="text-muted-foreground">Per week through automation and efficiency</p>
              </CardContent>
            </Card>

            <Card className="card-vibrant hover-3d animate-stagger-3">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-element animate-pulse-glow">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">100% Compliant</h3>
                <p className="text-muted-foreground">Full HIPAA compliance and security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-electric animate-fade-in">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground animate-stagger-1">
              Real results from real chiropractors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className={`card-vibrant hover-scale animate-stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 text-lg italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold gradient-text text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.practice}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="card-vibrant animate-scale-in">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-electric">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the revolution and start seeing results from day one. Schedule your personalized demo today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover-bounce text-lg px-8 py-4 h-auto">
                  <Link to="/demo" className="flex items-center">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover-scale text-lg px-8 py-4 h-auto border-primary/20">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
