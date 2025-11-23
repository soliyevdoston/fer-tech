import React from "react";
import Logo from "../assets/header-img/Logo.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#DAD7CD] backdrop-blur-md shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition">
        <img src={Logo} alt="Logo" className="w-11 h-11" />
        <h5 className="text-2xl font-bold tracking-wide text-gray-900">
          Fer.Teach
        </h5>
      </div>

      {/* Navbar */}
      <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
        {[
          { label: "Asosoiy sahifa", link: "#" },
          { label: "Maqolalar", link: "#" },
          { label: "Arxiv", link: "#" },
          { label: "Biz bilan bog'lanish", link: "#" },
        ].map((item, i) => (
          <a key={i} href={item.link} className="relative group transition">
            <span className="group-hover:text-black">{item.label}</span>

            {/* underline animation */}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </nav>

      {/* Language Selector */}
      <div>
        <select className="border border-gray-400 rounded-lg px-3 py-1 bg-white/40 backdrop-blur-sm shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none">
          <option value="UZ">🇺🇿 Uzbek</option>
          <option value="RU">🇷🇺 Русский</option>
          <option value="EN">🇬🇧 English</option>
        </select>
      </div>
    </header>
  );
}
