// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBgPtFGlCpMvX592vF1O03EerD7ibI6bi4",
    authDomain: "smart-attendance-system-fb1ba.firebaseapp.com",
    databaseURL: "https://smart-attendance-system-fb1ba-default-rtdb.firebaseio.com",
    projectId: "smart-attendance-system-fb1ba",
    storageBucket: "smart-attendance-system-fb1ba.appspot.com",
    messagingSenderId: "981695684743",
    appId: "1:981695684743:web:e9d8e743533770c26e9822",
    measurementId: "G-RWMLE401VN"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;