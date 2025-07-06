import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              Анна Сценарист
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Обо мне
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Создаю сценарии,
                <span className="text-blue-600 block">которые цепляют</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Специализируюсь на написании сценариев для видеороликов и
                подкастов. Превращаю идеи в захватывающие истории, которые
                удерживают внимание зрителей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Icon name="Play" className="mr-2" />
                  Посмотреть работы
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Обсудить проект
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Сценариев написано</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Года опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24ч</div>
              <div className="text-gray-600">Время отклика</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Примеры моих работ: от рекламных роликов до образовательных
              подкастов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    Видео
                  </Badge>
                  <Icon
                    name="Play"
                    className="text-blue-600 group-hover:scale-110 transition-transform"
                  />
                </div>
                <CardTitle className="text-xl">
                  Рекламный ролик IT-компании
                </CardTitle>
                <CardDescription>
                  Сценарий для 60-секундного видео о новом SaaS-продукте
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Video" size={48} className="text-blue-600" />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Создал захватывающий сценарий, который увеличил конверсию на
                  35%
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    B2B
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Реклама
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Конверсия
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    Подкаст
                  </Badge>
                  <Icon
                    name="Mic"
                    className="text-green-600 group-hover:scale-110 transition-transform"
                  />
                </div>
                <CardTitle className="text-xl">
                  Образовательный подкаст
                </CardTitle>
                <CardDescription>
                  Серия из 10 эпизодов о психологии и саморазвитии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon
                    name="Headphones"
                    size={48}
                    className="text-green-600"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Разработал структуру и диалоги для популярного подкаста (50k+
                  слушателей)
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Образование
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Интервью
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Сторителлинг
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800"
                  >
                    Видео
                  </Badge>
                  <Icon
                    name="Sparkles"
                    className="text-purple-600 group-hover:scale-110 transition-transform"
                  />
                </div>
                <CardTitle className="text-xl">Обучающий курс</CardTitle>
                <CardDescription>
                  Сценарии для онлайн-курса по маркетингу (20 уроков)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon
                    name="GraduationCap"
                    size={48}
                    className="text-purple-600"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Создал увлекательные сценарии для EdTech-платформы
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    EdTech
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Курсы
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Обучение
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Обо мне</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Привет! Меня зовут Анна, и я создаю сценарии, которые вовлекают
                и удерживают внимание. За 3 года работы я написала более 150
                сценариев для видео и подкастов.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Моя специализация — превращение сложных идей в простые и
                понятные истории. Работаю с стартапами, крупными компаниями и
                медиа-проектами.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Target" className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Точность</div>
                    <div className="text-sm text-gray-600">
                      Каждое слово имеет значение
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Zap" className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Скорость</div>
                    <div className="text-sm text-gray-600">
                      Быстро и качественно
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Heart" className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Эмоции</div>
                    <div className="text-sm text-gray-600">
                      Создаю эмоциональную связь
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon
                      name="TrendingUp"
                      className="text-orange-600"
                      size={20}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Результат</div>
                    <div className="text-sm text-gray-600">
                      Фокус на конверсию
                    </div>
                  </div>
                </div>
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по созданию сценариев для видео и аудио
              контента
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Video" className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Видео сценарии
              </h3>
              <p className="text-gray-600 mb-4">
                Рекламные ролики, презентации, обучающие видео
              </p>
              <div className="text-2xl font-bold text-blue-600">от 5 000 ₽</div>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mic" className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Подкаст сценарии
              </h3>
              <p className="text-gray-600 mb-4">
                Интервью, монологи, образовательные подкасты
              </p>
              <div className="text-2xl font-bold text-green-600">
                от 3 000 ₽
              </div>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Курсы и обучение
              </h3>
              <p className="text-gray-600 mb-4">
                Сценарии для онлайн-курсов и вебинаров
              </p>
              <div className="text-2xl font-bold text-purple-600">
                от 8 000 ₽
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь со мной
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готова обсудить ваш проект и создать сценарий, который поможет
              достичь ваших целей
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
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon name="Mail" className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">anna@copywriter.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="MessageCircle"
                        className="text-green-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Telegram
                      </div>
                      <div className="text-gray-600">@anna_copywriter</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Clock"
                        className="text-purple-600"
                        size={20}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Режим работы
                      </div>
                      <div className="text-gray-600">Пн-Пт: 9:00-18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Почему выбирают меня?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-green-600 mt-1"
                      size={16}
                    />
                    <span className="text-gray-600">
                      Быстрая обратная связь в течение 2-4 часов
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-green-600 mt-1"
                      size={16}
                    />
                    <span className="text-gray-600">
                      Unlimited правок до полного соответствия
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-green-600 mt-1"
                      size={16}
                    />
                    <span className="text-gray-600">
                      Гарантия качества и соблюдения сроков
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle"
                      className="text-green-600 mt-1"
                      size={16}
                    />
                    <span className="text-gray-600">
                      Индивидуальный подход к каждому проекту
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Анна Сценарист</div>
            <p className="text-gray-400 mb-6">
              Создаю сценарии для видео и подкастов, которые работают
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
            <Separator className="my-8 bg-gray-800" />
            <p className="text-gray-500 text-sm">
              © 2024 Анна Сценарист. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
