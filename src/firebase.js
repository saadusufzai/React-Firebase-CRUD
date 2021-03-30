import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCOAki8RQLRhRH0xEtk_jJ1yTzi500Eyuw",
  authDomain: "fir-crud-8c6a9.firebaseapp.com",
  projectId: "fir-crud-8c6a9",
  storageBucket: "fir-crud-8c6a9.appspot.com",
  messagingSenderId: "83659828381",
  appId: "1:83659828381:web:cb204ee1c33fc0c10cf874",
  measurementId: "G-V3CVBMYZGE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.database();
