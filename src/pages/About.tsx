
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Heart, 
  Shield,
  ArrowRight,
  CheckCircle,
  Stethoscope
} from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "20+",
      label: "Years in Healthcare"
    },
    {
      icon: Users,
      number: "500+",
      label: "Practices Served"
    },
    {
      icon: Heart,
      number: "50K+",
      label: "Patients Managed"
    },
    {
      icon: Shield,
      number: "100%",
      label: "HIPAA Compliant"
    }
  ];

  const values = [
    {
      title: "Built by Practitioners",
      description: "Our software is designed by healthcare professionals who understand the daily challenges of running a chiropractic practice."
    },
    {
      title: "Patient-Centered Care",
      description: "Every feature is designed to enhance patient care and improve the overall experience for both practitioners and patients."
    },
    {
      title: "Continuous Innovation",
      description: "We constantly evolve our platform based on real-world feedback from practicing chiropractors and industry best practices."
    },
    {
      title: "Unwavering Support",
      description: "Our dedicated support team consists of healthcare technology experts who provide personalized assistance whenever you need it."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in">
                <Stethoscope className="w-4 h-4 mr-2" />
                Made by Chiropractors, For Chiropractors
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Our Mission: Empowering 
                <span className="text-primary"> Chiropractic Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                At EChiroPartners, we combine decades of healthcare experience with cutting-edge technology 
                to create solutions that truly understand and serve the chiropractic community.
              </p>
              <Button asChild size="lg" className="hover-scale bg-gradient-to-r from-primary to-accent animate-fade-in">
                <Link to="/demo" className="flex items-center">
                  Experience Our Vision
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center hover-scale">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-foreground">{achievement.number}</div>
                      <div className="text-sm text-muted-foreground">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-6 mb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">JN</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Dr. Jay Niaz</h3>
                      <p className="text-sm text-muted-foreground">Founder & Chief Medical Officer</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>20+ Years Running Accident Centers of Texas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Licensed Healthcare Professional</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Healthcare Technology Innovator</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Founded by a Practicing Chiropractor
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Dr. Jay Niaz, the visionary behind EChiroPartners, has been successfully operating 
                Accident Centers of Texas for over 20 years. His firsthand experience as a practicing 
                chiropractor revealed the critical gaps in existing EMR systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Frustrated by software that didn't understand the unique workflow of chiropractic care, 
                Dr. Niaz partnered with Mynx Softwares Inc. to create a solution built from the ground up 
                by chiropractors, for chiropractors.
              </p>
              <div className="bg-accent/10 rounded-lg p-6 mb-6">
                <blockquote className="text-lg font-medium text-foreground italic">
                  "Every feature in EChiroPartners comes from real clinical experience. We built the EMR 
                  system I wish I had when I started my practice 20 years ago."
                </blockquote>
                <cite className="text-sm text-muted-foreground block mt-2">- Dr. Jay Niaz, Founder</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values & Commitment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything we do is guided by our commitment to improving chiropractic care through technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Powered by Mynx Softwares Inc.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              EChiroPartners is proudly developed and supported by Mynx Softwares Inc., a healthcare 
              technology company with over two decades of experience creating innovative solutions 
              for medical practices. Our team combines deep healthcare industry knowledge with 
              cutting-edge software development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-scale bg-gradient-to-r from-primary to-accent">
                <Link to="/demo">See Our Platform</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-scale">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
