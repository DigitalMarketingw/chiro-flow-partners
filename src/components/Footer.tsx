
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/fa74de51-446a-4db4-8f8c-6d6446efdc37.png" 
                alt="EChiroPartners Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Made by Chiropractors, For Chiropractors. Empowering chiropractic practices with modern EMR solutions for over 20 years.
            </p>
            <p className="text-xs text-muted-foreground">
              By Mynx Softwares Inc.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <Link to="/features" className="block text-muted-foreground hover:text-foreground text-sm story-link">
                Features
              </Link>
              <Link to="/benefits" className="block text-muted-foreground hover:text-foreground text-sm story-link">
                Benefits
              </Link>
              <Link to="/why-switch" className="block text-muted-foreground hover:text-foreground text-sm story-link">
                Why Switch
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-foreground text-sm story-link">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground text-sm story-link">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/demo" className="block text-muted-foreground hover:text-foreground text-sm story-link">
                Request Demo
              </Link>
              <span className="block text-muted-foreground text-sm">
                support@echiropartners.com
              </span>
              <span className="block text-muted-foreground text-sm">
                1-800-ECHIRO-1
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EChiroPartners by Mynx Softwares Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm story-link">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm story-link">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm story-link">
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
