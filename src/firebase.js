// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Md_cFw_sEFIcqnWJqq66xEmzhp8O0Fk",
  authDomain: "portfolio-d2613.firebaseapp.com",
  projectId: "portfolio-d2613",
  storageBucket: "portfolio-d2613.appspot.com",
  messagingSenderId: "5344247513",
  appId: "1:5344247513:web:58c803b09b150b894108c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);