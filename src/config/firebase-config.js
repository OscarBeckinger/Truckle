// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn08r3AmvNFIwfvScGfHku56m4WaySPIU",
    authDomain: "truckle-3ef9f.firebaseapp.com",
    projectId: "truckle-3ef9f",
    storageBucket: "truckle-3ef9f.appspot.com",
    messagingSenderId: "1037554556236",
    appId: "1:1037554556236:web:ebfb5c3154f00752f903e9",
    measurementId: "G-6LYBK6YDPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);