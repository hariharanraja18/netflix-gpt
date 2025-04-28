// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCkt3BPADcxc9DfZmWxXb8G_6Bde8hE6cQ',
	authDomain: 'netflixgpt-4ad76.firebaseapp.com',
	projectId: 'netflixgpt-4ad76',
	storageBucket: 'netflixgpt-4ad76.firebasestorage.app',
	messagingSenderId: '1002523401874',
	appId: '1:1002523401874:web:8cd2f38f239a343f6ed04b',
	measurementId: 'G-56SFRR9R49',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
