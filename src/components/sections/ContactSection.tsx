import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { portfolioData } from "@/data/portfolioData";

const ContactSection = () => {
  const { contact } = portfolioData;

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Напишите мне
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Как вас зовут?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип проекта
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      Видео
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      Подкаст
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      Курс
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      Другое
                    </Badge>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Расскажите о проекте
                  </label>
                  <Textarea
                    placeholder="Опишите вашу идею, цели и требования..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Контакты
              </h3>
              <div className="space-y-4">
                {contact.info.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(info.color)}`}
                    >
                      <Icon name={info.icon as any} size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {info.title}
                      </div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Почему выбирают меня?
              </h4>
              <div className="space-y-3">
                {contact.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-green-600 mt-1"
                      size={16}
                    />
                    <span className="text-gray-600">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
