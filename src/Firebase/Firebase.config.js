// Firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA51M8IaWgs8x2MJuiFQLb-ptCPDWveQn4",
  authDomain: "food-network-6d62a.firebaseapp.com",
  projectId: "food-network-6d62a",
  storageBucket: "food-network-6d62a.firebasestorage.app",
  messagingSenderId: "1057488714461",
  appId: "1:1057488714461:web:73a3098f31c30869eab934"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app; 
