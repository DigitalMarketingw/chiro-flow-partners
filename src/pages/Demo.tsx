
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Request a Demo
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Coming soon - clean demo request form with fields for practice information 
            and scheduling preferences.
          </p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Demo;
