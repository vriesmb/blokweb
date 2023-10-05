
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 




const video = document.querySelector(".background-video");
let pauseStatus;

// function om te controleren of een element in het viewport is
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        // innerHeight geeft aan hoe hoog de sectie is
                    // zijn de window dimensies inclusief de scrollbars
                // clientHeigt etc rekent immers zelfde window 
                    // maar dan zonder de scrollbars. 
                    // dus voor de veiligheid check ik ze allebei
    );
}

// fucntion om de video te controleren en af te spelen of om te pauzerenn
function checkVideo() {
    if (isElementInViewport(video)) { 
        // runned de function van net maar nu met parameter video

        // video is in viewport en speelt dus af als deze is gepauzeerd
            // daarnaast wat styling adden en removen om de knoppen dynamisch te maken afhankelijk van de playback
        if (video.paused) {
            togglePausePlayButton.style.backgroundImage = "url('images/pause.png')";
            togglePausePlayButton.classList.remove('paused-bg');
            togglePausePlayButton.classList.add('playing-bg');
            video.play();
        }
    } else {
        // Video is buiten het viewport, pauzeert met een vertraging van 0,8 seconden
        if (!video.paused) {
            setTimeout(function() {
                togglePausePlayButton.style.backgroundImage = "url('images/play.png')";
                togglePausePlayButton.classList.remove('playing-bg');
                togglePausePlayButton.classList.add('paused-bg');
                video.pause();
            }, 800); // kleine delay van (0,8 seconden) zodat het wat smoother lijkt te gaan...
        }
    }
}

// checked de video ook als er een scroll geregistreerd wordt binnen de window.
window.addEventListener("scroll", checkVideo);

// controleert als eerste de videostatus wanneer de pagina geladen is
document.addEventListener("DOMContentLoaded", checkVideo);




// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 





// deze simpele function heb ik geschreven om de tekst in te laten vaden.
    // dat is zoals ik het noemt de videocontent

    // haalt eerst de content op met de const

const videoContent = document.querySelectorAll(".videocontent")

    // maak een observer fucntion aan met de intersectionObserver API..
    // heb er een foreach loop van gemaakt omdat er 2 video sections zijn op de pagina.
    // vandaar dus ook de queryselectorAll zodat er een nodelist gemaakt wordt.... :)
const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        entry.target.classList.toggle("show", entry.isIntersecting)
    
    })
},
// hier wat settigns om het smooth te laten verlopen.
// ik heb nogals wat gestruggled hiermee want werkte niet echt lekker.
// werkt nu voor het mobiele formaat, maar ik ben van mening dat het beter kan,
// hoe mag god mij vertellen... 
// rootMargin was in dit geval de fix voor mijn bug.
{   
    root: null,
    threshold: 0.50,
    rootMargin: "-73px",
}
);


//tot slot laat ik voor elke videocontent de observer starten

videoContent.forEach(videoContent => {
    heroObserver.observe(videoContent)
});




// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 






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
        togglePausePlayButton.style.backgroundImage = "url('images/pause.png')";
        // Replace the "paused-bg" class with "playing-bg"
        togglePausePlayButton.classList.remove('paused-bg');
        togglePausePlayButton.classList.add('playing-bg');
        video.play();
    } else {
        // Switch back to the original background image
        togglePausePlayButton.style.backgroundImage = "url('images/play.png')";
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
        toggleVolumeButton.style.backgroundImage = "url('images/mute.png')";
        // Replace the "muted-bg" class with "unmuted-bg"
        toggleVolumeButton.classList.remove('muted-bg');
        toggleVolumeButton.classList.add('unmuted-bg');
        toggleMute();
    } else {
        // Switch back to the original background image
        toggleVolumeButton.style.backgroundImage = "url('images/unmute.png')";
        // Replace the "unmuted-bg" class with "muted-bg"
        toggleVolumeButton.classList.remove('unmuted-bg');
        toggleVolumeButton.classList.add('muted-bg');
        toggleMute();
    }
});





// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 


const container = document.querySelector('.collections > div');
const articles = document.querySelectorAll('.collections article');
const dots = document.querySelectorAll('.dot');


const indicatorOptions = {
  root: container,
  threshold: 0.5,
};

const indicatorObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(articles).indexOf(entry.target);
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  });
}, indicatorOptions);

articles.forEach((article) => {
  indicatorObserver.observe(article);
});



document.addEventListener("DOMContentLoaded", function() {
    dots.forEach(indicator => {
        indicator.addEventListener("click", () => {
            const target = indicator.getAttribute("data-target");
            const targetElement = document.getElementById(target);
           if (targetElement) { // deze is sowieso true
                const targetOffset = targetElement.offsetLeft;
                container.scrollTo({
                    left: targetOffset,
                    behavior: "smooth"
                
                });
                console.log(targetOffset);
                // targetOffset meet het begin van de container tot de parent.
            }
        });
    });
});





// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 



const containerMenWoman = document.querySelector('.watches-men-woman div');
const articlesMenWoman = document.querySelectorAll('.watches-men-woman div article');

const dotsMenWoman = document.querySelectorAll('.dotMenWoman');

const indicatorMenWomanOptions = {
  root: containerMenWoman,
  threshold: 0.5,
};

const indicatorMenWomanObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const indexMenWoman = Array.from(articlesMenWoman).indexOf(entry.target);
      dotsMenWoman.forEach((dotMenWoman, i) => {
        dotMenWoman.classList.toggle('active', i === indexMenWoman);
      });
    }
  });
}, indicatorMenWomanOptions);

articlesMenWoman.forEach((menWomanArticle) => {
  indicatorMenWomanObserver.observe(menWomanArticle);
});





// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 


const hearts = document.querySelectorAll('.product_heart');
const counter = document.querySelector(".counter"); 
let clickCount = 0;
const containerHeart = document.querySelector('header');
const addedHeart = document.createElement("img");
const shoppingCartItems = document.querySelector('header section > div:last-child');
const shoppingCartItemsValue = document.querySelector('header section > div:last-child p:last-of-type');
const shoppingCartItemsText = document.querySelector('header section > div:last-child p:nth-of-type(1)');
const shoppingCartButton = document.querySelector('header section > div:last-child button');
const shoppingCartNavButton = document.querySelector('header section nav div:nth-of-type(2) img:last-of-type');

hearts.forEach(heart => {
    heart.addEventListener("click", () => {

        if (heart.classList.contains("favorite") == false){
            heart.classList.add("favorite");
            addedHeart.classList.add("added_heart");
            containerHeart.appendChild(addedHeart);
            clickCount ++;
            shoppingCartChecker();

        }   else {
            heart.classList.remove("favorite");
            addedHeart.classList.remove("added_heart");
            clickCount --;
            shoppingCartChecker();
        }

        console.log(clickCount);

       

        });
    });

     
    shoppingCartButton.addEventListener("click", () => {
        shoppingCartItems.classList.remove('shown');
    });

    shoppingCartNavButton.addEventListener("click", () => {
        shoppingCartItems.classList.toggle('shown');
    });

    function shoppingCartChecker(){
            shoppingCartItemsText.innerText = 'Watches in cart';
            shoppingCartItems.classList.add('shown');
            console.log('cart heeft'+ clickCount + 'items');
            shoppingCartItemsValue.innerText = clickCount;

          if (clickCount == 0){
            shoppingCartItemsText.innerText = 'Your cart is empty';
            shoppingCartItemsValue.innerText = clickCount;
            shoppingCartItems.classList.add('shown');
            console.log('cart heeft'+ clickCount + 'items');

        } 
    };
   


       
