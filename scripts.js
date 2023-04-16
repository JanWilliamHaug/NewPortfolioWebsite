function parallax() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
  
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  }
  
  window.addEventListener('scroll', parallax);

  
  document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed", {
        strings: ["Web Developer", "Programmer", "Front-end developer", "Mobile app developer",  "Software developer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
});

// Get all the project cards
const cards = document.querySelectorAll('.card');

// Add a scroll event listener to the window
window.addEventListener('scroll', showCards);

function showCards() {
    // Loop through each card and check if it's in the viewport
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isVisible = rect.top + scrollTop >= window.innerHeight - rect.height / 2;

        // If the card is in the viewport, add the "show" class
        if (isVisible) {
            card.classList.add('show');
        }
    });
}
