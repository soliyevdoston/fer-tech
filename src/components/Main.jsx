import React, { useState } from "react";
import books from "../data/books.json";
import imageMap from "../data/imageMap";
import HeroLight from "../assets/main-img/hero-light.jpg";
import HeroDark from "../assets/main-img/hero-dark.jpg";

export default function Main({ darkMode }) {
  const [expandedBooks, setExpandedBooks] = useState([]);

  const toggleExpand = (id) => {
    setExpandedBooks((prev) =>
      prev.includes(id) ? prev.filter((bookId) => bookId !== id) : [...prev, id]
    );
  };

  return (
    <main
      className={`transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-[#DAD7CD] text-gray-900"
      }`}
    >
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative bg-cover bg-center h-[600px] flex items-center transition-all duration-500"
        style={{
          backgroundImage: `url(${darkMode ? HeroDark : HeroLight})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 mt-8 drop-shadow-lg">
            Ilmiy kitoblar va maqolalar jamlanmasi
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-6 leading-relaxed drop-shadow">
            Fer.Teach platformasi sizga O‘zbekiston va xalqaro ilmiy jurnallar,
            konferensiya materiallari, tadqiqotlar bazasi va ilmiy maqolalarni
            tezkor qidirish imkonini taqdim etadi. Bu yerda siz so‘nggi ilmiy
            yangiliklar, tadqiqot natijalari va akademik ishlar bilan tanishib,
            o‘z bilim doirangizni kengaytirishingiz mumkin. Ilm-fan va ta’lim
            resurslarini bitta platformada toping!
          </p>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section id="maqolalar" className="container py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Ilmiy Maqolalar
        </h2>

        <div className="space-y-14">
          {books.map((book, index) => {
            const isExpanded = expandedBooks.includes(book.id);
            const displayedArticles = isExpanded
              ? book.articles
              : book.articles.slice(0, 3);

            return (
              <div
                key={book.id}
                className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-3xl shadow-md transition-all duration-500 transform hover:-translate-y-1 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } ${darkMode ? "bg-gray-800" : "bg-[#E6E4D8]"}`}
              >
                <img
                  src={imageMap[book.image]}
                  alt={book.title}
                  className="w-full md:w-1/3 h-auto object-cover rounded-2xl border transition duration-300 hover:scale-105 mt-[35px]"
                  style={{ borderColor: darkMode ? "#4B5563" : "#D1D5DB" }}
                />

                <div className="md:w-2/3 flex flex-col gap-4 relative pt-10">
                  <a
                    href={book.pageLink}
                    className="absolute top-2 right-2 bg-[#52796F] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md hover:bg-[#395B58] transition-colors duration-300"
                  >
                    Maqola sahifasi
                  </a>

                  <h3 className="text-3xl font-bold">{book.title}</h3>
                  <p
                    className={`text-justify ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {book.description}
                  </p>
                  {/* INFO BOX */}
                  <div
                    className={`p-4 rounded-xl space-y-2 shadow-inner transition-colors duration-500 ${
                      darkMode
                        ? "bg-gray-700 text-gray-200" // DARK MODE
                        : "bg-[#DAD7CD] text-gray-800" // LIGHT MODE
                    }`}
                  >
                    <p>
                      <span className="font-bold">Срок подачи:</span>{" "}
                      {book.info.deadline}
                    </p>
                    <p>
                      <span className="font-bold">Период рассмотрения:</span>{" "}
                      {book.info.reviewPeriod}
                    </p>
                    <p>
                      <span className="font-bold">Публикация статьи:</span>{" "}
                      {book.info.publicationArticle}
                    </p>
                    <p>
                      <span className="font-bold">Публикация выпуска:</span>{" "}
                      {book.info.publicationIssue}
                    </p>
                    <p>
                      <span className="font-bold">Индексация:</span>{" "}
                      {book.info.indexing}
                    </p>
                    <p>
                      <span className="font-bold">Опубликован:</span>{" "}
                      {book.info.published}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {displayedArticles.map((article, i) => (
                      <div
                        key={i}
                        className={`flex flex-col md:flex-row md:justify-between items-start md:items-center p-3 border-l-4 rounded-lg transition-all duration-300 shadow-sm ${
                          darkMode
                            ? "bg-gray-700 border-[#395B58]"
                            : "bg-[#F0F1EC] border-[#7A9E9F]"
                        }`}
                      >
                        <div>
                          <a
                            href={article.link}
                            className={`font-semibold text-lg hover:underline ${
                              darkMode ? "text-[#7FB0AD]" : "text-[#52796F]"
                            }`}
                          >
                            {article.name}
                          </a>
                          <p
                            className={
                              darkMode
                                ? "text-gray-300 text-sm"
                                : "text-gray-600 text-sm"
                            }
                          >
                            {article.author}
                          </p>
                        </div>
                        <a
                          href={article.downloadLink}
                          download
                          className="mt-2 md:mt-0 px-4 py-1 bg-[#52796F] text-white rounded-lg text-sm font-medium hover:bg-[#395B58] transition duration-300"
                        >
                          Download
                        </a>
                      </div>
                    ))}
                  </div>

                  {book.articles.length > 3 && (
                    <button
                      onClick={() => toggleExpand(book.id)}
                      className="self-start px-5 py-2 bg-gradient-to-r from-[#52796F] to-[#7A9E9F] text-white font-bold rounded-xl hover:from-[#395B58] hover:to-[#52796F] transition-all duration-300 shadow-lg mt-3"
                    >
                      {isExpanded ? "Yopish" : "Batafsil"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
