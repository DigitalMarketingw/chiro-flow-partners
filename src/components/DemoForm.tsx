
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Send, CheckCircle } from "lucide-react";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    practiceSize: '',
    currentEMR: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Save to localStorage for now (would be replaced with actual API)
      localStorage.setItem('demoRequest', JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      }));
      
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          practiceSize: '',
          currentEMR: '',
          preferredTime: '',
          message: ''
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <Card className="shadow-xl border-border">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Demo Request Submitted!
          </h3>
          <p className="text-muted-foreground">
            Thank you for your interest. Our team will contact you within 24 hours to schedule your personalized demo.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl border-border">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground flex items-center">
          <Calendar className="w-6 h-6 mr-3 text-primary" />
          Schedule Your Demo
        </CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below to get a personalized demonstration of EChiroPartners.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Dr. John Smith"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="doctor@yourpractice.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="business">Practice/Business Name *</Label>
            <Input
              id="business"
              name="business"
              type="text"
              placeholder="ABC Chiropractic Center"
              value={formData.business}
              onChange={handleInputChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="practiceSize">Practice Size</Label>
              <Select onValueChange={(value) => handleSelectChange('practiceSize', value)}>
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                  <SelectValue placeholder="Select practice size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo">Solo Practice (1 doctor)</SelectItem>
                  <SelectItem value="small">Small Practice (2-5 doctors)</SelectItem>
                  <SelectItem value="medium">Medium Practice (6-15 doctors)</SelectItem>
                  <SelectItem value="large">Large Practice (15+ doctors)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentEMR">Current EMR System</Label>
              <Select onValueChange={(value) => handleSelectChange('currentEMR', value)}>
                <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                  <SelectValue placeholder="Current system" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No current EMR</SelectItem>
                  <SelectItem value="paper">Paper-based system</SelectItem>
                  <SelectItem value="other-emr">Other EMR system</SelectItem>
                  <SelectItem value="custom">Custom solution</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredTime">Preferred Demo Time</Label>
            <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
              <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your specific needs or questions..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            disabled={isLoading}
            className="w-full hover-scale bg-gradient-to-r from-primary to-accent"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Scheduling Demo...
              </>
            ) : (
              <>
                Schedule My Demo
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DemoForm;
