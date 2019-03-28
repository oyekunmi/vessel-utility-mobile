import * as firebase from 'firebase';
import 'firebase/firestore'
import { YellowBox } from 'react-native';

var config = {
  apiKey: "AIzaSyDGlVhqnTboGrPG-69JBRyMLzV9eDLntEE",
  authDomain: "vessel-tracker-7a2d4.firebaseapp.com",
  databaseURL: "https://vessel-tracker-7a2d4.firebaseio.com",
  projectId: "vessel-tracker-7a2d4",
  storageBucket: "vessel-tracker-7a2d4.appspot.com",
  messagingSenderId: "479129524354"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  YellowBox.ignoreWarnings(['Setting a timer']);
}


let auth = {
  authenticate(code) {
    return firebase.firestore().collection('users').doc(code).get().then(function(doc) {
      return doc.data();
    }).catch(function(error) {
      console.log("Error getting document:", error);
      return false;
    });
  }
};

export default auth;