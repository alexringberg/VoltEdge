
import { Phone, Mail, MapPin, Leaf, Scissors, Sprout, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with a free estimate.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: Scissors,
      title: "Lawn Mowing",
      description: "Professional grass cutting with precision and care for a perfectly manicured look."
    },
    {
      icon: Leaf,
      title: "Landscaping",
      description: "Complete landscape design and maintenance to enhance your property's curb appeal."
    },
    {
      icon: Sprout,
      title: "Fertilization",
      description: "Expert lawn fertilization programs to keep your grass healthy and vibrant year-round."
    },
    {
      icon: Clock,
      title: "Seasonal Cleanup",
      description: "Spring and fall cleanup services including leaf removal and seasonal preparations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://scontent.fmli2-1.fna.fbcdn.net/v/t39.30808-6/481260423_10230962476503788_1949751788931603672_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2mDAmAvxSnMQ7kNvwF8F7BL&_nc_oc=Adl362wkeGiBcpAryqC_NlduqG32_JDkvHYV3kmNaVoWBrpr1TPe-6c7QCo6dAx28Gc&_nc_zt=23&_nc_ht=scontent.fmli2-1.fna&_nc_gid=2Hef_QA1HzieN6E7XqeaTw&oh=00_AfJDfSK_xt2RDf4P3jvkxusDa5MeMUrtvaKNvP48he4A8g&oe=68453D34" 
              alt="Company Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-green-800">Professional Lawn Care</h1>
              <p className="text-sm text-green-600">Excellence in Every Cut</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-green-700 hover:text-green-900 transition-colors">Services</a>
            <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors">Contact</a>
            <Button className="bg-green-600 hover:bg-green-700">Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Beautiful Lawns,<br />
            <span className="text-green-600">Professional Service</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Transform your outdoor space with our expert lawn care services. We provide reliable, 
            professional maintenance to keep your property looking its absolute best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call Now for Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive lawn care solutions to meet all your outdoor maintenance needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-green-100">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Quote Section */}
      <section id="contact" className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-4xl font-bold text-green-800 mb-8">Get In Touch</h3>
              <p className="text-lg text-gray-700 mb-8">
                Ready to transform your lawn? Contact us today for a free consultation and quote. 
                We're here to answer all your questions and help you achieve the perfect outdoor space.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Phone</h4>
                    <p className="text-gray-700">(555) 123-LAWN</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Email</h4>
                    <p className="text-gray-700">info@yourlawncare.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Service Area</h4>
                    <p className="text-gray-700">Your City & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <Card className="shadow-xl border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Request a Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a personalized estimate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your lawn care needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="https://scontent.fmli2-1.fna.fbcdn.net/v/t39.30808-6/481260423_10230962476503788_1949751788931603672_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2mDAmAvxSnMQ7kNvwF8F7BL&_nc_oc=Adl362wkeGiBcpAryqC_NlduqG32_JDkvHYV3kmNaVoWBrpr1TPe-6c7QCo6dAx28Gc&_nc_zt=23&_nc_ht=scontent.fmli2-1.fna&_nc_gid=2Hef_QA1HzieN6E7XqeaTw&oh=00_AfJDfSK_xt2RDf4P3jvkxusDa5MeMUrtvaKNvP48he4A8g&oe=68453D34" 
              alt="Company Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h3 className="text-xl font-bold">Professional Lawn Care</h3>
              <p className="text-green-200">Excellence in Every Cut</p>
            </div>
          </div>
          <p className="text-green-200 mb-4">
            Serving our community with professional lawn care services since day one.
          </p>
          <p className="text-green-300">
            © 2024 Professional Lawn Care. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
