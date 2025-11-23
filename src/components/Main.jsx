import React from "react";
import HeroBg from "../assets/main-img/bg-img-hero.jpg";
import img1 from "../assets/main-img/resarch.png";
import enginering from "../assets/main-img/enginering.jpg";
import iomc from "../assets/main-img/iomc-2025.png";
import bulletin1 from "../assets/main-img/bulletin-multidisciplinary.png";
import bulletin2 from "../assets/main-img/bulletin-technical.png";

const books = [
  {
    id: 1,
    title: "Sun'iy Intellekt Asoslari",
    image: img1,
    description:
      "AI bo‘yicha asosiy tushunchalar va ilmiy tadqiqotlar jamlanmasi.",
    articles: [
      { name: "AI etikasi", link: "#" },
      { name: "Mashina o‘rganish asoslari", link: "#" },
      { name: "Neyron tarmoqlar tarixi", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Ma'lumotlar Tahlili",
    image: enginering,
    description: "Data Science asoslari va amaliy tahlil metodlari.",
    articles: [
      { name: "Pythonda Data Cleaning", link: "#" },
      { name: "Statistik modellash", link: "#" },
      { name: "Big Data texnologiyalari", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Algoritmlar",
    image: iomc,
    description: "Algoritmlar nazariyasi va amaliy yechimlari.",
    articles: [
      { name: "Greedy algoritmlar", link: "#" },
      { name: "DP: Dynamic Programming", link: "#" },
      { name: "Graf nazariyasi", link: "#" },
    ],
  },
  {
    id: 4,
    title: "Kibern xavfsizlik",
    image: bulletin1,
    description: "Zamonaviy xavfsizlik texnologiyalari va himoya usullari.",
    articles: [
      { name: "Web xavfsizlik asoslari", link: "#" },
      { name: "SQL Injection tushuntirishi", link: "#" },
      { name: "Xesh algoritmlar sharhi", link: "#" },
    ],
  },
  {
    id: 5,
    title: "Dasturlash Asoslari",
    image: bulletin2,
    description: "Boshlang‘ich dasturlash metodlari va amaliy loyihalar.",
    articles: [
      { name: "OOP tushunchalari", link: "#" },
      { name: "JavaScript fundamentalari", link: "#" },
      { name: "Backend arxitektura", link: "#" },
    ],
  },
];

export default function Main() {
  return (
    <main className="bg-[#DAD7CD] min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[600px] flex items-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container text-center text-white relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-8">
            Ilmiy kitoblar va maqolalar jamlanmasi
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Siz uchun ilmiy kitoblar, maqolalar va tadqiqotlar bir joyda. Har
            bir kitob bo‘yicha batafsil ma’lumot va tegishli maqolalar taqdim
            etiladi.
          </p>
        </div>
      </section>

      {/* ================= BOOK CARDS ================= */}
      <section className="container py-20 space-y-10">
        {books.map((book, index) => (
          <div
            key={book.id}
            className={`relative p-[3px] rounded-2xl
              bg-gradient-to-r from-[#C7C9BB] via-[#DAD7CD] to-[#D2D4C8]
              bg-[length:200%_200%] animate-border
              shadow-lg group
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} 
              flex flex-col items-center transition-all duration-300`}
          >
            <div className="backdrop-blur-xl bg-white/20 group-hover:bg-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center w-full transition-all duration-300 hover:brightness-95">
              {/* BOOK IMAGE */}
              <img
                src={book.image}
                alt={book.title}
                className="w-full md:w-1/2 h-64 object-contain rounded-xl mb-4 md:mb-0 bg-gray-100"
              />

              {/* TEXT CONTENT */}
              <div className="md:w-1/2 md:px-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {book.title}
                </h3>
                <p className="text-gray-700 mb-4">{book.description}</p>

                <h4 className="font-semibold text-gray-900 mb-2">Maqolalar:</h4>
                <ul className="space-y-1">
                  {book.articles.map((article, i) => (
                    <li key={i}>
                      <a
                        href={article.link}
                        className="text-blue-700 hover:underline"
                      >
                        • {article.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
