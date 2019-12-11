import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { config } from '../config';

firebase.initializeApp(config);

class Firebase {
  constructor() {
    this.db = firebase.firestore();
    this.auth = firebase.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  doSignInWithGoogle = () => this.auth.signInWithRedirect(this.googleProvider);
}

export default Firebase;
