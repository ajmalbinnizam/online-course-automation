let interval = setInterval(() => {
    if (document.querySelector('video')) {
        const video = document.querySelector('video');
        if (!(video.currentTime > video.duration - 3)) {
        video.play()
        console.log("inside video");
            video.currentTime = video.duration - 3; // Skip to 5 seconds before the video ends.
        }
        let clear_timeout = setTimeout(() => {
            const clickableDiv = document.querySelector('span.rc-TooltipWrapper.css-0 div.rc-ItemIcon.horizontal-box.css-0');
            if (clickableDiv) {
                clearTimeout(clear_timeout);
                clickableDiv.click();
                console.log("nxt video");
            }
        }, 3000);
            
    }
    }, 4000)