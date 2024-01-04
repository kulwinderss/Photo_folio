
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApHDh6-2NCWk2BIHDbgu3TOTUUlS2Rr_g",
  authDomain: "bpmp-ec009.firebaseapp.com",
  databaseURL: "https://bpmp-ec009.firebaseio.com",
  projectId: "bpmp-ec009",
  storageBucket: "bpmp-ec009.appspot.com",
  messagingSenderId: "198952342766",
  appId: "1:198952342766:web:ffaae1c6a66f0f3c220fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
