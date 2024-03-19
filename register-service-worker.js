if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('https://lucasilgo.github.io/pwa-demo/service-worker.js');

        this.document.getElementById('push-notif').addEventListener('click', () => {
            displayNotification('Button push notification clicked!');
        });
    });
}

if ('Notification' in window && Notification.permission != 'granted') {
    Notification.requestPermission(status => {
        displayNotification('Push Notification Enabled');
    });
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
