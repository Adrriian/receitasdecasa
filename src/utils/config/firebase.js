// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC_VMTbNswausEMKU7hMnes_ONc05TBhCI",
    authDomain: "teste-8f012.firebaseapp.com",
    projectId: "teste-8f012",
    storageBucket: "teste-8f012.firebasestorage.app",
    messagingSenderId: "173828957934",
    appId: "1:173828957934:web:eabece9aa352f5c3ac75ff"
  };

  import {getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
