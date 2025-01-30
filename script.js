
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCOXtfjmfFhy-Ya6fUCyj8d23D0F1pgL7o",
    authDomain: "cenroit.firebaseapp.com",
    projectId: "cenroit",
    storageBucket: "cenroit.firebasestorage.app",
    messagingSenderId: "880361469888",
    appId: "1:880361469888:web:603fe8dfa389d3b6d6ba25",
    measurementId: "G-52XKVXFHLS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);