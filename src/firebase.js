import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAr0q75xwmvNkmrRbXGdAWmv3uLeWdmUrw',
  authDomain: 'yourlocalstores-6e854.firebaseapp.com',
  databaseURL: 'https://yourlocalstores-6e854-default-rtdb.firebaseio.com',
  projectId: 'yourlocalstores-6e854',
  storageBucket: 'gs://yourlocalstores-6e854.appspot.com',
  messagingSenderId: '753036844145'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
