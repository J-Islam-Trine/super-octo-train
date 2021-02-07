import firebase from 'firebase'
import 'firebase/database'
var firebaseConfig = {
  apiKey: "AIzaSyCdhK0SM6Gf0J7miQJELkh9F157Q7HIUxE",
  authDomain: "iot-noticeboard.firebaseapp.com",
  databaseURL: "https://iot-noticeboard-default-rtdb.firebaseio.com",
  projectId: "iot-noticeboard",
  storageBucket: "iot-noticeboard.appspot.com",
  messagingSenderId: "211671434320",
  appId: "1:211671434320:web:d04f1f16a3bdfedc2b3d55"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;