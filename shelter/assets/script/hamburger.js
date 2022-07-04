// import { data } from "./constans";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation");
const shaddow = document.querySelector(".shaddow");
const scrool = document.querySelector(".body");

const openMenu = () => {
  hamburger.classList.toggle("hamburger_open");
  menu.classList.toggle("navigation_open");
  shaddow.classList.toggle("shaddow_open");
  if (scrool.classList.contains("body_no-scrool")) {
    startScrool();
  } else {
    stopScrool();
  }
};

const stopScrool = () => {
  let pagePosition = window.scrollY;
  scrool.classList.toggle("body_no-scrool");
  scrool.dataset.position = pagePosition;
  scrool.style.top = -pagePosition + "px";
};

const closeMenu = (event) => {
  if (
    event.target.classList.contains("navigation__link") ||
    event.target.classList.contains("shaddow")
  ) {
    hamburger.classList.remove("hamburger_open");
    menu.classList.remove("navigation_open");
    shaddow.classList.remove("shaddow_open");
    startScrool();
  }
};

const startScrool = () => {
  let pagePosition = parseInt(scrool.dataset.position, 10);
  scrool.style.top = "auto";
  scrool.classList.remove("body_no-scrool");
  window.scroll({ top: pagePosition, left: 0 });
  scrool.removeAttribute("data-position");
};

hamburger.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);
shaddow.addEventListener("click", closeMenu);

export { startScrool, stopScrool };
