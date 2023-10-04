
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 


const container = document.querySelector('.timepieceintro > div');
const articles = document.querySelectorAll('.scrollItems');
const dots = document.querySelectorAll('.dotWatch');


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


// simpele code die de video opgraaft, een button herkend..
// class toevoegt en verwijderd en een eventlistener die luisterd naar de beeindigde video evenals een click
const watchShowcaseVideo = document.querySelector('#showcaseVideo');
        const replayButton = document.querySelector('#replayButton');

        watchShowcaseVideo.addEventListener('ended', function() {
        //    toont de replay button 
            replayButton.classList.add('shown');
        });

        replayButton.addEventListener('click', function() {
    // verbergt de replay button weer
            replayButton.classList.remove('shown');

            // deze herstart de video weer door tijd op 0 te zetten en af te spelen
            watchShowcaseVideo.currentTime = 0;
            watchShowcaseVideo.play();
        });


// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 
// ----------- ----------- ----------- ----------- -----------  ----------- 



const technicalSpecCardTriggers = document.querySelectorAll('.tech_spec_card_trigger');
const technicalSpecCardBodies = document.querySelectorAll('.tech_spec_card_body');
const technicalSpecCardTriggerSVGs = document.querySelectorAll('.tech_spec_card_trigger svg');

technicalSpecCardTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    technicalSpecCardBodies.forEach((body, bodyIndex) => {
      if (bodyIndex === index) {
        body.classList.toggle('hidden');
        technicalSpecCardTriggerSVGs[index].classList.toggle('rotate');
      } else {
        body.classList.add('hidden');
        technicalSpecCardTriggerSVGs[bodyIndex].classList.remove('rotate');
      }
    });
  });
});

function cardFold() {
  technicalSpecCardBodies.forEach((cardBody, index) => {
    if (!cardBody.classList.contains('hidden')) {
        body.classList.toggle('spacing');
      cardBody.classList.add('collapsing');
      setTimeout(function() {
        cardBody.classList.remove('collapsing');
      }, 250);
      cardBody.classList.add('hidden');
    } else {
        body.classList.toggle('spacing');
      cardBody.classList.add('collapsing');
      setTimeout(function() {
        cardBody.classList.remove('collapsing');
      }, 250);
      cardBody.classList.remove('hidden');
    }
  });
}
