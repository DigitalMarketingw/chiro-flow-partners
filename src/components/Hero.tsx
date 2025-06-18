
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Play } from "lucide-react";

const Hero = () => {
  const benefits = [
    "HIPAA Compliant & Secure",
    "Cloud-Based Access Anywhere",
    "Streamlined Billing & Payments",
    "20+ Years Healthcare Experience"
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <CheckCircle className="w-4 h-4 mr-2" />
            Trusted by 500+ Chiropractic Practices
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
            Your Complete 
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Chiropractic EMR</span> System
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Empower your practice with intuitive EMR software designed to streamline workflows, 
            increase revenue, and enhance patient care—all while ensuring complete HIPAA compliance.
          </p>

          <div className="text-center mb-8 animate-fade-in">
            <p className="text-lg font-semibold text-accent mb-2">
              Made by Chiropractors, For Chiropractors
            </p>
            <p className="text-sm text-muted-foreground">
              By Mynx Softwares Inc.
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-fade-in">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center lg:justify-start space-x-2 hover-scale">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button asChild size="lg" className="px-8 py-3 text-lg hover-scale bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300">
              <Link to="/demo">Get a Personalized Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg hover-scale border-primary/20 hover:border-primary/40 transition-all duration-300">
              <Link to="/features" className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Overview
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center animate-fade-in">
            <p className="text-sm text-muted-foreground mb-4">
              Join practices already saving 40% on admin time
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-xs font-medium">HIPAA COMPLIANT</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-medium">SOC 2 CERTIFIED</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-medium">99.9% UPTIME</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
