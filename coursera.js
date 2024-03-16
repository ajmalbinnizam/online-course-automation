
function  skip_video() {
    let interval = setInterval(() => {
        if (document.querySelector('video')) {
            const video = document.querySelector('video');
            if (!(video.currentTime > video.duration - 3)) {
            video.play()
            console.log("inside video");
    
                video.currentTime = video.duration - 3; // Skip to 5 seconds before the video ends.
            }
            setTimeout(() => {
                const clickableDiv = document.querySelector('span.rc-TooltipWrapper.css-0 div.rc-ItemIcon.horizontal-box.css-0');
                if (clickableDiv) {
                    clickableDiv.click();
                    console.log("nxt video");
                }
            }, 3000);
                
        }
    }, 2000)
    
}

const items = document.querySelectorAll('div.item-list ul li');
items.forEach(item => {
    setTimeout(() => {
        items.querySelector('a').click();
    }, 500);
});



{/* <span class="rc-TooltipWrapper css-0"><button class="cds-105 cds-button-disableElevation cds-button-primary css-1s4ge7s" tabindex="0" type="submit" data-testid="mark-complete" aria-disabled="false"><span class="cds-button-label">Mark as completed</span></button></span> */}

