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
        <div className="flex flex-col min-h-screen">
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg py-4">
        <div className="container mx-auto flex items-center px-4 space-x-4">
            <h1 className="font-extrabold text-xl sm:text-3xl truncate flex-1">
                <span className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
                    🐾 Animal Health Record System
                </span>
            </h1>
            <nav className="flex space-x-4 ml-auto">
                <button
                    className="px-4 py-2 sm:text-lg rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out text-white text-lg font-medium shadow-md hover:shadow-lg focus:outline-none hover:scale-105"
                    onClick={() => router.push("/display")}
                >
                    View All Data
                </button>
            </nav>
        </div>
    </header>

    {/* Main Content */}
    <div className="flex mt-16 bg-white">
        {/* Image Section */}
        <div
    className="bg-white-900 italic w-1/2"
    style={{
        backgroundImage: `url('/img/input.jpg')`,
        backgroundSize: "75%", // Control the size of the background image
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "fixed",
        height: "100vh",
        transform: "rotate(90deg)", // Rotate the image 90 degrees
        marginLeft: "-370px",
        marginBottom: "70px",
        marginTop: "30px",
    }}
></div>


        {/* Form Section */}
        <div className="w-1/2 p-8" style={{ marginLeft: "600px" }}> {/* Added inline style for margin-left */}
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Animal Data Input Form</h1>
    <form onSubmit={handleSubmit} className="space-y-8">
        <div className="max-w-2xl mx-auto p-4 bg-gray-700 rounded-md">
            {/* Client Information */}
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4 text-white">Client Information</h1>
                <div className="grid grid-cols-1 gap-4">
                    <label className="label-field text-white">ID Klien</label>
                    <input className="input-field rounded-md text-black" type="text" name="id" placeholder="" value={client.id} onChange={(e) => handleInputChange(e, setClient, client)} />

                    <label className="label-field text-white">Name</label>
                    <input className="input-field rounded-md text-black" type="text" name="name" placeholder="" value={client.name} onChange={(e) => handleInputChange(e, setClient, client)} />

                    <label className="label-field text-white">Address</label>
                    <input className="input-field rounded-md text-black" type="text" name="address" placeholder="" value={client.address} onChange={(e) => handleInputChange(e, setClient, client)} />

                    <label className="label-field text-white">Phone</label>
                    <input className="input-field rounded-md text-black" type="text" name="phone" placeholder="" value={client.phone} onChange={(e) => handleInputChange(e, setClient, client)} />

                    <label className="label-field text-white">Exam Date</label>
                    <input className="input-field rounded-md text-black" type="date" name="examDate" placeholder="" value={client.examDate} onChange={(e) => handleInputChange(e, setClient, client)} />

                    <label className="label-field text-white">DVM</label>
                    <input className="input-field rounded-md text-black" type="text" name="dvm" placeholder="" value={client.dvm} onChange={(e) => handleInputChange(e, setClient, client)} />
                </div>
            </div>


           {/* Animal Information */}
<div className="p-4">
    <h1 className="text-xl font-bold mb-4 text-white">Animal Information</h1>
    <div className="grid grid-cols-1 gap-4">
        <label className="label-field text-white">ID Hewan</label>
        <input 
            className="input-field rounded-md text-black" 
            type="text" 
            name="id" 
            placeholder="ID Hewan" 
            value={animal.id} 
            onChange={(e) => handleInputChange(e, setAnimal, animal)} 
        />

        <label className="label-field text-white">Name</label>
        <input 
            className="input-field rounded-md text-black" 
            type="text" 
            name="name" 
            placeholder="Nama Hewan" 
            value={animal.name} 
            onChange={(e) => handleInputChange(e, setAnimal, animal)} 
        />

        <label className="label-field text-white">Species</label>
        <input 
            className="input-field rounded-md text-black" 
            type="text" 
            name="species" 
            placeholder="Spesies" 
            value={animal.species} 
            onChange={(e) => handleInputChange(e, setAnimal, animal)} 
        />

        <label className="label-field text-white">Breed</label>
        <input 
            className="input-field rounded-md text-black" 
            type="text" 
            name="breed" 
            placeholder="Ras" 
            value={animal.breed} 
            onChange={(e) => handleInputChange(e, setAnimal, animal)} 
        />

        <label className="label-field text-white">Weight (kg)</label>
        <input 
            className="input-field rounded-md text-black" 
            type="text" 
            name="weight" 
            placeholder="Berat (kg)" 
            value={animal.weight} 
            onChange={(e) => handleInputChange(e, setAnimal, animal)} 
        />

        <label className="label-field text-white">Age</label>
        <input 
            className="input-field rounded-md text-black" 
            type="text" 
            name="age" 
            placeholder="Umur" 
            value={animal.age} 
            onChange={(e) => handleInputChange(e, setAnimal, animal)} 
        />

        <label className="label-field text-white">Gender</label>
        <select 
            className="input-field rounded-md text-black" 
            name="gender" 
            value={animal.gender} 
            onChange={(e) => handleInputChange(e, setAnimal, animal)}
        >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="Male">Jantan</option>
            <option value="Female">Betina</option>
        </select>
    </div>
</div>


            {/* Physical Examination */}
            <div className="p-4">
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

            <button type="submit" className="w-full bg-blue-700 hover:bg-gray-800 font-semibold py-2 rounded-md">Save</button>
        </div>
    </form>
</div>

    </div>

    <footer className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 text-center mt-20">
        <p>© 2024 Klinik Hewan. Hak Cipta Dilindungi.</p>
        <p>Dibuat dengan Next.js dan Firebase | Desain oleh Pulau ES</p>
    </footer>
</div>


    );
};

export default InputPage;
