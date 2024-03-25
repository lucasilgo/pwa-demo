// Service Worker
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBeFB8tXZpL5O7YMMywHmM3i8TQ94bKklM",
    authDomain: "pwa-example-537cb.firebaseapp.com",
    projectId: "pwa-example-537cb",
    storageBucket: "pwa-example-537cb.appspot.com",
    messagingSenderId: "549243609689",
    appId: "1:549243609689:web:4dfcfd48f6a573b479c748"
    // measurementId: "G-KEHQSF1SD0"
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/thumb.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });