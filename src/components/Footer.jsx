import React from "react";
import Logo from "../assets/header-img/Logo.png";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer({ darkMode }) {
  const { t } = useTranslation();

  const iconStyle =
    "w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300";

  return (
    <footer
      id="footer"
      className={`pt-12 pb-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-[#C7C9BB] text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo va tavsif */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt={t("brand") + " Logo"} className="w-10 h-10" />
            <h5 className="text-xl font-bold">{t("brand")}</h5>
          </div>
          <p
            className={
              darkMode ? "text-gray-300 text-sm" : "text-gray-800 text-sm"
            }
          >
            {t("footer.description")}
          </p>
        </div>

        {/* Tezkor linklar */}
        <div>
          <h6 className="font-semibold mb-4">{t("footer.quickLinks")}</h6>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-blue-600 transition-colors duration-300"
                href="#"
              >
                {t("footer.home")}
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-600 transition-colors duration-300"
                href="#"
              >
                {t("footer.articles")}
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-600 transition-colors duration-300"
                href="#"
              >
                {t("footer.search")}
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-600 transition-colors duration-300"
                href="#"
              >
                {t("footer.advice")}
              </a>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h6 className="font-semibold mb-4">{t("footer.contact")}</h6>
          <p
            className={
              darkMode ? "text-gray-300 text-sm" : "text-gray-800 text-sm"
            }
          >
            {t("footer.email")}
          </p>
          <p
            className={
              darkMode ? "text-gray-300 text-sm" : "text-gray-800 text-sm"
            }
          >
            {t("footer.phone")}
          </p>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h6 className="font-semibold mb-4">{t("footer.social")}</h6>
          <div className="flex space-x-4">
            <a
              href="#"
              className={`${iconStyle} bg-[#E0F7FA] text-[#00838F] hover:bg-[#00838F] hover:text-white`}
            >
              <FaTelegramPlane />
            </a>
            <a
              href="#"
              className={`${iconStyle} bg-[#E3F2FD] text-[#1565C0] hover:bg-[#1565C0] hover:text-white`}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className={`${iconStyle} bg-[#E1F5FE] text-[#0277BD] hover:bg-[#0277BD] hover:text-white`}
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className={`${iconStyle} bg-[#F1F8E9] text-[#689F38] hover:bg-[#689F38] hover:text-white`}
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-700 dark:text-gray-400 text-sm">
        © 2025 {t("brand")}. {t("footer.rights")}
      </div>
    </footer>
  );
}
