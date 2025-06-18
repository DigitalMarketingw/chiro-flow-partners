
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
  Star
} from "lucide-react";

const Demo = () => {
  const demoFeatures = [
    {
      icon: CheckCircle,
      title: "Complete Workflow Demo",
      description: "See how patients flow through your practice from scheduling to billing"
    },
    {
      icon: BarChart3,
      title: "Live Analytics Dashboard",
      description: "View real-time practice performance metrics and insights"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Learn about our HIPAA-compliant infrastructure and data protection"
    },
    {
      icon: Users,
      title: "Multi-User Functionality",
      description: "Experience how different staff roles interact with the system"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Clock className="w-4 h-4 mr-2" />
              30-Minute Personalized Demo
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
              See EChiroPartners 
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> in Action</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Experience how our EMR system can transform your chiropractic practice with a 
              personalized demonstration tailored to your specific needs and workflow.
            </p>

            <div className="mb-12 animate-fade-in">
              <VideoPlayer 
                videoUrl="" // This will be populated when you provide the video URL
                title="EChiroPartners Complete Demo"
                description="Watch how our EMR system streamlines your entire practice workflow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              What You'll See in Your Demo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our personalized demonstrations cover everything you need to know about EChiroPartners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {demoFeatures.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {demoStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form & Additional Info */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div>
              <DemoForm />
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Why Schedule a Demo?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Personalized Experience</p>
                      <p className="text-sm text-muted-foreground">Tailored to your practice size and specific workflow needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Expert Guidance</p>
                      <p className="text-sm text-muted-foreground">Led by healthcare technology specialists who understand chiropractic practices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Live Q&A Session</p>
                      <p className="text-sm text-muted-foreground">Get all your questions answered in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">No Commitment Required</p>
                      <p className="text-sm text-muted-foreground">Explore the platform with no pressure or obligation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Info */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Headphones className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Expert Demo Support
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Our demo specialists have years of experience in chiropractic practice 
                    management and will ensure you see exactly how EChiroPartners fits your needs.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>📞 <strong>Immediate Support:</strong> 1-800-ECHIRO-1</p>
                    <p>✉️ <strong>Email Questions:</strong> demo@echiropartners.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonials */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Demo Feedback</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-background border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
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
