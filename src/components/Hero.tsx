
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
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-purple-50 overflow-hidden min-h-[90vh] flex items-center">
      {/* Minimal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-purple-700 text-sm font-medium border border-purple-200/50 shadow-sm">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Trusted by 500+ Chiropractic Practices
              <Sparkles className="w-4 h-4 ml-2 text-purple-500" />
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Streamline Your Practice with{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  EChiroPartners
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Simplify patient management with EChiroPartners – the smart, cloud-based EMR for seamless workflows and better care.
              </p>
            </div>

            {/* Made by section */}
            <div>
              <p className="text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                Made by Chiropractors, For Chiropractors
              </p>
              <p className="text-sm text-gray-500 font-medium">
                Powered by Mynx Softwares
              </p>
            </div>

            {/* Benefits List - Clean Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-100/50 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/demo" className="flex items-center">
                  Get Personalized Demo
                  <Sparkles className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg h-auto rounded-xl border-2 border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300">
                <Link to="/features" className="flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust Indicators - Minimal */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-green-600">HIPAA COMPLIANT</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs font-bold text-blue-600">99.9% UPTIME</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative lg:order-2">
            <div className="relative">              
              {/* Main hero image - Updated to use the new promotional image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/9dafadf5-1367-46a1-a9c4-6cc368a0a14d.png" 
                  alt="EChiroPartners EMR Software - Streamline Your Practice with Modern Features" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
