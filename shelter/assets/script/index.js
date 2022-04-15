const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation");
const shaddow = document.querySelector(".shaddow");

const openMenu = () => {
  hamburger.classList.toggle("hamburger_open");
  menu.classList.toggle("navigation_open");
  shaddow.classList.toggle("shaddow_open");
};

const closeMenu = (event) => {
  if (
    event.target.classList.contains("navigation__link") ||
    event.target.classList.contains("shaddow")
  ) {
    hamburger.classList.remove("hamburger_open");
    menu.classList.remove("navigation_open");
    shaddow.classList.remove("shaddow_open");
  }
};

hamburger.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);
shaddow.addEventListener("click", closeMenu);
