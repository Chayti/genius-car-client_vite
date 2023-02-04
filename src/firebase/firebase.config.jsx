// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCn_I6heZkXnY-P-xI4FhvJycT_biUOw48",
  // authDomain: "ema-john-react-site.firebaseapp.com",
  // projectId: "ema-john-react-site",
  // storageBucket: "ema-john-react-site.appspot.com",
  // messagingSenderId: "817700730149",
  // appId: "1:817700730149817700730149:web:e170a834430d67eeea56cc"
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;