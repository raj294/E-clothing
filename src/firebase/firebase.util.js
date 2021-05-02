import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQXNm8oRN9G9jDnDC2uvixHXmcjTBg3Gc",
    authDomain: "eclothing-db-db866.firebaseapp.com",
    projectId: "eclothing-db-db866",
    storageBucket: "eclothing-db-db866.appspot.com",
    messagingSenderId: "71197065695",
    appId: "1:71197065695:web:b8d1958d9b065298bf046a",
    measurementId: "G-Q4L9ERF5DH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;