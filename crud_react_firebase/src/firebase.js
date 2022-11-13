// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVPmvkN4hYbB64p-mu3ntw5asugW3UQok",
  authDomain: "reactcrud-51e72.firebaseapp.com",
  projectId: "reactcrud-51e72",
  storageBucket: "reactcrud-51e72.appspot.com",
  messagingSenderId: "224667098607",
  appId: "1:224667098607:web:91bbc8ba48fe8598c6aa1a",
  measurementId: "G-P36JH15X0G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

