// utils/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGMxOreYv2BPKGeHn_-1zZh5ruhbh3cqU",
  authDomain: "dashx-122b1.firebaseapp.com",
  projectId: "dashx-122b1",
  storageBucket: "dashx-122b1.appspot.com",
  messagingSenderId: "852869093721",
  appId: "1:852869093721:web:60c9a8ed304123a80f9448",
  measurementId: "G-ZKPMPD4LMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
