
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Benefits", href: "/benefits" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 safe-area-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover-scale" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/lovable-uploads/6b65e65f-cfc0-4dcf-a139-15b778d0dd71.png" 
                alt="EChiroPartners Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 story-link font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Button asChild variant="outline" className="hover-scale text-sm lg:text-base px-3 lg:px-4">
                <Link to="/contact">Contact</Link>
              </Button>
              <Button asChild className="hover-scale bg-gradient-to-r from-primary to-accent text-sm lg:text-base px-3 lg:px-4">
                <Link to="/demo">Get Demo</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover-scale touch-feedback rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60] md:hidden" onClick={() => setIsMenuOpen(false)} />
          <div className="mobile-menu-container md:hidden fixed inset-y-0 right-0 z-[70] w-64 max-w-sm">
            <div className="mobile-menu animate-slide-in-right bg-white h-full shadow-xl">
              <div className="px-4 py-6 space-y-4">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2 px-3 rounded-md touch-feedback"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="border-t border-border pt-4 space-y-3">
                  <Button asChild variant="outline" className="w-full touch-feedback">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                  </Button>
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-accent touch-feedback">
                    <Link to="/demo" onClick={() => setIsMenuOpen(false)}>Get Demo</Link>
                  </Button>
                </div>
                
                {/* Mobile Company Attribution */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    By Mynx Softwares Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
