import firebase from firebase/app;
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDAbCXTHC9W16LVPnPrmCTOpOycdII_n6Y",
    authDomain: "reactcrud-aa51c.firebaseapp.com",
    projectId: "reactcrud-aa51c",
    storageBucket: "reactcrud-aa51c.appspot.com",
    messagingSenderId: "64354565253",
    appId: "1:64354565253:web:7b011317e4d58a4859fdec",
    measurementId: "G-G0BGSZ1ZRK"
  };

  const fireDB=firebase.initializeApp(firebaseConfig);
  export default fireDB.database().ref();