import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
  return (
    <main id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="relative flex flex-col gap-8 sm:flex-row-reverse justify-center items-center sm:px-20 py-10 min-h-screen">
        {/* Section Gambar */}
        <div className="xl:w-1/2 flex justify-center">
          <img
            src="../assets/images/siwisja.png"
            alt="SiWISJA"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain mx-auto shadow-md rounded-lg"
          />
        </div>

        {/* Section Konten */}
        <div className="sm:w-1/2 px-6 sm:px-10">
          <h1 className="text-center sm:text-left poppins-bold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400 mb-4">
            SiWISJA menggunakan teknologi canggih untuk menciptakan solusi wisata yang lebih personal dan efektif bagi Anda
          </h1>
          <ul className="flex flex-col mt-8 poppins-bold text-gray-700 dark:text-gray-300 gap-3 w-full text-base sm:text-lg">
            <li className="hover:text-teal-500 transition duration-300">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Rekomendasi Tempat Wisata
            </li>
            <li className="hover:text-teal-500 transition duration-300">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Informasi Lengkap Destinasi
            </li>
            <li className="hover:text-teal-500 transition duration-300">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Pencarian Berbasis Pertanyaan Natural
            </li>
            <li className="hover:text-teal-500 transition duration-300">
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;&nbsp;Interaksi Ramah dan Respons Cepat
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default About;
