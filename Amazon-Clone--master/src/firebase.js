import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDACvyP4T2ch6hov4dp-3TTF-9fnDSOcVE",
    authDomain: "fir-5f541.firebaseapp.com",
    projectId: "fir-5f541",
    storageBucket: "fir-5f541.appspot.com",
    messagingSenderId: "1058415265046",
    appId: "1:1058415265046:web:1dc0a319ebd8b7ab30fc37",
    measurementId: "G-6FBN964GWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth}; 