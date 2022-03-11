// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDstY5u8JtA4N9CaTPy-h5Hyc7COhrZvE8",
  authDomain: "instagram-me-b10be.firebaseapp.com",
  projectId: "instagram-me-b10be",
  storageBucket: "instagram-me-b10be.appspot.com",
  messagingSenderId: "311671632838",
  appId: "1:311671632838:web:bb1df4dc087d1acb2578c7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};