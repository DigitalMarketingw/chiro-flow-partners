
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About EChiroPartners
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Coming soon - our mission to empower chiropractic clinics, 
            team expertise in healthcare software (10+ years), and dedication to the chiropractic industry.
          </p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
