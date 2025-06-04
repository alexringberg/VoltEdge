
import { Zap, Shield, Leaf } from "lucide-react";

const EquipmentShowcase = () => {
  return (
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
  );
};

export default EquipmentShowcase;
