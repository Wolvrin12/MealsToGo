import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXKQ-TL5ffsAJr6wcyDcmPqV0I7MoDow0",
  authDomain: "mealstogo-43224.firebaseapp.com",
  projectId: "mealstogo-43224",
  storageBucket: "mealstogo-43224.appspot.com",
  messagingSenderId: "802287188427",
  appId: "1:802287188427:web:c7ee2b9ccf47aad8b31e4e",
  measurementId: "G-BFMN16PV45",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
