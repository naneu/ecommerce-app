import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwuT-_llJxeM1SS_A_HqaQ94i-t39ga_Y",
  authDomain: "restaurantapp-9220c.firebaseapp.com",
  databaseURL: "https://restaurantapp-9220c-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-9220c",
  storageBucket: "restaurantapp-9220c.appspot.com",
  messagingSenderId: "47563952205",
  appId: "1:47563952205:web:3c4857e780379a95920c04",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
