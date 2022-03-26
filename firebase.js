var firebaseConfig = {
    apiKey: "AIzaSyBHBs42Otr2AVoyCD7-kWN6nt9Bkr7JrEY",
    authDomain: "my-cafe-list.firebaseapp.com",
    projectId: "my-cafe-list",
    storageBucket: "my-cafe-list.appspot.com",
    messagingSenderId: "195647524874",
    appId: "1:195647524874:web:81326197919a1b7a7a4ff3",
    measurementId: "G-RKJX925FEK"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();