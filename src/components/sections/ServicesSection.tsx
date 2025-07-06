import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { portfolioData } from "@/data/portfolioData";

const ServicesSection = () => {
  const { services } = portfolioData;

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getPriceColor = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(service.color)}`}
              >
                <Icon name={service.icon as any} size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div
                className={`text-2xl font-bold ${getPriceColor(service.color)}`}
              >
                {service.price}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
