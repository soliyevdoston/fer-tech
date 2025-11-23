import React, { useState } from "react";
import books from "../data/books.json";
import imageMap from "../data/imageMap";
import HeroBg from "../assets/main-img/hero-light.jpg";

export default function Main() {
  const [expandedBooks, setExpandedBooks] = useState([]);

  const toggleExpand = (id) => {
    setExpandedBooks((prev) =>
      prev.includes(id) ? prev.filter((bookId) => bookId !== id) : [...prev, id]
    );
  };

  return (
    <main className="bg-[#DAD7CD] min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 mt-8 drop-shadow-lg text-white">
            Ilmiy kitoblar va maqolalar jamlanmasi
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-6 leading-relaxed drop-shadow text-white">
            Fer.Teach platformada siz sun'iy intellekt, data science, texnika va
            boshqa ilmiy yo‘nalishlarda yaratilgan eng so‘nggi maqolalar,
            tadqiqotlar va kitoblarni topishingiz mumkin. Har bir kitob sizning
            bilimlaringizni kengaytiradi va amaliy tajribangizni oshiradi.
          </p>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="container py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
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
                className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-3xl shadow-md bg-[#E6E4D8] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* BOOK IMAGE */}
                <img
                  src={imageMap[book.image]}
                  alt={book.title}
                  className="w-full md:w-1/3 h-auto object-cover rounded-2xl border border-gray-300 shadow-md transition-transform duration-300 hover:scale-105"
                />

                {/* BOOK CONTENT */}
                <div className="md:w-2/3 flex flex-col gap-4 relative pt-10">
                  <a
                    href={book.pageLink}
                    className="absolute top-2 right-2 bg-[#52796F] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md hover:bg-[#395B58] transition-colors duration-300"
                  >
                    Maqola sahifasi
                  </a>

                  <h3 className="text-3xl font-bold text-gray-900">
                    {book.title}
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {book.description}
                  </p>

                  {/* INFO BOX */}
                  <div className="bg-[#DAD7CD] p-4 rounded-xl space-y-2 text-gray-800 text-sm shadow-inner">
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

                  {/* ARTICLES LIST */}
                  <div className="space-y-3">
                    {displayedArticles.map((article, i) => (
                      <div
                        key={i}
                        className="flex flex-col md:flex-row md:justify-between items-start md:items-center p-3 border-l-4 border-[#7A9E9F] bg-[#F0F1EC] rounded-lg hover:bg-[#E0E2D9] transition-all duration-300 shadow-sm"
                      >
                        <div>
                          <a
                            href={article.link}
                            className="text-[#52796F] font-semibold hover:underline text-lg"
                          >
                            {article.name}
                          </a>
                          <p className="text-gray-600 text-sm">
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

                  {/* TOGGLE BUTTON */}
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
