import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBJRDtcbEWlbLsVHMSfVnqE8AEuutdrw5o",
    authDomain: "lingobotix-8484b.firebaseapp.com",
    projectId: "lingobotix-8484b",
    storageBucket: "lingobotix-8484b.appspot.com",
    messagingSenderId: "761595873907",
    appId: "1:761595873907:web:4e2cda8a6fdda0771fb806",
    measurementId: "G-RV0MG23SRQ"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;