import React from "react";
import Logo from "../assets/header-img/Logo.png";

export default function Header({ darkMode }) {
  // Scroll funksiyasi
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-[#DAD7CD] text-gray-900"
      }`}
    >
      <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition">
        <img src={Logo} alt="Logo" className="w-11 h-11" />
        <h5 className="text-2xl font-bold tracking-wide">Fer.Teach</h5>
      </div>

      <nav className="hidden md:flex items-center space-x-8 font-medium">
        {[
          { label: "Asosiy sahifa", id: "hero" },
          { label: "Maqolalar", id: "maqolalar" },
          { label: "Qidiruv", id: "search" },
          { label: "Biz bilan bog'lanish", id: "footer" },
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
          className={`border border-gray-400 rounded-lg px-3 py-1 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
            darkMode
              ? "bg-gray-700/40 text-gray-100"
              : "bg-white/40 text-gray-900"
          }`}
        >
          <option value="UZ">🇺🇿 Uzbek (Lotin)</option>
          <option value="UZC">🇺🇿 Ўзбекча (Кирилл)</option>
          <option value="RU">🇷🇺 Русский</option>
          <option value="EN">🇬🇧 English</option>
        </select>
      </div>
    </header>
  );
}
