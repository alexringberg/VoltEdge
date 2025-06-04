
import { Phone, Mail, MapPin, Leaf, Scissors, Sprout, Clock, Zap, Shield } from "lucide-react";
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
      title: "Electric Mowing",
      description: "Quiet, powerful 100% electric mowing with zero emissions for a perfectly manicured lawn."
    },
    {
      icon: Zap,
      title: "Electric Trimming",
      description: "Precision electric trimming and edging with no gas, no fumes - just clean, precise cuts."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Landscaping",
      description: "Complete electric landscape maintenance to enhance your property while protecting the environment."
    },
    {
      icon: Shield,
      title: "Zero Emission Service",
      description: "100% electric equipment means no harmful emissions, noise pollution, or gas fumes."
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
              alt="VoltEdge Lawn Solutions Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-green-800">VoltEdge Lawn Solutions</h1>
              <p className="text-sm text-green-600">100% Electric • Zero Emissions</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-green-700 hover:text-green-900 transition-colors">Services</a>
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">About</a>
            <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors">Contact</a>
            <Button className="bg-green-600 hover:bg-green-700">Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
            Quiet, Powerful,<br />
            <span className="text-green-600">100% Electric Lawn Care</span>
          </h2>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
            For the Quad Cities & Beyond! No gas, no fumes - just clean, precise cuts with zero emissions.
          </p>
          <p className="text-lg text-green-700 mb-8 max-w-2xl mx-auto font-semibold">
            Eco-friendly mowing, trimming & maintenance. Go green with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call Now for Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
              <Zap className="mr-2 h-5 w-5" />
              See Our Electric Equipment
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-green-800 mb-6">100% Electric Equipment</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our state-of-the-art electric lawn care equipment delivers powerful performance without the noise, 
                emissions, or environmental impact of traditional gas-powered tools.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Zero emissions, zero pollution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Quiet operation for peaceful neighborhoods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Eco-friendly and sustainable</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/7063d6c1-44a7-4722-ae78-3c1ef8808b87.png" 
                alt="VoltEdge Electric Lawn Equipment"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-green-800 mb-4">Our Electric Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete electric lawn care solutions with zero emissions and maximum precision
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
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div>
              <h3 className="text-4xl font-bold text-green-800 mb-8">Get In Touch</h3>
              <p className="text-lg text-gray-700 mb-8">
                Ready to go electric with your lawn care? Contact us today for a free consultation and quote. 
                We're here to answer all your questions about our eco-friendly services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Phone</h4>
                    <p className="text-gray-700">(555) 123-VOLT</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Email</h4>
                    <p className="text-gray-700">info@voltedgelawn.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Service Area</h4>
                    <p className="text-gray-700">Quad Cities & Beyond</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <Card className="shadow-xl border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">Request a Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a personalized estimate for your electric lawn care needs.
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
                    Get My Free Electric Quote
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
              alt="VoltEdge Lawn Solutions Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h3 className="text-xl font-bold">VoltEdge Lawn Solutions</h3>
              <p className="text-green-200">Quiet, powerful, 100% electric lawn care</p>
            </div>
          </div>
          <p className="text-green-200 mb-4">
            Serving the Quad Cities & Beyond with eco-friendly electric lawn care since day one.
          </p>
          <p className="text-green-300">
            © 2024 VoltEdge Lawn Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
