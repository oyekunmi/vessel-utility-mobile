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

let vesselAPI = {
  empty: true,
  vessels: [],
  async fetch(refresh){
    const snapshot = await firebase.firestore().collection('vessels').get();
    this.empty = snapshot.empty;
    this.vessels = snapshot.docs.map(x=>{
      let data = x.data();
      data.key = x.id;
      return data;
    });
    return this.vessels;
  }
};

export default vesselAPI;