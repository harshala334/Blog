// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'mern-blog-b327f.firebaseapp.com',
    projectId: 'mern-blog-b327f',
    storageBucket: 'mern-blog-b327f.appspot.com',
    messagingSenderId: '699397991367',
    appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);