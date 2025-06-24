
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Play, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const benefits = [
    "HIPAA Compliant & Secure",
    "Cloud-Based Access Anywhere",
    "Streamlined Billing & Payments",
    "20+ Years Healthcare Experience"
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-green-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-purple/10 text-primary text-sm font-medium animate-fade-in hover-bounce border border-primary/20">
              <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
              Trusted by 500+ Chiropractic Practices
              <Sparkles className="w-4 h-4 ml-3 text-yellow-500" />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                Your Complete{" "}
                <span className="relative inline-block">
                  <span className="gradient-text-electric">Chiropractic EMR</span>
                  <div className="absolute -top-2 -right-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                  </div>
                </span>{" "}
                System
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-stagger-1">
                Empower your practice with intuitive EMR software designed to streamline workflows, 
                increase revenue, and enhance patient care—all while ensuring complete HIPAA compliance.
              </p>
            </div>

            {/* Made by section */}
            <div className="animate-stagger-2">
              <p className="text-lg font-bold gradient-text-vibrant mb-1">
                Made by Chiropractors, For Chiropractors
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                By Mynx Softwares Inc.
              </p>
            </div>

            {/* Benefits List - Compact */}
            <div className="grid grid-cols-2 gap-3 animate-stagger-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-stagger-4">
              <Button asChild size="lg" className="btn-electric hover-3d text-lg px-8 py-3">
                <Link to="/demo" className="flex items-center">
                  Get a Personalized Demo
                  <Sparkles className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg hover-glow border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                <Link to="/features" className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Overview
                </Link>
              </Button>
            </div>

            {/* Trust Indicators - Minimal */}
            <div className="flex items-center space-x-6 pt-4 animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-green-600">HIPAA COMPLIANT</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-blue-600">SOC 2 CERTIFIED</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-purple-600">99.9% UPTIME</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:order-2 animate-scale-in">
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
              
              {/* Main hero image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-3d transition-transform duration-500">
                <img 
                  src="/lovable-uploads/fa74de51-446a-4db4-8f8c-6d6446efdc37.png" 
                  alt="EChiroPartners EMR Software Dashboard" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/20 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">Live Demo Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
