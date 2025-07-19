// Import the functions you need from the SDKs you need
import {
  GoogleAuthProvider,
  
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { firebaseAuth } from './firebaseConfig';

const googleProvider = new GoogleAuthProvider();


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrTTsbHGEUrPRUKhMVXC5SB2xiy_F2oFE",
  authDomain: "urban-clothesecommers.firebaseapp.com",
  projectId: "urban-clothesecommers",
  storageBucket: "urban-clothesecommers.firebasestorage.app",
  messagingSenderId: "219086837975",
  appId: "1:219086837975:web:25e52f7b1b822205df7892",
  measurementId: "G-FY6TCNGVD1"
};

// Sign in with Google functionality
export const signInWithGoogle = async () => {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(async () => {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      return {
        success: true,
        user: result.user,
        error: null,
      };
    });
  } catch (error) {
    return {
      success: false,
      user: null,
      error: error.message,
    };
  }
};

// Sign in with email and password

export async function signInWithCredentials(email: string, password: string) {
  try {
    return setPersistence(firebaseAuth, browserSessionPersistence).then(async () => {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      return {
        success: true,
        user: userCredential.user,
        error: null,
      };
    });
  } catch (error) {
    return {
      success: false,
      user: null,
      error: error.message || 'Failed to sign in with email/password',
    };
  }
}

// Sign out functionality
export const firebaseSignOut = async () => {
  try {
    await signOut(firebaseAuth);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};
// Auth state observer
export const onAuthStateChanged = (callback) => {
  return firebaseAuth.onAuthStateChanged(callback);
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

