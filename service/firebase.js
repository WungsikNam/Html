// Import the functions you need from the SDKs you need
import { initializeApp } from  "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhoITmLpKup7qVyRSUFeAQNaEz-VJsnNU",
  authDomain: "kh-1128.firebaseapp.com",
  projectId: "kh-1128",
  storageBucket: "kh-1128.appspot.com",
  messagingSenderId: "982392462387",
  appId: "1:982392462387:web:250179696adbcb5b435746"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);