import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDm8xKqxlhB6ZewGCGxSgV1jWW2Y2aVgHM",
  authDomain: "greg-firegram.firebaseapp.com",
  projectId: "greg-firegram",
  storageBucket: "greg-firegram.appspot.com",
  messagingSenderId: "577018748075",
  appId: "1:577018748075:web:46b4b8809f55cdaaf9abee",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
