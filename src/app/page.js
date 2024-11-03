"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi
import { Footer } from "@/app/components/Footer";

export default function Home() {
  const router = useRouter(); // Inisialisasi useRouter

  return (
    <div className="shadow-md rounded-lg bg-gray-900 italic flex flex-col min-h-screen">
      {/* Header Komponen */}
      <header className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-lg py-4 mb-8">
        <div className="container mx-auto flex items-center px-4 space-x-4">
          {/* Judul */}
          <h1 className="font-extrabold text-xl sm:text-3xl truncate flex-1">
            <span className="box-decoration-clone  text-white px-2">
              🐾 Animal Health Record System
            </span>
          </h1>

          {/* Navbar */}
          <nav className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 sm:text-lg max-w-[100px] truncate rounded-full bg-gray-700 hover:bg-gray-500 transition duration-300 ease-in-out text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105">
              About
            </button>
            <button
              className="px-4 py-2 sm:text-lg max-w-[100px] truncate rounded-full bg-gray-700 hover:bg-gray-500 transition duration-300 ease-in-out text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105">
              Contact
            </button>
            <button
              className="px-4 py-2 sm:text-lg max-w-[100px] truncate rounded-full bg-gray-700 hover:bg-gray-500 transition duration-300 ease-in-out text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105">
              LogOut
            </button>
          </nav>
        </div>
      </header>
      <div className="pt-20 flex-grow flex items-center justify-center">
        <div className="text-center max-w-lg p-4">
          <h1 className="text-4xl font-bold text-white mb-4">Selamat Datang di Sistem Catatan Kesehatan Hewan</h1>
          <p className="text-lg text-white mb-6">
            Sistem ini memungkinkan Anda untuk mengelola catatan kesehatan hewan dengan mudah.
            Anda dapat menginput data baru atau melihat catatan yang sudah ada kapan saja.
          </p>
          <p className="text-lg text-white mb-4">
            Klik tombol di bawah untuk memulai!
          </p>
          <button
            className="px-4 py-2 sm:text-lg max-w-[150px] truncate rounded-full bg-gray-700  hover:bg-blue-500 transition duration-300 ease-in-out text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105"
            onClick={() => router.push("/input")}
          >
            Mulai
          </button>
        </div>


      </div>
      <footer className=" bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg py-4 mb-8 text-center mt-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Klinik Hewan. Hak Cipta Dilindungi.
        </p>
        <p className="text-xs">
          Dibuat dengan Next.js dan Firebase | Desain oleh Pulau ES
        </p>
      </footer>
    </div>
  );
};


