"use client";

import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Footer from "../components/Footer";


const InputPage = () => {
    const router = useRouter(); // Initialize useRouter

    const [client, setClient] = useState({
        id: "",
        name: "",
        address: "",
        phone: "",
        examDate: "",
        dvm: ""
    });

    const [animal, setAnimal] = useState({
        id: "",
        name: "",
        species: "",
        breed: "",
        weight: "",
        age: "",
        gender: ""
    });

    const [physicalExam, setPhysicalExam] = useState({
        temperature: "",
        appearance: "",
        eyes: "",
        ears: "",
        nose: "",
        mouth: "",
        skinHair: "",
        lymphNodes: "",
        mucosa: "",
        abdomen: "",
        thorax: "",
        gastro: "",
        respiration: "",
        boneMuscle: "",
        extremities: "",
        urogenital: ""
    });


    const [customValues, setCustomValues] = useState({});



    const physicalExamFields = [
        { name: "temperature", label: "Suhu" },
        { name: "appearance", label: "Penampilan" },
        { name: "eyes", label: "Mata" },
        { name: "ears", label: "Telinga" },
        { name: "nose", label: "Hidung" },
        { name: "mouth", label: "Mulut" },
        { name: "skinHair", label: "Kulit dan Rambut" },
        { name: "lymphNodes", label: "Limfonodus" },
        { name: "mucosa", label: "Mukosa" },
        { name: "abdomen", label: "Abdomen" },
        { name: "thorax", label: "Thoraks" },
        { name: "gastro", label: "Gastro" },
        { name: "respiration", label: "Respirasi" },
        { name: "boneMuscle", label: "Tulang dan Otot" },
        { name: "extremities", label: "Ekstremitas" },
        { name: "urogenital", label: "Urogenital" }
    ];

    const handleInputChange = (e, setState, state, fieldName = null) => {
        setState((prevState) => ({
            ...prevState,
            [fieldName || e.target.name]: e.target.value
        }));
    };

    const handlePhysicalExamChange = (e, fieldName) => {
        const { value } = e.target;
        setPhysicalExam((prev) => ({
            ...prev,
            [fieldName]: value === "Custom" ? "" : value
        }));
        if (value === "Custom") {
            setCustomValues((prev) => ({ ...prev, [fieldName]: true }));
        } else {
            setCustomValues((prev) => ({ ...prev, [fieldName]: false }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi apakah semua field telah diisi
        const isClientComplete = Object.values(client).every((value) => value.trim() !== "");
        const isAnimalComplete = Object.values(animal).every((value) => value.trim() !== "");
        const isPhysicalExamComplete = Object.values(physicalExam).every((value) => value.trim() !== "");

        if (!isClientComplete || !isAnimalComplete || !isPhysicalExamComplete) {
            alert("Mohon lengkapi semua field.");
            return;
        }

        try {
            await addDoc(collection(db, "clients"), client);
            await addDoc(collection(db, "animals"), animal);
            await addDoc(collection(db, "physical_exams"), physicalExam);

            alert("Data berhasil disimpan!");
            // router.push("/display");
        } catch (error) {
            console.error("Error menyimpan data: ", error);
            alert("Gagal menyimpan data");
        }
    };


    return (
        <div className=" bg-gray-900 italic  ">
            {/* Header Component */}
            <header className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-lg py-4 mb-8">
                <div className="container mx-auto flex justify-between items-center flex-wrap px-4 space-x-4">
                    <h1 className="font-extrabold text-xl sm:text-3xl truncate">
                        {/* <span className="text-yellow-300">🐾</span> Animal Health Record System */}
                        <span class="box-decoration-clone  text-white px-2 ...">
                            🐾 Animal Health Record System
                        </span>
                    </h1>
                    <nav className="flex space-x-4 ml-auto">

                        <button
                            className="px-4 py-2 sm:text-lg  truncate rounded-full bg-gray-700  hover:bg-gradient-to-r from-blue-700 to-fuchsia-700 transition duration-300 ease-in-out text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105"
                            onClick={() => router.push("/display")}
                        >
                            View All Data
                        </button>
                    </nav>
                </div>
            </header>
            <div className="max-w-2xl mx-auto p-4 ">

                <br></br><br></br><br></br>
                <h1 className="text-2xl font-bold text-center mb-6">Animal Data Input Form</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="max-w-2xl mx-auto p-4 bg-contain  bg-gray-700 rounded-md">
                        {/* Client Information */}
                        <div className="max-w-2xl mx-auto p-4 ">
                            <h1 className="text-xl font-bold mb-4 text-white">Client Information</h1>
                            <div className="grid grid-cols-1 gap-4">

                                <label className="label-field  text-white">ID Klien</label>
                                <input className="input-field rounded-md text-black" type="text" name="id" placeholder="" value={client.id} onChange={(e) => handleInputChange(e, setClient, client)} />

                                <label className="label-field  text-white">Name</label>
                                <input className="input-field rounded-md text-black" type="text" name="name" placeholder="" value={client.name} onChange={(e) => handleInputChange(e, setClient, client)} />

                                <label className="label-field  text-white">Alamat</label>
                                <input className="input-field rounded-md text-black" type="text" name="address" placeholder="" value={client.address} onChange={(e) => handleInputChange(e, setClient, client)} />

                                <label className="label-field  text-white">No hp</label>
                                <input className="input-field rounded-md text-black" type="text" name="phone" placeholder="" value={client.phone} onChange={(e) => handleInputChange(e, setClient, client)} />

                                <label className="label-field  text-white">Tanggal pemeriksaan</label>
                                <input className="input-field rounded-md text-black" type="date" name="examDate" value={client.examDate} onChange={(e) => handleInputChange(e, setClient, client)} />

                                <label className="label-field  text-white">DVM</label>
                                <input className="input-field rounded-md text-black" type="text" name="dvm" placeholder="" value={client.dvm} onChange={(e) => handleInputChange(e, setClient, client)} />
                            </div>
                        </div>

                        <br></br><br></br>

                        {/* Animal Informations */}
                        <div className="max-w-2xl mx-auto p-4 ">
                            <h1 className="text-xl font-bold mb-4 text-white">Animal Information</h1>
                            <div className="grid grid-cols-1 gap-4">
                                <label className="label-field text-white">ID Hewan</label>
                                <input className="input-field rounded-md text-black" type="text" name="id" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                                <label className="label-field text-white">Nama</label>
                                <input className="input-field rounded-md text-black" type="text" name="name" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                                <label className="label-field text-white">Species</label>
                                <input className="input-field rounded-md text-black" type="text" name="species" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                                <label className="label-field text-white">Breed</label>
                                <input className="input-field rounded-md text-black" type="text" name="breed" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                                <label className="label-field text-white">Berat Badan</label>
                                <input className="input-field rounded-md text-black" type="text" name="weight" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                                <label className="label-field text-white">Umur</label>
                                <input className="input-field rounded-md text-black" type="number" name="age" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                                <label className="label-field text-white">Gender</label>
                                <select className="input-field rounded-md text-black" name="gender" onChange={(e) => handleInputChange(e, setAnimal, animal)}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <br></br><br></br>
                        {/* Physical  */}

                        <div className="max-w-2xl mx-auto p-4 ">
                            <h1 className="text-xl font-bold mb-4 text-white">Physical Examination</h1>
                            <div className="grid grid-cols-1 gap-6">
                                {physicalExamFields.map((field) => (
                                    <div key={field.name} className="space-y-2">
                                        <label className="label-field text-white">{field.label}</label>
                                        <select
                                            className="input-field rounded-md text-black w-full"
                                            value={physicalExam[field.name]}
                                            onChange={(e) => handlePhysicalExamChange(e, field.name)}
                                        >
                                            <option value="">Pilih kondisi {field.label}</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Custom">Abnormal</option>
                                        </select>

                                        {customValues[field.name] && (
                                            <input
                                                type="text"
                                                placeholder={`Masukkan kondisi...`}
                                                className="input-field rounded-md text-black w-full mt-2"
                                                value={physicalExam[field.name]}
                                                onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam, field.name)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <br></br>

                        <button type="submit" className="w-full bg-blue-700 hover:bg-gray-800  font-semibold py-2 rounded-md ">Save</button>


                    </div>




                </form>

            </div>
            <Footer />
        </div>

    );
};

export default InputPage;
