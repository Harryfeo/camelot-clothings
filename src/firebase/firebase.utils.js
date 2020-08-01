import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSEhuusBJpOOFufyGDG3EiCGPMN0psfRI",
    authDomain: "camelot-db.firebaseapp.com",
    databaseURL: "https://camelot-db.firebaseio.com",
    projectId: "camelot-db",
    storageBucket: "camelot-db.appspot.com",
    messagingSenderId: "840308473078",
    appId: "1:840308473078:web:b200c2512969076d16c0d7",
    measurementId: "G-GWV9JQW54J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    console.log(snapshot);

    if (! snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.essage);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
