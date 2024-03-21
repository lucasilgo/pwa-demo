if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('https://lucasilgo.github.io/pwa-demo/service-worker.js');

        this.document.getElementById('push-notif').addEventListener('click', () => {
            displayNotification('Button push notification clicked!');
        });

        this.document.getElementById('subscribe-notif').addEventListener('click', () => {
            if ('Notification' in window && Notification.permission != 'granted') {
                Notification.requestPermission(status => {
                    displayNotification('Push Notification Enabled');
                });
            }
        });

        const messaging = firebase.messaging();

        messaging.getToken({ vapidKey: 'BHatYa0DeNIIBX9BwZBrqGTL7p-HhJ6NKkmmeXiBdtyrIsphWR1unshF2Ol6KS-IJ-c_UHjn8Cr-MgKD7osxS6E' })
            .then(currentToken => {
                if (currentToken) {
                    this.document.getElementById('current-token').innerText = currentToken
                } else {
                    this.document.getElementById('current-token').innerText = 'No token registered. Please, click on subscribe.'
                }
            }).catch(err => {
                this.document.getElementById('current-token').innerText = 'An error ocurred while retrieving token.'
                console.error(err)
            });

        messaging.onMessage(payload => {
            console.log('[firebase-messaging-sw.js] Received message ', payload);
            displayNotification(payload.notification.title)
        });
    });
}

// if ('Notification' in window && Notification.permission != 'granted') {
//     Notification.requestPermission(status => {
//         displayNotification('Push Notification Enabled');
//     });
// }

const requestPermission = () => {
    if ('Notification' in window && Notification.permission != 'granted') {
        Notification.requestPermission(status => {
            displayNotification('Push Notification Enabled');
        });
    }
}

const displayNotification = notificationTitle => {
    if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(reg => {
            const options = {
                body: 'Push notifications are enabled!',
                icon: '/assets/icons/icon-512-512.png',
                vibrate: [300, 400, 300]
            };

            reg.showNotification(notificationTitle, options);
        });
    }
};
