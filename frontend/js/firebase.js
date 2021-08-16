// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBhT1tQZ2XlD-5uGvTd89lnxR_u3dAmiPk",
    authDomain: "insight-a03a4.firebaseapp.com",
    projectId: "insight-a03a4",
    storageBucket: "insight-a03a4.appspot.com",
    messagingSenderId: "312077272759",
    appId: "1:312077272759:web:d00d91f7d2207c486b2f32",
    measurementId: "G-BLMH6JPMLE"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database(); 