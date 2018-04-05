import * as firebase from 'firebase'; // 4.12.1

const config = {
  apiKey: "AIzaSyBBM0fWoin97JTQbiYqpc68P5AvaNWco98",
  authDomain: "discussion-board-pvhs.firebaseapp.com",
  databaseURL: "https://discussion-board-pvhs.firebaseio.com",
  projectId: "discussion-board-pvhs",
  storageBucket: "",
  messagingSenderId: "498987946235"
};

firebase.initializeApp(config);

export default firebase