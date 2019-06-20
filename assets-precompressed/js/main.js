// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // Remove class for btn blinking effect
    menuBtn.classList.remove('btn-closed');
    // Remove btn title
    menuBtn.setAttribute('title', '');

    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    // Add class for btn blinking effect
    menuBtn.classList.add('btn-closed');
    // Set btn title
    menuBtn.setAttribute('title', 'Yes, Master?');

    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// Yes Master audio
function playSound() {
  var isPlayable = document.getElementById('menu-btn');

  // If playable class is there
  if(isPlayable.classList.contains('sound-playable')) {
    // Remove playable class for 10sec
    isPlayable.classList.remove('sound-playable');
    setTimeout(() => {
      isPlayable.classList.add('sound-playable');
    }, 10000);

    // Play sound
    if (navigator.appName == 'Microsoft Internet Explorer' && (navigator.appVersion.indexOf('MSIE 7')!=-1) || (navigator.appVersion.indexOf('MSIE 8')!=-1)) {
      if (document.all) {
        document.all.sound.src = '../sounds/yes-master.mp3';
      }
    } else {
      var audio = document.getElementsByTagName('audio')[0];
      audio.play();
    }
  }
};
