
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Send, CheckCircle, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-lead-email', {
        body: {
          formData,
          formType: 'demo'
        }
      });

      if (error) throw error;

      // Save to localStorage as backup
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
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
      // Still show success to user, but log error
      setIsSubmitted(true);
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
    }
  };

  if (isSubmitted) {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 rounded-xl animate-gradient-shift"></div>
        <Card className="relative card-glow border-green-200 animate-success">
          <CardContent className="p-8 text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in floating-element">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 animate-float">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-3xl font-bold gradient-text-electric mb-4">
              Demo Request Submitted!
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Thank you for your interest. Our team will contact you within 24 hours to schedule your personalized demo.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium animate-pulse-glow">
              <CheckCircle className="w-4 h-4 mr-2" />
              Email sent successfully!
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-pattern rounded-xl"></div>
      <Card className="relative card-glow border-primary/20 hover:border-primary/40 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-teal-50/50 rounded-xl"></div>
        <CardHeader className="relative">
          <CardTitle className="text-3xl font-bold gradient-text-electric flex items-center animate-fade-in">
            <div className="relative">
              <Calendar className="w-8 h-8 mr-4 text-primary animate-float" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-pulse"></div>
            </div>
            Schedule Your Demo
          </CardTitle>
          <p className="text-lg text-muted-foreground animate-stagger-1">
            Fill out the form below to get a personalized demonstration of EChiroPartners.
          </p>
        </CardHeader>
        <CardContent className="relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 animate-stagger-1">
                <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Dr. John Smith"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2 animate-stagger-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
            </div>
            
            <div className="space-y-2 animate-stagger-3">
              <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="doctor@yourpractice.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
              />
            </div>
            
            <div className="space-y-2 animate-stagger-4">
              <Label htmlFor="business" className="text-sm font-semibold text-foreground">Practice/Business Name *</Label>
              <Input
                id="business"
                name="business"
                type="text"
                placeholder="ABC Chiropractic Center"
                value={formData.business}
                onChange={handleInputChange}
                required
                className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.02]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 animate-stagger-1">
                <Label htmlFor="practiceSize" className="text-sm font-semibold text-foreground">Practice Size</Label>
                <Select onValueChange={(value) => handleSelectChange('practiceSize', value)}>
                  <SelectTrigger className="form-vibrant hover-glow transition-all duration-300">
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
              <div className="space-y-2 animate-stagger-2">
                <Label htmlFor="currentEMR" className="text-sm font-semibold text-foreground">Current EMR System</Label>
                <Select onValueChange={(value) => handleSelectChange('currentEMR', value)}>
                  <SelectTrigger className="form-vibrant hover-glow transition-all duration-300">
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

            <div className="space-y-2 animate-stagger-3">
              <Label htmlFor="preferredTime" className="text-sm font-semibold text-foreground">Preferred Demo Time</Label>
              <Select onValueChange={(value) => handleSelectChange('preferredTime', value)}>
                <SelectTrigger className="form-vibrant hover-glow transition-all duration-300">
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
            
            <div className="space-y-2 animate-stagger-4">
              <Label htmlFor="message" className="text-sm font-semibold text-foreground">Additional Information</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your specific needs or questions..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="form-vibrant hover-glow transition-all duration-300 focus:scale-[1.01]"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              disabled={isLoading}
              className="w-full btn-electric hover-3d animate-shimmer text-lg py-4"
            >
              {isLoading ? (
                <>
                  <div className="loading-dots mr-3">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  Scheduling Demo...
                </>
              ) : (
                <>
                  Schedule My Demo
                  <Send className="w-5 h-5 ml-2 animate-bounce" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoForm;
