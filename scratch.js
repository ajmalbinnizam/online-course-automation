let interval = setInterval(() => {
    if (document.querySelector('video')) {
        const video = document.querySelector('video');
        // Set the current time to the duration of the video
        video.currentTime = video.duration;
        if (document.getElementsByClassName('interstitial--inner--3w4YV').length) {
            document.getElementById("go-to-next-item").click();
        };
    };

    
}, 1000);