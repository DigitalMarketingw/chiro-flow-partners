
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
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated appointment booking with patient reminders and waitlist management.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      title: "SOAP Notes",
      description: "Streamlined documentation with templates, voice-to-text, and clinical decision support.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CreditCard,
      title: "Integrated Billing",
      description: "Automated insurance claims, payment processing, and revenue cycle management.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Bank-level security with encrypted data storage and audit trails.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cloud,
      title: "Cloud Access",
      description: "Access your practice data securely from anywhere, on any device.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Real-time insights into practice performance and patient outcomes.",
      color: "from-teal-500 to-green-500"
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
      
      {/* Software Showcase - Analytics Dashboard */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 bg-pattern overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl floating-element"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 text-sm font-medium mb-6 animate-fade-in hover-bounce border border-blue-500/20">
                <BarChart3 className="w-5 h-5 mr-3 animate-pulse" />
                Advanced Analytics
                <TrendingUp className="w-4 h-4 ml-3 text-green-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text-electric animate-stagger-1">
                Powerful Analytics & Reporting Dashboard
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-stagger-2">
                Get real-time insights into your practice performance with comprehensive charts, 
                patient analytics, and revenue tracking - all in one intuitive dashboard.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 animate-stagger-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Interactive charts and graphs</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Patient outcome tracking</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Revenue and billing insights</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/1b53751f-ea2f-46ac-927b-665a9ee89b31.png" 
                alt="EChiroPartners Analytics Dashboard" 
                className="relative w-full rounded-xl shadow-2xl hover-3d"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Software Showcase - Billing System */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 bg-pattern overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full blur-2xl floating-element"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/c858e7dd-1ec8-449d-a097-ebd74cde98b3.png" 
                alt="EChiroPartners Billing System" 
                className="relative w-full rounded-xl shadow-2xl hover-3d"
              />
            </div>
            <div className="animate-fade-in lg:order-2">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-600 text-sm font-medium mb-6 animate-fade-in hover-bounce border border-emerald-500/20">
                <CreditCard className="w-5 h-5 mr-3 animate-pulse" />
                Integrated Billing
                <Sparkles className="w-4 h-4 ml-3 text-yellow-500 animate-float" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text-electric animate-stagger-1">
                Complete Billing & Revenue Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-stagger-2">
                Streamline your billing process with automated claims processing, 
                insurance verification, and comprehensive payment tracking.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 animate-stagger-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Automated insurance claims</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Real-time payment processing</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Detailed billing summaries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Showcase - SOAP Notes */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 bg-pattern overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl floating-element"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 text-sm font-medium mb-6 animate-fade-in hover-bounce border border-purple-500/20">
                <FileText className="w-5 h-5 mr-3 animate-pulse" />
                Smart Documentation
                <Sparkles className="w-4 h-4 ml-3 text-yellow-500 animate-float" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text-electric animate-stagger-1">
                Intelligent SOAP Notes & Patient Records
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-stagger-2">
                Create comprehensive patient documentation with smart templates, 
                voice-to-text capability, and integrated clinical decision support.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 animate-stagger-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Pre-built chiropractic templates</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Voice-to-text documentation</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Clinical decision support</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/a19ec675-7827-44cc-8768-30443e79087e.png" 
                alt="EChiroPartners SOAP Notes System" 
                className="relative w-full rounded-xl shadow-2xl hover-3d"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Software Showcase - AI Integration */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 bg-pattern overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl floating-element"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/39a06db7-ff29-427e-8970-b90e9325a00d.png" 
                alt="EChiroPartners AI Integration" 
                className="relative w-full rounded-xl shadow-2xl hover-3d"
              />
            </div>
            <div className="animate-fade-in lg:order-2">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 text-sm font-medium mb-6 animate-fade-in hover-bounce border border-cyan-500/20">
                <Brain className="w-5 h-5 mr-3 animate-pulse" />
                AI-Powered Features
                <Zap className="w-4 h-4 ml-3 text-orange-500 animate-pulse" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 gradient-text-electric animate-stagger-1">
                AI-Enhanced Practice Management
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-stagger-2">
                Experience the future of chiropractic care with AI-powered scheduling, 
                automated documentation, and intelligent patient management systems.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 animate-stagger-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">AI-powered scheduling optimization</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Automated patient reminders</span>
                </div>
                <div className="flex items-center space-x-3 animate-stagger-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Intelligent workflow automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-2xl floating-element"></div>
          
          {/* Floating particles */}
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float opacity-60"></div>
          <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full floating-element opacity-70"></div>
          <div className="absolute top-1/2 left-10 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-float opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-purple/10 text-primary text-sm font-medium mb-8 animate-fade-in hover-bounce border border-primary/20">
              <Sparkles className="w-5 h-5 mr-3 text-yellow-500 animate-float" />
              Complete Practice Management
              <Zap className="w-4 h-4 ml-3 text-orange-500 animate-pulse" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text-electric animate-fade-in">
              Everything You Need to Run Your Practice
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-stagger-1">
              Comprehensive EMR solution built specifically for chiropractic practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`card-glow hover-3d animate-stagger-${Math.min(index % 4 + 1, 4)}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 floating-element animate-pulse-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-vibrant hover-bounce">
              <Link to="/features" className="flex items-center">
                Explore All Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gradient-vibrant overflow-hidden animate-gradient-shift">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl floating-element"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/20 rounded-full animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in">
              Trusted by Leading Chiropractic Practices
            </h2>
            <p className="text-xl text-white/90 animate-stagger-1">
              See what our customers are saying about EChiroPartners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`bg-white/10 backdrop-blur-sm border border-white/20 hover-scale animate-stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/70">{testimonial.practice}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-accent to-purple-600 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full floating-element"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-stagger-1">
            Join hundreds of chiropractors who have already made the switch to EChiroPartners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-electric hover-3d animate-stagger-2">
              <Link to="/demo">Schedule Your Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm hover-bounce animate-stagger-3">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
