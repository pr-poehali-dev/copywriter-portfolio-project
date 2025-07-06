const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Анна Сценарист</div>
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
  );
};

export default Header;
