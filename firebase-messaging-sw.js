importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBeFB8tXZpL5O7YMMywHmM3i8TQ94bKklM",
    authDomain: "pwa-example-537cb.firebaseapp.com",
    projectId: "pwa-example-537cb",
    storageBucket: "pwa-example-537cb.appspot.com",
    messagingSenderId: "549243609689",
    appId: "1:549243609689:web:4dfcfd48f6a573b479c748"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});
