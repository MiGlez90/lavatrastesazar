import * as firebase from 'firebase';

const config = {
		apiKey: "AIzaSyDr3g1f-z-YtYZgNkU8LBboP624uuGswjQ",
		authDomain: "lavatrastesazar.firebaseapp.com",
		databaseURL: "https://lavatrastesazar.firebaseio.com",
		projectId: "lavatrastesazar",
		storageBucket: "lavatrastesazar.appspot.com",
		messagingSenderId: "805922377636"
};

firebase.initializeApp(config);


export default firebase;