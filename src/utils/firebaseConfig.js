import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBaoR_Pp5gezk7aT1fYwvNx4hS5B1pSkhQ",
  authDomain: "argonautes-319bf.firebaseapp.com",
  databaseURL: "https://argonautes-319bf-default-rtdb.firebaseio.com",
  projectId: "argonautes-319bf",
  storageBucket: "argonautes-319bf.appspot.com",
  messagingSenderId: "39222529065",
  appId: "1:39222529065:web:d5a034d4fbb041f35e2038"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;