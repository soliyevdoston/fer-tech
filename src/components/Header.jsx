import React from "react";
import Logo from "../assets/header-img/Logo.png";
import { useTranslation } from "react-i18next";

export default function Header({ darkMode }) {
  const { t, i18n } = useTranslation();

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-[#DAD7CD] text-gray-900"
      }`}
    >
      <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition">
        <img src={Logo} alt="Logo" className="w-11 h-11" />
        <h5 className="text-2xl font-bold tracking-wide">{t("brand")}</h5>
      </div>

      <nav className="hidden md:flex items-center space-x-8 font-medium">
        {[
          { label: t("navbar.home"), id: "hero" },
          { label: t("navbar.articles"), id: "maqolalar" },
          { label: t("navbar.search"), id: "search" },
          { label: t("navbar.contact"), id: "footer" },
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => handleScroll(item.id)}
            className="relative group transition text-left"
          >
            <span className="group-hover:text-black dark:group-hover:text-white">
              {item.label}
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
          </button>
        ))}
      </nav>

      <div>
        <select
          onChange={changeLang}
          value={i18n.language}
          className={`border border-gray-400 rounded-lg px-3 py-1 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
            darkMode
              ? "bg-gray-700/40 text-gray-100"
              : "bg-white/40 text-gray-900"
          }`}
        >
          <option value="uz">🇺🇿 Uzbek (Lotin)</option>
          <option value="uzc">🇺🇿 Ўzbekcha (Кирилл)</option>
          <option value="ru">🇷🇺 Русский</option>
          <option value="eng">🇬🇧 English</option>
        </select>
      </div>
    </header>
  );
}
