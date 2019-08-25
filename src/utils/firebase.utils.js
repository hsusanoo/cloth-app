import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCfCCpc4W4rpyuUMQNb2kAFmIpfQfJLr80',
    authDomain: 'cloth-app.firebaseapp.com',
    databaseURL: 'https://cloth-app.firebaseio.com',
    projectId: 'cloth-app',
    storageBucket: '',
    messagingSenderId: '827176417513',
    appId: '1:827176417513:web:fac7d5c3d6b6e503',
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    // Add user to database
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (e) {
            console.log('Error creating new user : ', e.message);
        }
    }

    return userRef;
};

// for Adding new collection and docs to firestore
export const addCollectionAndDocs = async (collectionKey, docsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    docsToAdd.forEach(doc => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, doc);
    });

    return await batch.commit();
};

// convert collection snapshot array to object containing additional data :
// routeName and id
export const convertCollectionsSnapshopToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
};

export const getCurrentUser = () =>
    new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export default firebase;
