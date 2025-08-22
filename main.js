
  const faders = document.querySelectorAll('.fade-in');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    faders.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  function toggleMenu() {
      const mobileNav = document.getElementById('mobile-nav');
      const desktopNav = document.getElementById('desktop-nav');
      if (mobileNav.style.display === 'none') {
        mobileNav.innerHTML = desktopNav.innerHTML;
        mobileNav.style.display = 'flex';
      } else {
        mobileNav.style.display = 'none';
      }
    }
    
    /*
  const counterElement = document.querySelector('.counter');
  const targetNumber = parseInt(counterElement.getAttribute('data-target'));
  const duration = 2000; // Animation duration in ms
  let animationStarted = false;

  function animateCounter() {
    let start = 0;
    const increment = targetNumber / (duration / 16); // 60fps

    const updateCounter = () => {
      start += increment;
      if (start < targetNumber) {
        counterElement.textContent = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        counterElement.textContent = targetNumber;
      }
    };

    updateCounter();
  }

  function checkScroll() {
    const elementPosition = counterElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight && !animationStarted) {
      animationStarted = true;
      animateCounter();
    }
  }

  window.addEventListener('scroll', checkScroll);
  // Check on page load in case element is already visible
  checkScroll();
  *//*
  const counterElement = document.querySelector('.counter');
const targetNumber = parseInt(counterElement.getAttribute('data-target'));
const duration = 2000; // Animation duration in ms
let animationStarted = false;

function animateCounter() {
  let start = 0;
  const increment = targetNumber / (duration / 16); // 60fps
  
  const updateCounter = () => {
    start += increment;
    if (start < targetNumber) {
      counterElement.innerHTML = Math.floor(start) + '<span class="plus-icon">+</span>';
      requestAnimationFrame(updateCounter);
    } else {
      counterElement.innerHTML = targetNumber + '<span class="plus-icon">+</span>';
    }
  };
  
  updateCounter();
}
*/
const counterElements = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counterElement = entry.target;
      const targetNumber = parseInt(counterElement.getAttribute('data-target'));
      const duration = 2000;
      let start = 0;
      const increment = targetNumber / (duration / 16);
      
      const animateCounter = () => {
        start += increment;
        if (start < targetNumber) {
          counterElement.innerHTML = Math.floor(start) + '<span class="plus-icon">+</span>';
          requestAnimationFrame(animateCounter);
        } else {
          counterElement.innerHTML = targetNumber + '<span class="plus-icon">+</span>';
        }
      };
      
      animateCounter();
      observer.unobserve(counterElement); // Stop observing after animation
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of element is visible

// Start observing all counters
counterElements.forEach(counter => {
  observer.observe(counter);
});



function checkScroll() {
  const elementPosition = counterElement.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (elementPosition < windowHeight && !animationStarted) {
    animationStarted = true;
    animateCounter();
  }
}

window.addEventListener('scroll', checkScroll);


const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const slider = document.querySelector('.slider');
let currentSlide = 0;
let startX = 0;
let endX = 0;

// Create dots
/*
slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Function to show slide
function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));
  slides[n].classList.add('active');
  dots[n].classList.add('active');
}

// Function to handle dot click
function handleDotClick(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Add event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => handleDotClick(index));
});

// Swipe functionality
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX > endX + 50) {
    // Swipe left
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  } else if (startX < endX - 50) {
    // Swipe right
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
}

// Auto-slide functionality (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);
// Check on page load in case element is already visible
*/