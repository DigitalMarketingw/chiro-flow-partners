
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
    <section className="relative py-20 lg:py-32 bg-pattern overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full floating-element opacity-70"></div>
        <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full floating-element opacity-80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-purple/10 text-primary text-sm font-medium mb-8 animate-fade-in hover-bounce border border-primary/20">
            <CheckCircle className="w-5 h-5 mr-3 text-green-500 animate-pulse" />
            Trusted by 500+ Chiropractic Practices
            <Sparkles className="w-4 h-4 ml-3 text-yellow-500 animate-float" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight animate-fade-in">
            Your Complete{" "}
            <span className="relative inline-block">
              <span className="gradient-text-electric">Chiropractic EMR</span>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Zap className="w-8 h-8 text-yellow-500" />
              </div>
            </span>{" "}
            System
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed animate-stagger-1">
            Empower your practice with intuitive EMR software designed to streamline workflows, 
            increase revenue, and enhance patient care—all while ensuring complete HIPAA compliance.
          </p>

          <div className="text-center mb-10 animate-stagger-2">
            <p className="text-xl font-bold gradient-text-vibrant mb-2">
              Made by Chiropractors, For Chiropractors
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              By Mynx Softwares Inc.
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-stagger-3">
            {benefits.map((benefit, index) => (
              <div key={index} className={`flex items-center justify-center lg:justify-start space-x-3 hover-bounce animate-stagger-${(index % 4) + 1}`}>
                <div className="relative">
                  <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-stagger-4">
            <Button asChild size="lg" className="btn-electric hover-3d text-xl px-10 py-4 animate-shimmer">
              <Link to="/demo" className="relative">
                Get a Personalized Demo
                <Sparkles className="w-5 h-5 ml-3 animate-float" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-10 py-4 text-xl hover-glow border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 bg-white/50 backdrop-blur-sm">
              <Link to="/features" className="flex items-center">
                <div className="relative mr-3">
                  <Play className="w-6 h-6 animate-pulse" />
                  <div className="absolute inset-0 w-6 h-6 bg-primary/20 rounded-full animate-ping"></div>
                </div>
                Watch Overview
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-6 font-medium">
              Join practices already saving 40% on admin time
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-80">
              <div className="flex flex-col items-center space-y-2 hover-bounce">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-green-600">HIPAA COMPLIANT</div>
              </div>
              <div className="flex flex-col items-center space-y-2 hover-bounce">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-blue-600">SOC 2 CERTIFIED</div>
              </div>
              <div className="flex flex-col items-center space-y-2 hover-bounce">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-purple-600">99.9% UPTIME</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
