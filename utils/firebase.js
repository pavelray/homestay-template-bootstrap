import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "honey-cdqdqw.firebaseapp.com",
  databaseURL: "https://honey-cdqdqw.firebaseio.com",
  projectId: process.env.FIRE_BASE_PROJECT_ID,
  storageBucket: "honey-cdqdqw.appspot.com",
  messagingSenderId: "330024457869",
  appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };