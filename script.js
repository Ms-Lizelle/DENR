
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);