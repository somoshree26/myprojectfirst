import * as firebase from 'firebase'
const config={
    apiKey: "AIzaSyA1IVRvrlukp9uWgoN7BUjY4yXu3ZFE1rY",
    authDomain: "stories2-9d7cd.firebaseapp.com",
    projectId: "stories2-9d7cd",
    storageBucket: "stories2-9d7cd.appspot.com",
    messagingSenderId: "182912381993",
    appId: "1:182912381993:web:cae619b3cf1f0d99b15838"
}
const Firebase = firebase.initializeApp(config);
export default Firebase;