import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDGhxCwVxNSN2pJW-MmUZkzs4pYch_JbJQ',
  authDomain: 'chat-9fbb9.firebaseapp.com',
  projectId: 'chat-9fbb9',
  storageBucket: 'chat-9fbb9.appspot.com',
  messagingSenderId: '438133306450',
  appId: '1:438133306450:web:3351574835a19d564cdb8b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
