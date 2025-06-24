
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Shield,
  Smartphone,
  Cloud,
  Zap,
  Heart,
  Clock,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered appointment scheduling with automated reminders and conflict resolution.",
      benefits: ["Reduce no-shows by 40%", "Automated confirmations", "Smart time blocking"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient records with treatment history and progress tracking.",
      benefits: ["Complete medical history", "Progress visualization", "Family account linking"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Digital Records",
      description: "Paperless documentation with e-signatures and secure cloud storage.",
      benefits: ["Instant access anywhere", "Legal compliance", "Backup protection"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: DollarSign,
      title: "Billing & Insurance",
      description: "Automated billing, insurance claims processing, and payment tracking.",
      benefits: ["Faster reimbursements", "Error reduction", "Payment reminders"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into practice performance and patient outcomes.",
      benefits: ["Revenue tracking", "Patient insights", "Performance metrics"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Built-in security measures ensuring full HIPAA compliance and data protection.",
      benefits: ["End-to-end encryption", "Audit trails", "Compliance reporting"],
      color: "from-gray-600 to-gray-800"
    }
  ];

  const additionalFeatures = [
    { icon: Smartphone, title: "Mobile Access", description: "Full functionality on all devices" },
    { icon: Cloud, title: "Cloud Storage", description: "Secure, scalable cloud infrastructure" },
    { icon: Zap, title: "Fast Performance", description: "Lightning-fast response times" },
    { icon: Heart, title: "Patient Portal", description: "Self-service portal for patients" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance" },
    { icon: CheckCircle, title: "Easy Setup", description: "Quick implementation and training" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 bg-pattern">
      {/* Hero Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 animate-bounce-in">
              ⚡ Powerful Features
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text-electric animate-fade-in">
              Everything Your Practice Needs
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-stagger-1">
              Comprehensive practice management tools designed specifically for modern chiropractic practices.
            </p>
          </div>

          {/* Core Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {coreFeatures.map((feature, index) => (
              <Card key={feature.title} className={`card-glow hover-3d animate-stagger-${Math.min(index + 1, 4)}`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 floating-element`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl gradient-text">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-16 animate-gradient-shift">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Plus Many More Features
              </h2>
              <p className="text-white/90 text-lg">
                A complete ecosystem of tools to streamline your practice
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div key={feature.title} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale animate-stagger-${Math.min(index + 1, 4)}`}>
                  <feature.icon className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="card-vibrant max-w-2xl mx-auto animate-scale-in">
              <CardContent className="p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text-electric">
                  Ready to Experience These Features?
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  See how EChiroPartners can transform your practice with a personalized demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-gradient-to-r from-primary to-accent hover-bounce">
                    <Link to="/demo">Schedule Demo</Link>
                  </Button>
                  <Button asChild variant="outline" className="hover-scale border-primary/20">
                    <Link to="/contact">Contact Sales</Link>
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

export default Features;
