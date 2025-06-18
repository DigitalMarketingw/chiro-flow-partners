
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Clock, 
  Users, 
  Shield, 
  Heart,
  DollarSign,
  Smartphone,
  BarChart3,
  CheckCircle,
  Star,
  Target,
  Lightbulb
} from "lucide-react";

const Benefits = () => {
  const primaryBenefits = [
    {
      icon: TrendingUp,
      title: "Increase Revenue by 35%",
      description: "Streamlined operations and reduced administrative overhead lead to significant revenue growth.",
      stats: ["35% revenue increase", "50% faster billing", "25% more patients served"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Save 15+ Hours Weekly",
      description: "Automation eliminates repetitive tasks, giving you more time for patient care.",
      stats: ["15 hours saved per week", "80% less paperwork", "Instant data access"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Improve Patient Satisfaction",
      description: "Better communication and streamlined processes lead to happier patients.",
      stats: ["95% patient satisfaction", "40% fewer no-shows", "Faster check-ins"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Ensure Complete Compliance",
      description: "Built-in HIPAA compliance and security measures protect your practice.",
      stats: ["100% HIPAA compliant", "Bank-level security", "Automated compliance reports"],
      color: "from-red-500 to-orange-500"
    }
  ];

  const additionalBenefits = [
    {
      icon: Heart,
      title: "Better Patient Care",
      description: "More time with patients, comprehensive records, and improved treatment tracking.",
      metrics: "90% improvement in care quality"
    },
    {
      icon: DollarSign,
      title: "Reduced Operational Costs",
      description: "Lower administrative costs, reduced errors, and improved efficiency.",
      metrics: "40% cost reduction"
    },
    {
      icon: Smartphone,
      title: "Work From Anywhere",
      description: "Cloud-based access means you can manage your practice from any device.",
      metrics: "24/7 accessibility"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Real-time analytics help you make informed business decisions.",
      metrics: "Real-time insights"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      practice: "Wellness Chiropractic Center",
      quote: "EChiroPartners transformed our practice. We've seen a 40% increase in efficiency and our patients love the new system.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      practice: "Advanced Spine Care",
      quote: "The automation features have saved us countless hours. We can focus on what matters most - our patients.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 bg-pattern">
      {/* Hero Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 animate-bounce-in">
              🚀 Proven Results
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text-electric animate-fade-in">
              Transform Your Practice Today
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-stagger-1">
              Join thousands of chiropractors who have revolutionized their practice with EChiroPartners.
            </p>
          </div>

          {/* Primary Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {primaryBenefits.map((benefit, index) => (
              <Card key={benefit.title} className={`card-glow hover-3d animate-stagger-${Math.min(index + 1, 4)}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 floating-element animate-pulse-glow`}>
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl gradient-text">{benefit.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefit.stats.map((stat) => (
                      <div key={stat} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{stat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Benefits Grid */}
          <div className="bg-gradient-vibrant rounded-2xl p-8 mb-16 animate-gradient-shift">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Even More Benefits
              </h2>
              <p className="text-white/90 text-lg">
                Discover all the ways EChiroPartners can improve your practice
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={benefit.title} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale animate-stagger-${Math.min(index + 1, 4)}`}>
                  <benefit.icon className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{benefit.description}</p>
                  <div className="text-white font-semibold text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                    {benefit.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text-vibrant">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Real results from real chiropractors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className={`card-vibrant hover-scale animate-stagger-${index + 1}`}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.practice}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ROI Calculator Preview */}
          <Card className="card-glow mb-16 animate-scale-in">
            <CardContent className="p-8 text-center">
              <Target className="h-16 w-16 mx-auto mb-4 text-primary floating-element" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
                Calculate Your ROI
              </h2>
              <p className="text-muted-foreground mb-6 text-lg max-w-2xl mx-auto">
                See exactly how much time and money EChiroPartners can save your practice with our ROI calculator.
              </p>
              <Button className="btn-electric hover-bounce">
                <Lightbulb className="mr-2 h-4 w-4" />
                Coming Soon - ROI Calculator
              </Button>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="card-vibrant max-w-2xl mx-auto animate-scale-in">
              <CardContent className="p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text-electric">
                  Ready to Transform Your Practice?
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Join the revolution and start seeing results from day one.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="btn-vibrant hover-bounce">
                    <Link to="/demo">Get Started Today</Link>
                  </Button>
                  <Button asChild variant="outline" className="hover-scale">
                    <Link to="/features">View All Features</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
