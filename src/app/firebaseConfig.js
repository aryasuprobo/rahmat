// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlyBwtuRav7-9QN8dXBzPs1uJjYnd2S3M",
    authDomain: "rahmat-afcbe.firebaseapp.com",
    projectId: "rahmat-afcbe",
    storageBucket: "rahmat-afcbe.firebasestorage.app",
    messagingSenderId: "57899537371",
    appId: "1:57899537371:web:10ef4bf0099054cebd8dfe",
    measurementId: "G-5PLKHR79FC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
