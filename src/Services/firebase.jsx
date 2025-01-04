import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtkm5IbFjxr_Z3Rw_OgBPRsR4ZOH5ptHU',
  authDomain: 'hihih-43019.firebaseapp.com',
  projectId: 'hihih-43019',
  storageBucket: 'hihih-43019.appspot.com',
  messagingSenderId: '937238696122',
  appId: '1:937238696122:web:bb6259810492eb5470f283',
  measurementId: 'G-0ZZ86LB2GZ',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
