"use client";

import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Adjust the path to your Firebase config file
import { collection, getDocs } from "firebase/firestore";

const DisplayPage = () => {
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

                // Combine data based on IDs
                const combinedData = exams.map(exam => {
                    const animal = animals.find(a => a.id === exam.animalId); // Link by animalId
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
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/img/background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
        <div className="max-w-4xl mx-auto p-6 shadow-md rounded-lg bg-red-500 bg-opacity-90">
        <h1 className="text-2xl font-bold text-center mb-6">Data Display</h1>

                {/* Display Client Information */}
                <div className="mb-8">
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
                        <tbody>
                            {data.clients.map(client => (
                                <tr key={client.id}>
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
                        <tbody>
                            {data.animals.map(animal => (
                                <tr key={animal.id}>
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
                <div>
                    <h2 className="text-xl font-semibold mb-4">Physical Examination</h2>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-500">
                                <th className="border p-2">Animal ID</th>
                                <th className="border p-2">Temperature</th>
                                <th className="border p-2">Appearance</th>
                                <th className="border p-2">Eyes</th>
                                <th className="border p-2">Ears</th>
                                <th className="border p-2">Nose</th>
                                <th className="border p-2">Mouth</th>
                                <th className="border p-2">Skin & Hair</th>
                                <th className="border p-2">Lymph Nodes</th>
                                <th className="border p-2">Mucosa</th>
                                <th className="border p-2">Abdomen</th>
                                <th className="border p-2">Thorax</th>
                                <th className="border p-2">Gastro</th>
                                <th className="border p-2">Respiration</th>
                                <th className="border p-2">Bone & Muscle</th>
                                <th className="border p-2">Extremities</th>
                                <th className="border p-2">Urogenital</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.exams.map(exam => (
                                <tr key={exam.id}>
                                    <td className="border p-2">{exam.animalId}</td>
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
            </div>
        </div>
    );
};

export default DisplayPage;
