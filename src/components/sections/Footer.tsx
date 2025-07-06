import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
