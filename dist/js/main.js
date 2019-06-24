"use strict";

// DOM Items
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
var menuNav = document.querySelector('.menu-nav');
var menuBranding = document.querySelector('.menu-branding');
var navItems = document.querySelectorAll('.nav-item'); // Set Initial State Of Menu

var showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // Remove class for btn blinking effect
    menuBtn.classList.remove('btn-closed'); // Remove btn title

    menuBtn.setAttribute('title', '');
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(function (item) {
      return item.classList.add('show');
    }); // Set Menu State

    showMenu = true;
  } else {
    // Add class for btn blinking effect
    menuBtn.classList.add('btn-closed'); // Set btn title

    menuBtn.setAttribute('title', 'Yes, Master?');
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(function (item) {
      return item.classList.remove('show');
    }); // Set Menu State

    showMenu = false;
  }
} // Audio


function playSound() {
  var isPlayable = document.getElementById('menu-btn');
  var audio = document.getElementsByTagName('audio')[0]; // If playable class is there

  if (isPlayable.classList.contains('sound-playable')) {
    // Remove playable class for 10sec
    isPlayable.classList.remove('sound-playable');
    setTimeout(function () {
      isPlayable.classList.add('sound-playable');
    }, 10000); // Play sound

    if (navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.indexOf('MSIE 7') != -1 || navigator.appVersion.indexOf('MSIE 8') != -1) {
      if (document.all) {
        document.all.sound.src = '../sounds/yes-master.mp3';
      }
    } else {
      audio.volume = 0.2; // audio.play();
    }
  }
}

; // Document Ready

document.addEventListener('DOMContentLoaded', function () {
  var preloader = document.querySelector('.preloader');
  var main = document.querySelector('main');
  setTimeout(function () {
    // Hide preloader
    preloader.style.opacity = 0;
    preloader.style.display = 'none'; // Display main content

    main.style.display = 'block';
    setTimeout(function () {
      main.style.opacity = 1;
    }, 50);
  }, 1900);
});