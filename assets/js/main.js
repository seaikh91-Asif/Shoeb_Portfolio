/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('home-text'), 
      letters = homeText.textContent.trim().split(''), // converts text into an arry of character 
      angleStep = 360 / letters.length // Angle for each; length counts the number

homeText.textContent = '' // Clears the original content
letters.forEach((char, i) => {
   const span = document.createElement('span') // Create a <span> for each letter 
   span.textContent = char // Inserts each eharacter into the span 
   span.style.transform = `rotate(${i * angleStep}deg)` // Rotate each letters based on its index to form the circle
   homeText.appendChild(span) // Append the span to the main container


})

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
  strings: ['Engineering Student', 'Web Developer', 'Tech Enthusiast'],
  typeSpeed: 60,
  backSpeed: 30, 
  backDelay: 2000, 
  loop:true,
});

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
   const header = document.getElementById('header')
   // Add teh .scroll-header classs if bottom scroll of the viewport is greater than 50 
   this.scrollY >= 50 ? header.classList.add('scroll-header')
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER WORK ===============*/ 
/*=============== SWIPER WORK ===============*/ 
const swiperWork = new Swiper('.work__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1,
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },

     autoplay: {
      delay: 2000, 
      disableOnInteraction: false,
     }
})

/*=============== SERVICES ACCORDION ===============*/ 
const servicesCards = document.querySelectorAll('.services__card');
const servicesButtons = document.querySelectorAll('.services__button');

servicesButtons.forEach(button => {
button.addEventListener('click', () => {
const currentCard = button.closest('.services__card');
const isOpen = currentCard.classList.contains('services-open');


servicesCards.forEach(card => {
card.classList.remove('services-open');
card.classList.add('services-close');
});


if (!isOpen) {
currentCard.classList.add('services-open');
currentCard.classList.remove('services-close');
}
});
});

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/ 
const tracks = document.querySelectorAll('.testimonials__content');

tracks.forEach(track => {
   // Get the child testimonial sliders and create an array copy of all cards
   // The spread operator [...] converts the HTMLCollection into an array
   const cards = [...track.children]; 
   
   for (const card of cards) {
      // Duplicate the card and append it at the end 
      track.appendChild(card.cloneNode(true));
   }
});

/*=============== CONTACT EMAIL JS ===============*/ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/
