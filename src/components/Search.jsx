import React, { useState } from "react";
import books from "../data/books.json";

export default function Search({ darkMode }) {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  // Barcha maqolalarni bitta arrayga yig'amiz
  const allArticles = books
    .flatMap((book) =>
      book.articles.map((article) => ({
        ...article,
        bookTitle: book.title,
      }))
    )
    .filter((article) =>
      article.name.toLowerCase().includes(query.toLowerCase())
    );

  // Pagination
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = allArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div
      id="search"
      className={`w-full py-10 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-[#DAD7CD] text-gray-900"
      }`}
    >
      {/* SEARCH SECTION */}
      <div id="search" className="container mx-auto px-4 text-center mb-8">
        <h2
          className={`text-3xl font-bold mb-4 transition-colors duration-500 ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Maqola bo‘yicha qidiruv
        </h2>

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1); // Query o'zgarganda page 1 ga qaytadi
          }}
          placeholder="Maqola nomini kiriting..."
          className={`w-full max-w-xl px-4 py-2 rounded-xl border text-lg outline-none transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 text-gray-100 border-gray-600 placeholder-gray-400"
              : "bg-white text-gray-900 border-gray-400 placeholder-gray-500"
          }`}
        />
      </div>

      {/* RESULTS */}
      <div className="container mx-auto px-4">
        {query.length > 0 && (
          <h3 className="text-xl font-semibold mb-6">
            Natijalar: {allArticles.length} ta
          </h3>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentArticles.map((article, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl shadow-md border transition hover:-translate-y-1 hover:shadow-lg ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-[#E6E4D8] border-gray-300"
              }`}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg font-bold mb-1 inline-block hover:underline ${
                  darkMode ? "text-[#7FB0AD]" : "text-[#52796F]"
                }`}
              >
                {article.name}
              </a>

              <p
                className={`text-sm mb-1 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Muallif: {article.author}
              </p>
              <p
                className={`text-sm mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Kitob: {article.bookTitle}
              </p>

              <a
                href={article.downloadLink}
                download
                className="inline-block mt-2 px-4 py-1 bg-[#52796F] text-white rounded-lg text-sm font-medium hover:bg-[#395B58] transition duration-300"
              >
                Yuklab olish
              </a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {allArticles.length > articlesPerPage && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                darkMode
                  ? "bg-gray-700 text-gray-100 disabled:bg-gray-600"
                  : "bg-gray-200 text-gray-900 disabled:bg-gray-300"
              }`}
            >
              Oldingi
            </button>
            <span className="px-3 py-2 font-semibold">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                darkMode
                  ? "bg-gray-700 text-gray-100 disabled:bg-gray-600"
                  : "bg-gray-200 text-gray-900 disabled:bg-gray-300"
              }`}
            >
              Keyingi
            </button>
          </div>
        )}

        {query.length > 0 && allArticles.length === 0 && (
          <p className="text-center mt-6 text-lg text-red-400 font-semibold">
            Hech narsa topilmadi 😕
          </p>
        )}
      </div>
    </div>
  );
}
