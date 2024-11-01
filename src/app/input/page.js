"use client";

import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

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

    const handleInputChange = (e, setState, state) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "clients"), client);
            await addDoc(collection(db, "animals"), animal);
            await addDoc(collection(db, "physical_exams"), physicalExam);

            alert("Data saved successfully!");
        } catch (error) {
            console.error("Error saving data: ", error);
            alert("Error saving data");
        }
    };

    return (
        <div className=" mx-auto p-6 shadow-md rounded-lg bg-gradient-to-r from-blue-700 to-violet-700 italic">
            <h1 className="text-2xl font-bold text-center mb-6">Animal Data Input Form</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="max-w-2xl mx-auto">
                    {/* Client Information */}
                    <div>
                        <h1 className="text-xl font-bold mb-4">Client Information</h1>
                        <div className="grid grid-cols-1 gap-4">

                            <label className="label-field">ID Klien</label>
                            <input className="input-field rounded-md text-black" type="text" name="id" placeholder="" onChange={(e) => handleInputChange(e, setClient, client)} />

                            <label className="label-field">Name</label>
                            <input className="input-field rounded-md text-black" type="text" name="name" placeholder="" onChange={(e) => handleInputChange(e, setClient, client)} />

                            <label className="label-field">Alamat</label>
                            <input className="input-field rounded-md text-black" type="text" name="address" placeholder="" onChange={(e) => handleInputChange(e, setClient, client)} />

                            <label className="label-field">No hp</label>
                            <input className="input-field rounded-md text-black" type="text" name="phone" placeholder="" onChange={(e) => handleInputChange(e, setClient, client)} />

                            <label className="label-field">Tanggal pemeriksaan</label>
                            <input className="input-field rounded-md text-black" type="date" name="examDate" onChange={(e) => handleInputChange(e, setClient, client)} />

                            <label className="label-field">DVM</label>
                            <input className="input-field rounded-md text-black" type="text" name="dvm" placeholder="" onChange={(e) => handleInputChange(e, setClient, client)} />
                        </div>
                    </div>
                    <br></br><br></br>
                    {/* Animal Information */}
                    <div>
                        <h1 className="text-xl font-bold mb-4">Animal Information</h1>
                        <div className="grid grid-cols-1 gap-4">
                            <label className="label-field">ID Hewan</label>
                            <input className="input-field rounded-md text-black" type="text" name="id" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                            <label className="label-field">Nama</label>
                            <input className="input-field rounded-md text-black" type="text" name="name" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                            <label className="label-field">Species</label>
                            <input className="input-field rounded-md text-black" type="text" name="species" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                            <label className="label-field">Breed</label>
                            <input className="input-field rounded-md text-black" type="text" name="breed" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                            <label className="label-field">Berat Badan</label>
                            <input className="input-field rounded-md text-black" type="text" name="weight" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                            <label className="label-field">Umur</label>
                            <input className="input-field rounded-md text-black" type="number" name="age" placeholder="" onChange={(e) => handleInputChange(e, setAnimal, animal)} />
                            <label className="label-field">Gender</label>
                            <select className="input-field rounded-md text-black" name="gender" onChange={(e) => handleInputChange(e, setAnimal, animal)}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <br></br><br></br>
                    {/* Physical Examination */}
                    <div>
                        <h1 className="text-xl font-bold mb-4">Physical Examination</h1>
                        <div className="grid grid-cols-1 gap-4">
                            <label className="label-field">Suhu</label>
                            <input className="input-field rounded-md text-black" type="text" name="temperature" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Penampilan</label>
                            <input className="input-field rounded-md text-black" type="text" name="appearance" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Mata</label>
                            <input className="input-field rounded-md text-black" type="text" name="eyes" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Telinga</label>
                            <input className="input-field rounded-md text-black" type="text" name="ears" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Hidung</label>
                            <input className="input-field rounded-md text-black" type="text" name="nose" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Mulut</label>
                            <input className="input-field rounded-md text-black" type="text" name="mouth" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Kulit dan Rambut</label>
                            <input className="input-field rounded-md text-black" type="text" name="skinHair" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Limfonodus</label>
                            <input className="input-field rounded-md text-black" type="text" name="lymphNodes" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Mukosa</label>
                            <input className="input-field rounded-md text-black" type="text" name="mucosa" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Abdomen</label>
                            <input className="input-field rounded-md text-black" type="text" name="abdomen" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Thoraks</label>
                            <input className="input-field rounded-md text-black" type="text" name="thorax" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Gastro</label>
                            <input className="input-field rounded-md text-black" type="text" name="gastro" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Respirasi</label>
                            <input className="input-field rounded-md text-black" type="text" name="respiration" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Tulang dan Otot</label>
                            <input className="input-field rounded-md text-black" type="text" name="boneMuscle" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Ekstremitas</label>
                            <input className="input-field rounded-md text-black" type="text" name="extremities" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                            <label className="label-field">Urogenital</label>
                            <input className="input-field rounded-md text-black" type="text" name="urogenital" placeholder="" onChange={(e) => handleInputChange(e, setPhysicalExam, physicalExam)} />
                        </div>
                    </div>

                    <br></br>

                    <button type="submit" className="w-full bg-blue-700 hover:bg-blue-900 font-semibold py-2 rounded-md">Save</button>
                    <button
                        onClick={() => router.push("/display")}
                        className="w-full mt-4 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        View All Data
                    </button>
                </div>
            </form>
            {/* Button to navigate to the display page */}

        </div>

    );
};

export default InputPage;
