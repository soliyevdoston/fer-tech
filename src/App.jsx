import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Search from "./components/Search";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-500 min-h-screen">
      <Header darkMode={darkMode} />

      <Main darkMode={darkMode} />
      <Search darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {darkMode ? "🌞 Light" : "🌚 Dark"}
      </button>
    </div>
  );
}
