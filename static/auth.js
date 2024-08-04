// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBgSnJVLuCcIjFMndxq7SPmef4w6zdu170",
  authDomain: "fir-auth-ab569.firebaseapp.com",
  projectId: "fir-auth-ab569",
  storageBucket: "fir-auth-ab569.appspot.com",
  messagingSenderId: "1093023566504",
  appId: "1:1093023566504:web:e958574112fa88fe90109d",
  measurementId: "G-NYWRN3784Z"
  };
  
  // Initialize Firebase
  
  const app= initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  // Login Function
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.password.value;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
          window.location.href = '/voice';
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  
  // Register Function
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = registerForm.email.value;
      const password = registerForm.password.value;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
          window.location.href = '/voice';
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
  