
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/VideoPlayer";
import DemoForm from "@/components/DemoForm";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Shield,
  BarChart3,
  Headphones,
  Star,
  Sparkles,
  Zap
} from "lucide-react";

const Demo = () => {
  const demoFeatures = [
    {
      icon: CheckCircle,
      title: "Complete Workflow Demo",
      description: "See how patients flow through your practice from scheduling to billing",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Live Analytics Dashboard",
      description: "View real-time practice performance metrics and insights",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Learn about our HIPAA-compliant infrastructure and data protection",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Multi-User Functionality",
      description: "Experience how different staff roles interact with the system",
      color: "from-orange-500 to-red-500"
    }
  ];

  const demoStats = [
    { number: "30", label: "Minutes", description: "Comprehensive demo" },
    { number: "500+", label: "Practices", description: "Trust EChiroPartners" },
    { number: "24hrs", label: "Response", description: "Demo scheduling" },
    { number: "100%", label: "Custom", description: "Tailored to your needs" }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Johnson",
      practice: "Precision Chiropractic",
      content: "The demo showed exactly how EChiroPartners would solve our biggest workflow challenges. Implementation was seamless.",
      rating: 5
    },
    {
      name: "Dr. Lisa Thompson",
      practice: "Family Wellness Center",
      content: "Best demo experience I've had with any EMR. They understood our practice and customized the presentation perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 bg-pattern">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
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
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in hover-bounce border border-accent/20">
              <Clock className="w-5 h-5 mr-3" />
              30-Minute Personalized Demo
              <Sparkles className="w-4 h-4 ml-3 text-yellow-500 animate-float" />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              See EChiroPartners 
              <span className="gradient-text-electric"> in Action</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-stagger-1">
              Experience how our EMR system can transform your chiropractic practice with a 
              personalized demonstration tailored to your specific needs and workflow.
            </p>

            <div className="mb-12 animate-stagger-2">
              <VideoPlayer 
                videoUrl="" 
                title="EChiroPartners Complete Demo"
                description="Watch how our EMR system streamlines your entire practice workflow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 gradient-text-electric animate-fade-in">
              What You'll See in Your Demo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-stagger-1">
              Our personalized demonstrations cover everything you need to know about EChiroPartners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {demoFeatures.map((feature, index) => (
              <Card key={index} className={`card-glow hover-3d animate-stagger-${Math.min(index + 1, 4)}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 floating-element animate-pulse-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 gradient-text">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Stats */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 animate-gradient-shift">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {demoStats.map((stat, index) => (
                <div key={index} className={`text-center hover-bounce animate-stagger-${Math.min(index + 1, 4)}`}>
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                  <div className="text-sm font-medium text-white/90 mb-1">{stat.label}</div>
                  <div className="text-xs text-white/70">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form & Additional Info */}
      <section className="relative py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div className="animate-scale-in">
              <DemoForm />
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div className="animate-stagger-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-electric">
                  Why Schedule a Demo?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 hover-bounce">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <p className="font-medium text-foreground">Personalized Experience</p>
                      <p className="text-sm text-muted-foreground">Tailored to your practice size and specific workflow needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 hover-bounce">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <p className="font-medium text-foreground">Expert Guidance</p>
                      <p className="text-sm text-muted-foreground">Led by healthcare technology specialists who understand chiropractic practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 hover-bounce">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <p className="font-medium text-foreground">Live Q&A Session</p>
                      <p className="text-sm text-muted-foreground">Get all your questions answered in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 hover-bounce">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <p className="font-medium text-foreground">No Commitment Required</p>
                      <p className="text-sm text-muted-foreground">Explore the platform with no pressure or obligation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Info */}
              <Card className="card-vibrant animate-stagger-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-3 floating-element">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold gradient-text">
                      Expert Demo Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Our demo specialists have years of experience in chiropractic practice 
                    management and will ensure you see exactly how EChiroPartners fits your needs.
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p className="flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-primary animate-pulse" />
                      <strong>Immediate Support:</strong> 1-800-ECHIRO-1
                    </p>
                    <p className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-accent animate-float" />
                      <strong>Email Questions:</strong> demo@echiropartners.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <div className="animate-stagger-3">
                <h3 className="text-xl font-bold mb-4 gradient-text-electric">Demo Feedback</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className={`card-glow hover-scale animate-stagger-${index + 1}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                          ))}
                        </div>
                        <p className="text-muted-foreground text-sm mb-3 italic">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.practice}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
