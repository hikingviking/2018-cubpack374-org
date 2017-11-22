import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBTB_2e_kGbpkPhX27St1N08mPh5gHfWC8",
    authDomain: "test-cubpack374-org.firebaseapp.com",
    databaseURL: "https://test-cubpack374-org.firebaseio.com",
    projectId: "test-cubpack374-org",
    storageBucket: "test-cubpack374-org.appspot.com",
    messagingSenderId: "1061873185730"
};
var Firebase = firebase.initializeApp(config);

export const FirebaseDatabase = Firebase.database();

export default Firebase;
