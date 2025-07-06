import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { portfolioData } from "@/data/portfolioData";

const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {hero.title}
              <span className="text-blue-600 block">{hero.subtitle}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Icon name="Play" className="mr-2" />
                {hero.buttons.primary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Icon name="MessageCircle" className="mr-2" />
                {hero.buttons.secondary}
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/img/44bf2fe3-1eb8-445c-950c-82edf0505e36.jpg"
              alt="Рабочее место копирайтера"
              className="relative z-10 rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
