
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
