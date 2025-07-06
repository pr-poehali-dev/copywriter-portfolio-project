import Icon from "@/components/ui/icon";
import { portfolioData } from "@/data/portfolioData";

const AboutSection = () => {
  const { about } = portfolioData;

  const getColorClasses = (icon: string) => {
    const colorMap = {
      Target: "bg-blue-100 text-blue-600",
      Zap: "bg-green-100 text-green-600",
      Heart: "bg-purple-100 text-purple-600",
      TrendingUp: "bg-orange-100 text-orange-600",
    };
    return (
      colorMap[icon as keyof typeof colorMap] || "bg-blue-100 text-blue-600"
    );
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {about.title}
            </h2>
            {about.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-2 gap-6">
              {about.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(feature.icon)}`}
                  >
                    <Icon name={feature.icon as any} size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {feature.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
            <img
              src="/img/a4290e1d-b5fe-43d0-851d-3d3419daacbd.jpg"
              alt="Медиа инструменты"
              className="relative z-10 rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
