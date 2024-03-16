// not working as the page is reloading for each new videos

function skipVideo() {
    const checkVideoInterval = setInterval(() => {
        const video = document.querySelector('video');
        if (video && !(video.currentTime > video.duration - 3)) {
            video.play();
            console.log("inside video");
            video.currentTime = video.duration - 3; // Skip to 3 seconds before the video ends.

            setTimeout(() => {
                const clickableDiv = document.querySelector('span.rc-TooltipWrapper.css-0 div.rc-ItemIcon.horizontal-box.css-0');
                if (clickableDiv) {
                    clickableDiv.click();
                    console.log("next video");
                     clearInterval(checkVideoInterval); // Stop checking for videos
                }
            }, 3000);
        }
    }, 1000); // Check every second for a video element
}

function clickItems() {
    const items = document.querySelectorAll('div.item-list ul li');
    items.forEach((item) => {
        setTimeout(() => {
            const link = item.querySelector('a');
            if (link) {
                link.click();
                skipVideo(); // Call skipVideo here for each clicked item
            }
        }, 5000); // A fixed delay for all items
    });
}

clickItems();
