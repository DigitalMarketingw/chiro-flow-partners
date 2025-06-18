
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Calendar,
  FileText,
  CreditCard,
  Shield,
  Cloud,
  BarChart3,
  Smartphone,
  Link as LinkIcon,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Scheduling & Appointment Management",
      description: "Complete appointment management system designed for busy chiropractic practices.",
      benefits: [
        "Online appointment booking for patients",
        "Automated appointment reminders via SMS and email",
        "Waitlist management and automatic rescheduling",
        "Multi-provider scheduling with resource management",
        "Recurring appointment templates",
        "Patient portal integration"
      ]
    },
    {
      icon: FileText,
      title: "SOAP Notes & Documentation",
      description: "Streamlined clinical documentation with chiropractic-specific templates.",
      benefits: [
        "Pre-built SOAP note templates for common conditions",
        "Voice-to-text documentation support",
        "Clinical decision support tools",
        "ICD-10 and CPT code integration",
        "Digital signature capture",
        "Progress tracking and outcome measures"
      ]
    },
    {
      icon: CreditCard,
      title: "Billing & Payment Processing",
      description: "Comprehensive revenue cycle management to maximize your practice income.",
      benefits: [
        "Automated insurance claim submission",
        "Real-time eligibility verification",
        "Payment processing and merchant services",
        "Accounts receivable management",
        "Financial reporting and analytics",
        "Patient payment plans and financing"
      ]
    },
    {
      icon: Shield,
      title: "HIPAA Compliance & Security",
      description: "Bank-level security ensuring complete patient data protection.",
      benefits: [
        "End-to-end data encryption",
        "Comprehensive audit trails",
        "Role-based access controls",
        "Automatic data backups",
        "Business Associate Agreement included",
        "Regular security updates and monitoring"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud-Based Access & Mobile",
      description: "Access your practice management system from anywhere, anytime.",
      benefits: [
        "Web-based access from any device",
        "Native iOS and Android mobile apps",
        "Offline capability for critical functions",
        "Automatic software updates",
        "99.9% uptime guarantee",
        "Multi-location practice support"
      ]
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Powerful insights to help you make data-driven practice decisions.",
      benefits: [
        "Real-time practice performance dashboards",
        "Financial and productivity reports",
        "Patient outcome tracking",
        "Marketing ROI analysis",
        "Custom report builder",
        "Automated report scheduling"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Full-featured mobile apps for providers and patients.",
      benefits: [
        "Complete EMR access on mobile devices",
        "Patient check-in and forms on tablets",
        "Mobile payment processing",
        "Secure messaging with patients",
        "Photo documentation and imaging",
        "Push notifications for important updates"
      ]
    },
    {
      icon: LinkIcon,
      title: "Integration Capabilities",
      description: "Seamlessly connect with your existing practice tools and equipment.",
      benefits: [
        "X-ray and imaging system integration",
        "Lab results and diagnostic tool connectivity",
        "Marketing platform integrations",
        "Accounting software synchronization",
        "Telehealth platform integration",
        "Third-party app marketplace"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful Features for Modern 
            <span className="text-primary"> Chiropractic Practices</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive EMR solution with everything you need to streamline operations, 
            improve patient care, and grow your practice.
          </p>
          <Button asChild size="lg">
            <Link to="/demo">See Features in Action</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                      <p className="text-muted-foreground text-lg">{feature.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={`bg-muted/20 rounded-2xl aspect-video flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="text-center">
                    <feature.icon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Feature Demo Screenshot</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a personalized demo to see how EChiroPartners can transform your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/demo">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/benefits">See Benefits</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
