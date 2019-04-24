import * as firebase from 'firebase';
import 'firebase/firestore'
import { YellowBox } from 'react-native';
import localstore from "./localstore";
import moment from 'moment';

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

// let once = firebase.firestore().collection('certificates');
// let data = [
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'Provisional Class Certificate',
//     dateOfExpiry: '8/4/2019',
//     dateOfIssue: '3/6/2019',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'Document of Compliance',
//     dateOfExpiry: '7/6/2021',
//     dateOfIssue: '11/29/2016',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'International load line Certificate',
//     dateOfExpiry: '8/4/2019',
//     dateOfIssue: '3/5/2019',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'International Air Pollution Prevention Certificate',
//     dateOfExpiry: '8/4/2019',
//     dateOfIssue: '3/5/2019',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'International Oil Pollution Prevention Certificate',
//     dateOfExpiry: '8/4/2019',
//     dateOfIssue: '3/5/2019',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'International Tonnage Certificate',
//     dateOfExpiry: '',
//     dateOfIssue: '3/5/2019',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'International Anti-Fouling System Certificate',
//     dateOfExpiry: '',
//     dateOfIssue: '3/5/2019',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'Cargo Ship Safety Radio Certificate',
//     dateOfExpiry: '1/17/2019',
//     dateOfIssue: '8/18/2018',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'International Energy Efficiency Certificate',
//     dateOfExpiry: '8/4/2019',
//     dateOfIssue: '3/6/2019',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'Statement Of Compliance for Non-Convention Ship',
//     dateOfExpiry: '8/17/2023',
//     dateOfIssue: '8/18/2018',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'International Sewage Pollution Prevention Certificate',
//     dateOfExpiry: '',
//     dateOfIssue: '12/11/2017',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'Static Bollard Pull Certificate',
//     dateOfExpiry: '',
//     dateOfIssue: '8/18/2018',
//     group: 'BV',
//   },
//   {
//     vessel: 'WHo103B3VNIe9jPG4GR5',
//     name: 'Record Of Condition Of Assignment',
//     dateOfExpiry: '',
//     dateOfIssue: '8/18/2018',
//     group: 'BV',
//   }

// ];

// data.forEach( item => {
//   item.dateOfExpiry = item.dateOfExpiry !== '' ? moment(item.dateOfExpiry).format('YYYY-MM-DD'):'';
//   item.dateOfIssue = item.dateOfIssue != '' ? moment(item.dateOfIssue).format('YYYY-MM-DD'):''
//   once.add(item);
// })

let certificateAPI = {
  empty: true,
  certificates: [],
  async fetch(refresh){
    const snapshot = await firebase.firestore().collection('certificates').get();
    this.empty = snapshot.empty;
    this.certificates = snapshot.docs.map(x=>{
      let data = x.data();
      data.key = x.id;
      return data;
    });
    return this.certificates;
  }
};

export default certificateAPI;