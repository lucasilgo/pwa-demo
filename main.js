// Progressive Enhancement (SW supported)
if (navigator.serviceWorker) {
    // Register the SW
    navigator.serviceWorker.register('/pwa-demo/firebase-messaging-sw.js').then(function(registration){
    }).catch(console.log);
  }
  
  
  // Notification support
  
  function showNotification() {
    let notificationOptions = {
      body: 'Some Notification information',
    //   icon: '/thumb.png'
    }
    let notif = new Notification('My New Notification', notificationOptions);
  
    notif.onclick = () => {
      console.log('Notification clicked');
    }
  }
  
  if(window.Notification) {
    if(Notification.permission === 'granted') {
    } else if(Notification.permission !== 'denied') {
      Notification.requestPermission(permission => {
        if(permission === 'granted') {
        }
      })
    }
  }
  
  messaging.getToken({ vapidKey: 'BHatYa0DeNIIBX9BwZBrqGTL7p-HhJ6NKkmmeXiBdtyrIsphWR1unshF2Ol6KS-IJ-c_UHjn8Cr-MgKD7osxS6E' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
      return currentToken;
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
  
  messaging.onMessage(payload => {
    console.log('Message received. ', payload);
    // ...
  });