import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIyRX7F1QI4_FseAKJZXMX8J5KxsFjPUc',
  authDomain: 'seduloussigma-db.firebaseapp.com',
  projectId: 'seduloussigma-db',
  storageBucket: 'seduloussigma-db.appspot.com',
  messagingSenderId: '942886120564',
  appId: '1:942886120564:web:9b6663e16fbac5dfaa7521',
  measurementId: 'G-1LQZC53CZK',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  } else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get;

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData,
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
