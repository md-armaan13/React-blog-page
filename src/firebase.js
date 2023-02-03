
import { initializeApp } from "firebase/app";

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBg5ZUoQ09vC1BNJmQGkC2Xp1-aIcH5bbI",
    authDomain: "react-blog-page-c8090.firebaseapp.com",
    projectId: "react-blog-page-c8090",
    storageBucket: "react-blog-page-c8090.appspot.com",
    messagingSenderId: "814940286021",
    appId: "1:814940286021:web:ec5ef1ff64d27af7ac472c",
    measurementId: "G-YS84HL37YK"
  };

    firebase.initializeApp(firebaseConfig); 
    
    export const firestore = firebase.firestore();