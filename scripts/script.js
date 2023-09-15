// Vind de video en het video-element
const video = document.getElementById("background-video");

// Pauzeert de video bij een klik
video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Functie om te controleren of een element in het viewport is
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Functie om de video te controleren en af te spelen of te pauzeren
function checkVideo() {
    if (isElementInViewport(video)) {
        // Video is in het viewport, speelt af als deze is gepauzeerd
        if (video.paused) {
            video.play();
        }
    } else {
        // Video is buiten het viewport, pauzeert met een vertraging van 0,6 seconden
        if (!video.paused) {
            setTimeout(function() {
                video.pause();
            }, 600); // 600 milliseconden (0,6 seconden)
        }
    }
}

// Voegt een scroll event listener toe om de video te controleren tijdens het scrollen
window.addEventListener("scroll", checkVideo);

// Controleert de videostatus wanneer de pagina geladen is
document.addEventListener("DOMContentLoaded", checkVideo);
