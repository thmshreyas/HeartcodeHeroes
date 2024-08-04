// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "AUTHDOMAIN",
  projectId: "PROJECTID",
  storageBucket: "STORAGEBUCKET",
  messagingSenderId: "MESSAGINGSENDERID",
  appId: "APPID",
  measurementId: "measurementID"
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
  
