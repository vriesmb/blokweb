


// BACKUP OUDE CODE VAN VIDEO PAUZEREN EN SPELEN MET GEBOUDINGCLIENTREC


// // Vind de video en het video-element
// const video = document.querySelector(".background-video");
// let pauseStatus;

// // Functie om te controleren of een element in het viewport is
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Functie om de video te controleren en af te spelen of te pauzeren
// function checkVideo() {
//     if (isElementInViewport(video)) {
//         // Video is in het viewport, speelt af als deze is gepauzeerd
//         if (video.paused) {
//             togglePausePlayButton.style.backgroundImage = "url('/images/pause.png')";
//             togglePausePlayButton.classList.remove('paused-bg');
//             togglePausePlayButton.classList.add('playing-bg');
//             // pauseStatus = 0;
//             video.play();
//         }
//     } else {
//         // Video is buiten het viewport, pauzeert met een vertraging van 0,8 seconden
//         if (!video.paused) {
//             setTimeout(function() {
//                 togglePausePlayButton.style.backgroundImage = "url('/images/play.png')";
//                 togglePausePlayButton.classList.remove('playing-bg');
//                 togglePausePlayButton.classList.add('paused-bg');
//                 // pauseStatus = 1;
//                 video.pause();
//             }, 800); // 800 milliseconden (0,8 seconden)
//         }
//     }
// }

// // Voegt een scroll event listener toe om de video te controleren tijdens het scrollen
// window.addEventListener("scroll", checkVideo);

// // Controleert de videostatus wanneer de pagina geladen is
// document.addEventListener("DOMContentLoaded", checkVideo);












// Vind de video en het video-element
const video = document.querySelector(".background-video");
let pauseStatus;

// Functie om te controleren of een element in het viewport is
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        // innerHeight geeft aan hoe hoog de sectie is
    );
}

// Functie om de video te controleren en af te spelen of te pauzeren
function checkVideo() {
    if (isElementInViewport(video)) { 
        // Video is in het viewport, speelt af als deze is gepauzeerd
        if (video.paused) {
            togglePausePlayButton.style.backgroundImage = "url('/images/pause.png')";
            togglePausePlayButton.classList.remove('paused-bg');
            togglePausePlayButton.classList.add('playing-bg');
            // pauseStatus = 0;
            video.play();
        }
    } else {
        // Video is buiten het viewport, pauzeert met een vertraging van 0,8 seconden
        if (!video.paused) {
            setTimeout(function() {
                togglePausePlayButton.style.backgroundImage = "url('/images/play.png')";
                togglePausePlayButton.classList.remove('playing-bg');
                togglePausePlayButton.classList.add('paused-bg');
                // pauseStatus = 1;
                video.pause();
            }, 800); // 800 milliseconden (0,8 seconden)
        }
    }
}

// Voegt een scroll event listener toe om de video te controleren tijdens het scrollen
window.addEventListener("scroll", checkVideo);

// Controleert de videostatus wanneer de pagina geladen is
document.addEventListener("DOMContentLoaded", checkVideo);



















/* animatie fade out en in van content als de 
gebruiker aantal seconden in focus is 
van de video */

// let TimeoutActive;
// const backgroundVideoWrapper = document.querySelectorAll('.fade-section');
// const titleWrapper = document.querySelector('.title-wrapper');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (window.isElementInViewport, options) {
//             console.log('is in viewport')
//             setTimeout(function (){
//                 titleWrapper.classList.add('move-down');
//                 console.log('voegt move-down toe')
//                 entry.target.classList.add('fade-out');
//                 console.log('voegt class toe fadeout')
//             }, 4000)
//             TimeoutActive = true;
//             console.log('stuurt timeout aan')
//         // } if (TimeoutActive =) {
//         //     document.addEventListener('scroll', () => {
//         //         console.log('wordt verwijderd na scroll herkenning')
//         //         entry.target.classList.remove('fade-out');
//         //         titleWrapper.classList.remove('move-down');
//         //         console.log('verwijderd move-down en moved omhoog')
//         //         TimeoutActive = false;
//             // })
//         } else {
//             document.addEventListener('scroll', () => {
//                 console.log('wordt verwijderd na scroll herkenning')
//                 entry.target.classList.toggle('fade-out');
//                 titleWrapper.classList.toggle('move-down');
//                 console.log('verwijderd move-down en moved omhoog')
  
