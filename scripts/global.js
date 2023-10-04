// mijn simpele meesterwerk van een checker die de menu in en uit laat schuiven.
// niet bijzonder, werkt goed.
const hamburgerButton = document.querySelector('header > section:first-of-type nav > div:first-of-type img:first-of-type');
const hamburgerCloseButton = document.querySelector('header > section:nth-of-type(2) article div svg');
const menu = document.querySelector('header > section:nth-of-type(2)')

hamburgerButton.addEventListener('click', menuChecker);
hamburgerCloseButton.addEventListener('click', menuChecker);

function menuChecker(){
    if (menu.classList.contains('shown')){
        menu.classList.remove('shown')
    } else {
        menu.classList.add('shown')
    }
    
};



// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------




// laat ik controleren op opgeslagen lokale storage
let darkSwitch = localStorage.getItem('darkSwitch'); 

const darkSwitchToggle = document.querySelector('#toggle-switch');

const enableDarkSwitch = () => {
  document.body.classList.add('darkSwitch');
// hier update hij de storage naar enabled zodat de browser volgende 
// keer de opgegeven setting zal onthouden en hergebruiken, 
// tot dat er een ander wordt aangewezen.
  localStorage.setItem('darkSwitch', 'enabled');
}

const disableDarkSwitch = () => {
  document.body.classList.remove('darkSwitch');
// zelfde verhaal al snet maar dan wordt de darkswitch leeggemaakt 
// zodat hij als het ware aan en uit gaat.
  localStorage.setItem('darkSwitch', null);
}
 
// statement die check als de lokale storage op enabled staat dat hij de enable function uitvoerd
// het is geen boolean, gewoon een string maar het werkt.
if (darkSwitch === 'enabled') {
  enableDarkSwitch();
}

darkSwitchToggle.addEventListener('click', () => {
// hier had ik eerst een bug.
// hij haalde niet opnieuw de darkSwitch value op (alleen als de pagina geladen werd)
// maar dat komt omdat ik ook bij een click de darkswtich oet laten get-en uit de lokale storage. :)
  darkSwitch = localStorage.getItem('darkSwitch'); 
  
  if (darkSwitch !== 'enabled') {
    enableDarkSwitch();
  } else {  
    disableDarkSwitch(); 
  }
});




