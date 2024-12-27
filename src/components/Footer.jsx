import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaTelegramPlane, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 py-10">
      <div className="text-center text-slate-50 poppins-regular">
        <h3 className="text-lg sm:text-xl font-bold">
          SiWISJA - Jelajahi Jawa Barat
        </h3>
        <p className="mt-2 text-sm sm:text-base">
          Solusi wisata personal dan efektif untuk pengalaman tak terlupakan
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        <div className="bg-slate-800 text-slate-50 px-5 py-3 rounded-lg shadow-lg hover:bg-slate-700 transition duration-300">
          <FontAwesomeIcon icon={faLocationDot} />
          &nbsp;
          <a
            href="https://maps.app.goo.gl/ws26q9kvi9xskd8v9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lokasi
          </a>
        </div>
        <div className="bg-slate-800 text-slate-50 px-5 py-3 rounded-lg shadow-lg hover:bg-slate-700 transition duration-300">
          <FontAwesomeIcon icon={faPhone} />
          &nbsp;
          <a href="tel:+628123456789">+62 812-3456-789</a>
        </div>
        <div className="bg-slate-800 text-slate-50 px-5 py-3 rounded-lg shadow-lg hover:bg-slate-700 transition duration-300">
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp;
          <a href="mailto:info@siwisja.com">info@siwisja.com</a>
        </div>
        <div className="bg-slate-800 text-slate-50 px-5 py-3 rounded-lg shadow-lg hover:bg-slate-700 transition duration-300">
          <FaTelegramPlane/>
          &nbsp;
          <a
            href="https://t.me/SIWISJA_BOT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Bot
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 space-x-5">
        <a
          href="https://instagram.com/siwisja"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-slate-50 p-3 rounded-full shadow-lg hover:bg-pink-500 transition duration-300 transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://facebook.com/siwisja"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-slate-50 p-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/siwisja"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-slate-50 p-3 rounded-full shadow-lg hover:bg-cyan-400 transition duration-300 transform hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>

      <p className="text-center text-slate-500 text-sm mt-10">
        &copy; {new Date().getFullYear()} SiWISJA. Semua hak dilindungi.
      </p>
    </footer>
  );
};

export default Footer;
