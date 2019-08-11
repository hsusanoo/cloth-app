import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfCCpc4W4rpyuUMQNb2kAFmIpfQfJLr80",
    authDomain: "cloth-app.firebaseapp.com",
    databaseURL: "https://cloth-app.firebaseio.com",
    projectId: "cloth-app",
    storageBucket: "",
    messagingSenderId: "827176417513",
    appId: "1:827176417513:web:fac7d5c3d6b6e503"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;