//         })
//         }
//     });
// });



// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
//   };


// let TimeoutActive;
// const backgroundVideoWrapper = document.querySelectorAll('.fade-section');
// const titleWrapper = document.querySelector('.title-wrapper');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (window.isElementInViewport, options) {
//             console.log('is in viewport')
//             setTimeout(function (){
//                 titleWrapper.classList.toggle('move-down');
//                 console.log('voegt move-down toe')
//                 entry.target.classList.toggle('fade-out');
//                 console.log('voegt class toe fadeout')
//             }, 4000)
//             TimeoutActive = true;
//             console.log('stuurt timeout aan')
//         // } if (TimeoutActive =) {
//         //     document.addEventListener('scroll', () => {
//         //         console.log('wordt verwijderd na scroll herkenning')
//         //         entry.target.classList.remove('fade-out');
//         //         titleWrapper.classList.remove('move-down');
//         //         console.log('verwijderd move-down en moved omhoog')
//         //         TimeoutActive = false;
//             // })
//         } else {
//             document.addEventListener('scroll', () => {
//                 console.log('wordt verwijderd na scroll herkenning')
//                 entry.target.classList.toggle('fade-out');
//                 titleWrapper.classList.toggle('move-down');
//                 console.log('verwijderd move-down en moved omhoog')
  
//         })
//         }
//     });
// });








// standaard laten uitvoeren na 4 seconden
// 
// en op de if als je scrollt naar de andere staat classList
// op moment dat je terugkomt naar de section gaat hij toevoegen.

// const fadeSections = document.querySelectorAll('.fade-section');
// fadeSections.forEach((el) => observer.observe(el));







const videoContent = document.querySelectorAll(".videocontent")

const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        entry.target.classList.toggle("show", entry.isIntersecting)
    
    })
},
{
    threshold: 0.5,
    rootMargin: "-73px"
}
);


videoContent.forEach(videoContent => {
    heroObserver.observe(videoContent)
});







































// --------------------------------------
// PAUZEER EN SPEEL VIDEO OP BACKGROUND
// --------------------------------------
// moet nog functie toevoegen om te pauzeren spelen op video



var togglePausePlayButton = document.getElementById('PausePlayButton');

// Add a click event listener to toggle the background image
togglePausePlayButton.addEventListener('click', function() {
    // Check if the button has the "paused-bg" class
    if (togglePausePlayButton.classList.contains('paused-bg')) {
        // Switch to the alternate background image
        togglePausePlayButton.style.backgroundImage = "url('/images/pause.png')";
        // Replace the "paused-bg" class with "playing-bg"
        togglePausePlayButton.classList.remove('paused-bg');
        togglePausePlayButton.classList.add('playing-bg');
        video.play();
    } else {
        // Switch back to the original background image
        togglePausePlayButton.style.backgroundImage = "url('/images/play.png')";
        // Replace the "playing-bg" class with "paused-bg"
        togglePausePlayButton.classList.remove('playing-bg');
        togglePausePlayButton.classList.add('paused-bg');
        video.pause();
    }
});





// --------------------------------------
// PAUZEER EN SPEEL VIDEO OP BACKGROUND
// --------------------------------------
// moet nog functie toevoegen om te pauzeren spelen op video

var toggleVolumeButton = document.getElementById('VolumeButton');

function toggleMute (){
    video.muted = !video.muted;
}

