
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

const WhySwitch = () => {
  const switchReasons = [
    {
      icon: TrendingUp,
      title: "Increase Revenue by 35%",
      description: "Modern EMR systems help practices see significant revenue growth through improved efficiency.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Save 15+ Hours Weekly",
      description: "Automation eliminates repetitive administrative tasks, giving you more time for patient care.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      description: "Lower administrative overhead, reduced errors, and improved billing efficiency.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl floating-element"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full floating-element opacity-70"></div>
          <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-float opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-purple/10 text-primary text-sm font-medium mb-8 animate-fade-in hover-bounce border border-primary/20">
            <Target className="w-5 h-5 mr-3 text-green-500 animate-pulse" />
            Why Make the Switch?
            <Sparkles className="w-4 h-4 ml-3 text-yellow-500 animate-float" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text-electric animate-fade-in">
            Why Switch to EChiroPartners
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-stagger-1">
            Discover the compelling reasons to upgrade from outdated systems and manual processes 
            to a modern, efficient EMR solution designed for chiropractors.
          </p>

          {/* Key Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {switchReasons.map((reason, index) => (
              <Card key={reason.title} className={`card-glow hover-3d animate-stagger-${index + 1}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${reason.color} flex items-center justify-center mb-4 floating-element animate-pulse-glow`}>
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <Card className="card-vibrant animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center floating-element">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 gradient-text-vibrant">
                More Resources Coming Soon
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                We're preparing comprehensive comparison charts, ROI calculators, 
                and detailed migration support information to help you make an informed decision.
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-6">
                <Zap className="w-4 h-4 text-primary animate-pulse" />
                <span>Comparison vs. Paper/Manual Methods</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-6">
                <Sparkles className="w-4 h-4 text-accent animate-float" />
                <span>ROI Calculator & Financial Benefits</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8">
                <Target className="w-4 h-4 text-green-500 animate-pulse" />
                <span>Migration Support & Training Resources</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-vibrant hover-bounce">
                  <Link to="/demo" className="flex items-center">
                    Schedule Your Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="hover-scale">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhySwitch;
