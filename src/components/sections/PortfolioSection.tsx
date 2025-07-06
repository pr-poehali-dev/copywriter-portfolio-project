import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { portfolioData } from "@/data/portfolioData";

const PortfolioSection = () => {
  const { portfolio } = portfolioData;

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        badge: "bg-blue-100 text-blue-800",
        icon: "text-blue-600",
        gradient: "from-blue-100 to-purple-100",
      },
      green: {
        badge: "bg-green-100 text-green-800",
        icon: "text-green-600",
        gradient: "from-green-100 to-teal-100",
      },
      purple: {
        badge: "bg-purple-100 text-purple-800",
        icon: "text-purple-600",
        gradient: "from-purple-100 to-pink-100",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getDisplayIcon = (iconName: string) => {
    const iconMap = {
      Play: "Video",
      Mic: "Headphones",
      Sparkles: "GraduationCap",
    };
    return iconMap[iconName as keyof typeof iconMap] || iconName;
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {portfolio.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {portfolio.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project) => {
            const colors = getColorClasses(project.color);
            const displayIcon = getDisplayIcon(project.icon);

            return (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className={colors.badge}>
                      {project.type}
                    </Badge>
                    <Icon
                      name={project.icon as any}
                      className={`${colors.icon} group-hover:scale-110 transition-transform`}
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={`aspect-video bg-gradient-to-br ${colors.gradient} rounded-lg mb-4 flex items-center justify-center`}
                  >
                    <Icon
                      name={displayIcon as any}
                      size={48}
                      className={colors.icon}
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
