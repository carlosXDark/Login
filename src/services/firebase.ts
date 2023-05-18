import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCvNHD5iMqmuhQYDKDA9V-CCC94chhZkJI",
  authDomain: "auth-80ea9.firebaseapp.com",
  projectId: "auth-80ea9",
  storageBucket: "auth-80ea9.appspot.com",
  messagingSenderId: "598502386699",
  appId: "1:598502386699:web:3b6660b2be44bf286bab0e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);