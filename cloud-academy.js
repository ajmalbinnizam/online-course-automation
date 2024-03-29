let interval = setInterval(() => {
    const video = document.querySelector('video');
    if (video) {
        video.currentTime = video.duration;
        setTimeout(() => {
            const spanElement = document.querySelector('.ok62y9-1.kUeMej.playerNextButton'); // Corrected class name
            if (spanElement) {
                spanElement.click();
            }
        }, 2000); // 2 seconds delay
    }
}, 4000);
