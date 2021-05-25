import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCIyRX7F1QI4_FseAKJZXMX8J5KxsFjPUc',
  authDomain: 'seduloussigma-db.firebaseapp.com',
  databaseURL: 'https://seduloussigma-db-default-rtdb.firebaseio.com',
  projectId: 'seduloussigma-db',
  storageBucket: 'seduloussigma-db.appspot.com',
  messagingSenderId: '942886120564',
  appId: '1:942886120564:web:9b6663e16fbac5dfaa7521',
  //measurementId: 'G-1LQZC53CZK',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  } else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      //if user - uid is not exists then create User in document ref using .set()
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
