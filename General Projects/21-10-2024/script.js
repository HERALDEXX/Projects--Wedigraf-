document.addEventListener('DOMContentLoaded', function() {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Anime.js Animations
  anime({
    targets: '.hero h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
  });

  anime({
    targets: '.hero p',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    delay: 500,
    easing: 'easeOutExpo'
  });

  anime({
    targets: '.hero .btn',
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1500,
    delay: 1000,
    easing: 'easeOutExpo'
  });

  // Games Section Animation
  anime({
    targets: '.games .game',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    delay: anime.stagger(200, {start: 1000}),
    easing: 'easeOutExpo'
  });

  // Contact Section Animation
  anime({
    targets: '.contact form',
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1500,
    delay: 1500,
    easing: 'easeOutExpo'
  });
});