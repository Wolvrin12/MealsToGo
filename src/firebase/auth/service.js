import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
