import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBX81WeBSkeOW14S2gzVyKZ7PnpXwFoaGo",
    authDomain: "lingobotix-c7e29.firebaseapp.com",
    projectId: "lingobotix-c7e29",
    storageBucket: "lingobotix-c7e29.appspot.com",
    messagingSenderId: "371082673827",
    appId: "1:371082673827:web:e4fa51ba5ae6c271da4916",
    measurementId: "G-Z5SP1M9LEN"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;