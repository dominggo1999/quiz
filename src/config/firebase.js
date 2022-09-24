import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_CLIENT_API_KEY,
  authDomain: import.meta.env.FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: import.meta.env.FIREBASE_CLIENT_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_CLIENT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_CLIENT_MESSAGING_SENDER_ID,
  appId: import.meta.env.FIREBASE_CLIENT_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