// Add a click event listener to toggle the background image
toggleVolumeButton.addEventListener('click', function() {
    // Check if the button has the "muted-bg" class
    if (toggleVolumeButton.classList.contains('muted-bg')) {
        // Switch to the alternate background image
        toggleVolumeButton.style.backgroundImage = "url('/images/mute.png')";
        // Replace the "muted-bg" class with "unmuted-bg"
        toggleVolumeButton.classList.remove('muted-bg');
        toggleVolumeButton.classList.add('unmuted-bg');
        toggleMute();
    } else {
        // Switch back to the original background image
        toggleVolumeButton.style.backgroundImage = "url('/images/unmute.png')";
        // Replace the "unmuted-bg" class with "muted-bg"
        toggleVolumeButton.classList.remove('unmuted-bg');
        toggleVolumeButton.classList.add('muted-bg');
        toggleMute();
    }
});




// const itemWrapper = document.querySelectorAll('.product-showcase-wrapper')


//   let animationObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         entry.target.classList.add('animate');
//         console.log('test working');
//     })
//   });


//   itemWrapper.forEach(wrapper => {
//     animationObserver.observe(wrapper);
//   });


// const itemWrapper = document.querySelectorAll('.product-showcase-wrapper');

// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
// };

// let animationObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//             animationObserver.unobserve(entry.target); // Stop observeren nadat de animatie is gestart
//         }
//     });
// });

// itemWrapper.forEach(wrapper => {
//     animationObserver.observe(wrapper);
// });


// script.js
// const itemWrapper = document.querySelectorAll('.product-showcase-wrapper');

// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5, // Verander de threshold naar 0.5
// };

// let animationObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
//             entry.target.classList.add('animate');
//             animationObserver.unobserve(entry.target);
//         }
//     });
// }, options);

// itemWrapper.forEach(wrapper => {
//     wrapper.style.transform = 'translateX(0)'; // Voeg dit toe om sectie meteen op nul te positioneren
//     animationObserver.observe(wrapper);
// });

// JavaScript








































// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
//   };




// let TimeoutActive;
// const backgroundVideoWrapper = document.querySelectorAll('.fade-section');
// const titleWrapper = document.querySelector('.title-wrapper');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (window.isElementInViewport, options) {
//             console.log('is in viewport')
//             setTimeout(function (){
//                 titleWrapper.classList.toggle('move-down');
//                 console.log('voegt move-down toe')
//                 entry.target.classList.toggle('fade-out');
//                 console.log('voegt class toe fadeout')
//             }, 4000)
//             TimeoutActive = true;
//             console.log('stuurt timeout aan')
//         } else {
//             document.addEventListener('scroll', () => {
//                 console.log('wordt verwijderd na scroll herkenning')
//                 entry.target.classList.toggle('fade-out');
//                 titleWrapper.classList.toggle('move-down');
//                 console.log('verwijderd move-down en moved omhoog')
  
//         })
//         }
//     });
// });



// const fadeSections = document.querySelectorAll('.fade-section');
// fadeSections.forEach((el) => observer.observe(el));






























// const productShowcaseWrapper = document.querySelectorAll('.product-showcase-wrapper');
// const itemsProductShowcase = document.querySelectorAll('.product-showcase-items')

// let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
// };

// let animationObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isElementInViewport && entry.intersectionRatio >= 0.5) {
//             itemsProductShowcase.style.transform = 'translateX(-100%)'; // Verander de transform om de sectie naar links te animeren
//             entry.target.classList.add('animate');
//             animationObserver.unobserve(entry.target);
//         }
//     });
// }, options);

// itemWrapper.forEach(wrapper => {
//     animationObserver.observe(wrapper);
// });













// const showcaseObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const showcaseItemsWrapper = document.querySelector('.product-showcase-items');
//       const showcaseWrapper = document.querySelector('.product-showcase-wrapper');
  
//       if (showcaseWrapper.isElementInViewport) {
//         showcaseItemsWrapper.classList.add('animate');
//         console.log('animate op wrapper toevoegen')
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       showcaseItemsWrapper.classList.remove('animate');
//       console.log('animate op wrapper verwijderd')
//     });
//   });
  
//   showcaseObserver.observe(document.querySelector('.product-showcase-wrapper'));
