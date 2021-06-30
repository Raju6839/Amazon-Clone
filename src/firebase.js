import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ZHgc8Sg_FQfblt26ukDKI4oNL4Gwu6s",
  authDomain: "clone-68c57.firebaseapp.com",
  databaseURL: "https://clone-68c57.firebaseio.com",
  projectId: "clone-68c57",
  storageBucket: "clone-68c57.appspot.com",
  messagingSenderId: "135060143151",
  appId: "1:135060143151:web:babfe9e4dece4254825ada",
  measurementId: "G-K98T40HTC0"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig); //initialise app 
  const db = firebaseApp.firestore();  // database connect
  const auth = firebase.auth();   // variables for authentication to handle sign in 

  export { db, auth };  //export is necessary to use outside of file