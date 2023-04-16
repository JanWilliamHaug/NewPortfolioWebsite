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
