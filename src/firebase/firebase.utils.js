import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtNP7O155P_Ka5dJNK8RyqEvBFPeyMJ78",
    authDomain: "crwn-db-fc078.firebaseapp.com",
    projectId: "crwn-db-fc078",
    storageBucket: "crwn-db-fc078.appspot.com",
    messagingSenderId: "91147800789",
    appId: "1:91147800789:web:06f5c0b99956220c23125c",
    measurementId: "G-9HLEKQBLNL"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.error(error)
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;