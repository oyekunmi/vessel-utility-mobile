import * as firebase from 'firebase';
import 'firebase/firestore'
import { YellowBox } from 'react-native';
import localstore from "./localstore";

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
      const data = doc.data();
      if(data){
        localstore.save('user', data);
        localstore.save('first', true);
      }
      return data;
    }).catch(function(error) {
      console.log("Error getting document:", error);
      return false;
    });
  },
  check(){ 
    return localstore.get('user').then((x)=>{
      return !!x;
    }); 
  },
  first(){
    return localstore.get('first').then((x)=>{
      return !!x;
    });
  }
};

export default auth;