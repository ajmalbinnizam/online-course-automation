/udemy code in console
let interval = setInterval(() => {
    if (document.querySelector('video')) {
        const video = document.querySelector('video');
        video.currentTime = video.duration;
        if (document.getElementsByClassName('interstitial--inner--3w4YV').length) {
            document.getElementById("go-to-next-item").click();
        }
	}
	else{
		document.querySelector('[data-purpose="go-to-next"]').click()
	}
    
}, 1000);

/skill soft in console
let interval = setInterval(() => {
    if (document.querySelector('video')) {
        const video = document.querySelector('video');
        video.currentTime = video.duration;
        if (document.getElementById('nextTopicButton').length) {
            document.getElementById('nextTopicButton').click();
        };
    };
    
}, 1000);




let interval = setInterval(() => {
    if (document.querySelector('video')) {
        const video = document.querySelector('video');
        video.currentTime = video.duration;
        if (document.getElementsByClassName('interstitial--inner--3w4YV').length) {
            document.getElementById("go-to-next-item").click();
        };
    };
    // if (document.getElementsByTagName("video").length !=16) {
    //     document.getElementsByTagName("video")[0].playbackRate = 16;
    // }
    if (document.getElementsByClassName("mobile-curriculum-item--default-actions--26P1b").length
        || document.getElementsByClassName("text-viewer--container--18Ayx").length
        || document.getElementsByClassName("layout--container--25WIk").length) {
        const timeOut = setTimeout(() => {
            document.getElementById("go-to-next-item").click();
        }, 10000);
    }
    if(document.querySelector('[data-purpose="dont-ask-button"]')){
        document.querySelector('[data-purpose="dont-ask-button"]').click()
    }
    if(document.querySelector('[data-purpose="start-assignment"]')){
        document.querySelector('[data-purpose="start-assignment"]').click()

    }
    
}, 1000);



