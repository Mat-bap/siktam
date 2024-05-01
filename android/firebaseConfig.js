import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBMwzG2Hsd3Wdg5vF-torvSoyUgdlJbx5U',
  authDomain: 'matbap-bf7bf.firebaseapp.com',
  databaseURL: 'https://matbap-bf7bf.firebaseio.com',
  projectId: 'matbap-bf7bf',
  storageBucket: 'matbap-bf7bf.appspot.com',
  messagingSenderId: '43747563726',
  appId: '1:43747563726:android:2234c3e74b4478b6aa989f'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;