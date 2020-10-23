
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmlWXtbIVvSKnWiXEZ7AwSw8Hp8jSKgFQ",
    authDomain: "todo-firebase-app-51ee3.firebaseapp.com",
    databaseURL: "https://todo-firebase-app-51ee3.firebaseio.com",
    projectId: "todo-firebase-app-51ee3",
    storageBucket: "todo-firebase-app-51ee3.appspot.com",
    messagingSenderId: "51640706124",
    appId: "1:51640706124:web:1d0173c45e7a2bd8d440e9",
    measurementId: "G-53CNZV1KG2"
  });

  const db = firebaseApp.firestore();

  export default db; 