// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';

// Your Firebase configuration (replace with your actual credentials)
const firebaseConfig = {
    apiKey: "AIzaSyCvI3y5mQ4TWOhbnHH6OSB3GzeNcFpe7LM",
    authDomain: "cenro-3ffc4.firebaseapp.com",
    projectId: "cenro-3ffc4",
    storageBucket: "cenro-3ffc4.firebasestorage.app",
    messagingSenderId: "763027479113",
    appId: "1:763027479113:web:e7ff66db1267c091c77d98",
    measurementId: "G-CQSD8JRXMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export the authentication instance for use in the login script
export { auth };
