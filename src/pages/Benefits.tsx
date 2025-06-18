
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Users, 
  CreditCard, 
  Shield, 
  Clock, 
  TrendingUp, 
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Benefits = () => {
  const platformBenefits = [
    {
      icon: Users,
      title: "Patient Management",
      description: "Complete patient records, appointment history, treatment plans, and communication tools all in one secure platform.",
      metrics: "Save 3+ hours daily"
    },
    {
      icon: CreditCard,
      title: "Integrated Billing",
      description: "Automated insurance claims, payment processing, and revenue cycle management with real-time tracking.",
      metrics: "Increase revenue by 25%"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Bank-level security, encrypted data storage, audit trails, and automatic compliance reporting.",
      metrics: "100% compliant"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Smart scheduling, automated reminders, streamlined workflows, and efficient documentation tools.",
      metrics: "Reduce admin time by 40%"
    },
    {
      icon: TrendingUp,
      title: "Practice Growth",
      description: "Analytics, reporting, performance insights, and tools to optimize your practice operations.",
      metrics: "Track key metrics"
    },
    {
      icon: Heart,
      title: "Patient Experience",
      description: "Modern patient portal, online booking, automated communications, and seamless care coordination.",
      metrics: "Improve satisfaction"
    }
  ];

  const features = [
    "Appointment Scheduling & Management",
    "SOAP Notes & Clinical Documentation",
    "Insurance & Billing Management",
    "Patient Portal & Communication",
    "Reporting & Analytics Dashboard",
    "Mobile Access & Cloud Storage",
    "Integration with Existing Systems",
    "24/7 Customer Support"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            One Complete Platform for Your 
            <span className="text-primary"> Chiropractic Practice</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Everything you need to manage patients, billing, compliance, and growth—all in one secure, 
            easy-to-use platform designed specifically for chiropractors.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-in">
            <CheckCircle className="w-4 h-4 mr-2" />
            Made by Chiropractors, For Chiropractors
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Chiropractors Choose EChiroPartners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform eliminates the need for multiple systems, 
              reducing complexity while increasing efficiency and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformBenefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover-scale group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <div className="text-sm font-semibold text-accent">{benefit.metrics}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Everything You Need in One Secure Platform
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stop juggling multiple systems, spreadsheets, and paper forms. EChiroPartners 
                integrates all aspects of your practice management into one powerful, 
                HIPAA-compliant platform that grows with your practice.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="hover-scale bg-gradient-to-r from-primary to-accent">
                <Link to="/demo" className="flex items-center">
                  See Platform Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
                  <h3 className="font-semibold text-foreground mb-2">Patient Dashboard</h3>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-3/4"></div>
                    <div className="h-2 bg-muted rounded w-1/2"></div>
                    <div className="h-2 bg-primary/20 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-foreground mb-2">Billing Overview</h3>
                  <div className="space-y-2">
                    <div className="h-2 bg-accent/20 rounded w-4/5"></div>
                    <div className="h-2 bg-muted rounded w-3/5"></div>
                    <div className="h-2 bg-muted rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Practice?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of chiropractors who have transformed their practices with our one-stop platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3 hover-scale">
              <Link to="/demo">Get Your Personal Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-3 bg-transparent border-white text-white hover:bg-white hover:text-primary hover-scale">
              <Link to="/features">Explore All Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
