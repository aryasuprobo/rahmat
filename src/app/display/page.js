"use client";

import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Footer from "../components/Footer";


const DisplayPage = () => {
    const router = useRouter(); // Inisialisasi useRouter

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clientSnapshot = await getDocs(collection(db, "clients"));
                const animalSnapshot = await getDocs(collection(db, "animals"));
                const physicalExamSnapshot = await getDocs(collection(db, "physical_exams"));

                const clients = clientSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const animals = animalSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const exams = physicalExamSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                const combinedData = exams.map(exam => {
                    const animal = animals.find(a => a.id === exam.animalId);
                    return { ...exam, animalId: animal ? animal.id : null, animalName: animal ? animal.name : "Unknown" };
                });

                setData({ clients, animals, exams: combinedData });
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <center>
                <p>Loading data...</p>
            </center>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-stone-200	 italic   ">
            <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg py-4">
                <div className="container mx-auto flex justify-between items-center flex-wrap px-4 space-x-4">
                    <h1 className="font-extrabold text-xl sm:text-3xl truncate">
                        {/* <span className="text-yellow-300">🐾</span> Animal Health Record System */}
                        <span class="box-decoration-clone  text-white px-2 ...">
                            🐾 Animal Health Record System
                        </span>
                    </h1>
                    <nav className="flex space-x-4 ml-auto">

                        <button
                            className="px-4 py-2 sm:text-lg  truncate rounded-full bg-gray-700  hover:bg-blue-100 transition duration-300 ease-in-out text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105"
                            onClick={() => router.push("/input")}
                        >
                            Input Data
                        </button>
                    </nav>
                </div>
            </header>

            <main className="flex-grow mx-auto p-6 shadow-md rounded-lg bg-gray-400 text-black bg-opacity-90 mt-24">
                <h1 className="text-2xl font-bold text-center mb-6">Data Display</h1>

                {/* Display Client Information */}
                <div className="mb-8 ">
                    <h2 className="text-xl font-semibold mb-4">Client Information</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-500">
                                <th className="border p-2">ID</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Address</th>
                                <th className="border p-2">Phone</th>
                                <th className="border p-2">Exam Date</th>
                                <th className="border p-2">DVM</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.clients.map(client => (
                                <tr key={`client-${client.id}`}>
                                    <td className="border p-2">{client.id}</td>
                                    <td className="border p-2">{client.name}</td>
                                    <td className="border p-2">{client.address}</td>
                                    <td className="border p-2">{client.phone}</td>
                                    <td className="border p-2">{client.examDate}</td>
                                    <td className="border p-2">{client.dvm}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Display Animal Information */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Animal Information</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-500">
                                <th className="border p-2">ID</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Species</th>
                                <th className="border p-2">Breed</th>
                                <th className="border p-2">Weight</th>
                                <th className="border p-2">Age</th>
                                <th className="border p-2">Gender</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.animals.map(animal => (
                                <tr key={`animal-${animal.id}`}>
                                    <td className="border p-2">{animal.id}</td>
                                    <td className="border p-2">{animal.name}</td>
                                    <td className="border p-2">{animal.species}</td>
                                    <td className="border p-2">{animal.breed}</td>
                                    <td className="border p-2">{animal.weight}</td>
                                    <td className="border p-2">{animal.age}</td>
                                    <td className="border p-2">{animal.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Display Physical Examination Information */}
                <div className="overflow-x-auto mb-8">
                    <h2 className="text-xl font-semibold mb-4">Physical Examination</h2>
                    <table className="min-w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-500">
                                <th className="border p-2 w-1/12">Suhu</th>
                                <th className="border p-2 w-1/12">Penampilan</th>
                                <th className="border p-2 w-1/12">Mata</th>
                                <th className="border p-2 w-1/12">Telinga</th>
                                <th className="border p-2 w-1/12">Hidung</th>
                                <th className="border p-2 w-1/12">Mulut</th>
                                <th className="border p-2 w-1/12">Kulit dan Rambut</th>
                                <th className="border p-2 w-1/12">Limfonodus</th>
                                <th className="border p-2 w-1/12">Mukosa</th>
                                <th className="border p-2 w-1/12">Abdomen</th>
                                <th className="border p-2 w-1/12">Thoraks</th>
                                <th className="border p-2 w-1/12">Gastro</th>
                                <th className="border p-2 w-1/12">Respirasi</th>
                                <th className="border p-2 w-1/12">Tulang dan Otot</th>
                                <th className="border p-2 w-1/12">Ekstremitas</th>
                                <th className="border p-2 w-1/12">Urogenital</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {data.exams.map((exam, index) => (
                                <tr key={`exam-${exam.id}-${index}`}>
                                    <td className="border p-2">{exam.temperature}</td>
                                    <td className="border p-2">{exam.appearance}</td>
                                    <td className="border p-2">{exam.eyes}</td>
                                    <td className="border p-2">{exam.ears}</td>
                                    <td className="border p-2">{exam.nose}</td>
                                    <td className="border p-2">{exam.mouth}</td>
                                    <td className="border p-2">{exam.skinHair}</td>
                                    <td className="border p-2">{exam.lymphNodes}</td>
                                    <td className="border p-2">{exam.mucosa}</td>
                                    <td className="border p-2">{exam.abdomen}</td>
                                    <td className="border p-2">{exam.thorax}</td>
                                    <td className="border p-2">{exam.gastro}</td>
                                    <td className="border p-2">{exam.respiration}</td>
                                    <td className="border p-2">{exam.boneMuscle}</td>
                                    <td className="border p-2">{exam.extremities}</td>
                                    <td className="border p-2">{exam.urogenital}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </main>
            <footer className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 text-center mt-20">
                <p>© 2024 Klinik Hewan. Hak Cipta Dilindungi.</p>
                <p>Dibuat dengan Next.js dan Firebase | Desain oleh Pulau ES</p>
            </footer>

        </div>
    );
};

export default DisplayPage;
