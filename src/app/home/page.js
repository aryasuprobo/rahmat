"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter untuk navigasi
import Footer from "../components/Footer"; // Import komponen Footer

const HomePage = () => {
    const router = useRouter(); // Inisialisasi useRouter
    const [bgStyle, setBgStyle] = useState({});

    useEffect(() => {
        // Set background style hanya pada sisi klien
        setBgStyle({
            backgroundImage: `url('/img/home.jpg')`, // Path ke gambar di folder public
            backgroundSize: 'cover', // Supaya gambar menutupi seluruh background
            backgroundPosition: 'center', // Menjaga gambar di tengah
            backgroundRepeat: 'no-repeat', // Tidak mengulang gambar
        });
    }, []);

    return (
        <div
            className="flex flex-col min-h-screen"
            style={bgStyle} // Apply background style di sini
        >
            {/* Header Komponen */}
            <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg py-4">
                <div className="container mx-auto flex items-center px-4 space-x-4">
                    {/* Judul */}
                    <h1 className="font-extrabold text-xl sm:text-3xl truncate flex-1">
                        <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
                            🐾 Animal Health Record System
                        </span>
                    </h1>

                    {/* Navbar */}
                    <nav className="flex justify-end space-x-4">
                        <button
                            className="px-4 py-2 sm:text-lg max-w-[100px] truncate rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105">
                            About
                        </button>
                        <button
                            className="px-4 py-2 sm:text-lg max-w-[100px] truncate rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105">
                            Contact
                        </button>
                        <button
                            className="px-4 py-2 sm:text-lg max-w-[100px] truncate rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105">
                            LogOut
                        </button>
                    </nav>
                </div>
            </header>

            {/* Konten utama */}
            <div className="flex-grow flex items-center justify-center pt-20">
                <div className="text-center max-w-lg p-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Selamat Datang di Sistem Catatan Kesehatan Hewan</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Sistem ini memungkinkan Anda untuk mengelola catatan kesehatan hewan dengan mudah.
                        Anda dapat menginput data baru atau melihat catatan yang sudah ada kapan saja.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Klik tombol di bawah untuk memulai!
                    </p>
                    <button
                        className="px-4 py-2 sm:text-lg max-w-[150px] truncate rounded-full bg-gradient-to-r from-purple-700 to-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out text-white font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105"
                        onClick={() => router.push("/input")}
                    >
                        Mulai
                    </button>
                </div>
            </div>

            {/* Footer di bawah layar */}
            <footer className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 text-center mt-auto">
                <p>© 2024 Klinik Hewan. Hak Cipta Dilindungi.</p>
                <p>Dibuat dengan Next.js dan Firebase | Desain oleh Pulau ES</p>
            </footer>
        </div>
    );
};

export default HomePage;
