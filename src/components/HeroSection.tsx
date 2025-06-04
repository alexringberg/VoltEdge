import { Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
