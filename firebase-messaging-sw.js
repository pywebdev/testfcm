importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-messaging.js');

// Initialize Firebase
var config = {
	apiKey: "AAAAlvfjlKE:APA91bGd6aFtLCqJcH0sEVR8OGzSbhnPRVD2TN2bQ-DcI-WUknwFMqBunk6JDzPqdHcCmoxyuV9-gCZGKrig6SDEHLzLoJ9K-nQCCVgD-O4aWqGORAzk4ImGzPDnjG-TPDpAHwvMTaBl",
	authDomain: "fcmproject-11b1f.firebaseapp.com",
	databaseURL: "https://fcmproject-11b1f.firebaseio.com/",
	storageBucket: "gs://fcmproject-11b1f.appspot.com",
	messagingSenderId: "648403981473"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();