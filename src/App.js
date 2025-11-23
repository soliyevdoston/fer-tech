import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode classni html elementga qo‘shish/olib tashlash
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // <html> ga qo‘shiladi
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-[#DAD7CD] dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main section, darkMode prop orqali yuboriladi */}
      <Main darkMode={darkMode} />

      {/* Footer */}
      <Footer />

      {/* Dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 left-6 z-50 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
