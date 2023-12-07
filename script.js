function scrolltoElement(elementSelector, instance = 0) {
  // Select all elements that match the given selector
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
  scrolltoElement(".header");
});

link2.addEventListener("click", () => {
    scrolltoElement(".header", 1);
  });

link3.addEventListener("click", () => {
scrolltoElement(".column");
});

function setupHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  setupHamburgerMenu();
});