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


// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Select all project cards
  const projectCards = document.querySelectorAll('.card');
  
  // Add event listener to window on scroll
  window.addEventListener('scroll', () => {
    // Loop through all project cards and check if they are in viewport
    projectCards.forEach((card) => {
      if (isInViewport(card)) {
        // If in viewport, add animation class
        card.classList.add('animate__animated', 'animate__zoomIn');
      } else {
        // If not in viewport, remove animation class
        card.classList.remove('animate__animated', 'animate__zoomIn');
      }
    });
  });

  $(window).scroll(function() {
    $('.card').each(function() {
        var position = $(this).offset().top;
        var scrollPosition = $(window).scrollTop() + $(window).height();
        if (position < scrollPosition) {
            $(this).addClass('animate__zoomIn');
        }
    });
});
