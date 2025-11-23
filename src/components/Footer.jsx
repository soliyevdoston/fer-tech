import React from "react";
import Logo from "../assets/header-img/Logo.png";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#C7C9BB] text-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo va tavsif */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Fer.Teach Logo" className="w-10 h-10" />
            <h5 className="text-xl font-bold">Fer.Teach</h5>
          </div>
          <p className="text-gray-800 text-sm">
            Ilmiy maqolalar, konferensiya materiallari va tadqiqotlar bazasi.
            Fer.Teach bilan akademik salohiyatingizni oshiring.
          </p>
        </div>

        {/* Tezkor linklar */}
        <div>
          <h6 className="font-semibold mb-4">Tezkor linklar</h6>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Asosiy sahifa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Maqolalar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Arxiv
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                Bog‘lanish
              </a>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h6 className="font-semibold mb-4">Kontakt</h6>
          <p className="text-gray-800 mb-2">Email: solijonovd97@gmail.com</p>
          <p className="text-gray-800 mb-2">Telefon: +998 913257706</p>
          <p className="text-gray-800">Manzil: Farg'ona, O‘zbekiston</p>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h6 className="font-semibold mb-4">Ijtimoiy tarmoqlar</h6>
          <div className="flex space-x-4 text-gray-900">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-700 text-sm">
        © 2025 Fer.Teach. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
