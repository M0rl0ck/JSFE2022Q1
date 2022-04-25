import "../../assets/script/hamburger.js";
import { stopScrool, startScrool } from "../../assets/script/hamburger.js";
import { data } from "../../assets/script/constans.js";
import { PetsCards } from "../../assets/script/petsCard.js";
import { PopUp } from "../../assets/script/popup.js";
import {
  generateCardsArray,
  generateIndexPetCardsArrey,
  openModal,
  closeModal,
} from "../../assets/script/functions.js";

let windowWidth = document.documentElement.clientWidth;
const pagination = document.querySelector(".pagination");
const paginationButtons = document.querySelector(".pagination-buttons");
const buttons = paginationButtons.querySelectorAll(".button");
const paginationPage = paginationButtons.querySelector(".button_colored");

let petCardsArrey = generateCardsArray();
let indexPetCardsArrey = [];
let columnPages = 0;
let page = 1;
let indexArrey = 0;
let columnPets = 0;

const start = () => {
  windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= 1280) {
    columnPets = 8;
    columnPages = 6;
    indexPetCardsArrey = generateIndexPetCardsArrey(columnPets);
  } else if (windowWidth >= 768) {
    columnPets = 6;
    columnPages = 8;
    indexPetCardsArrey = generateIndexPetCardsArrey(columnPets);
  } else {
    columnPets = 3;
    columnPages = 16;
    indexPetCardsArrey = generateIndexPetCardsArrey(columnPets);
  }

  indexArrey = 0;
  page = 1;
  buttons.forEach((item) => {
    if (item.dataset.moove === "start" || item.dataset.moove === "left") {
      item.classList.remove("button_active");
      item.classList.add("button_disabled");
    }
    if (item.dataset.moove === "end" || item.dataset.moove === "right") {
      item.classList.remove("button_disabled");
      item.classList.add("button_active");
    }
  });

  paginationDraw();
};

const paginationDraw = () => {
  paginationPage.innerHTML = `<span>${page}</span>`;
  pagination.innerHTML = "";
  for (let i = 0; i < columnPets; i++) {
    pagination.append(petCardsArrey[indexPetCardsArrey[i + indexArrey]]);
  }
  document
    .querySelectorAll(".pet-card")
    .forEach((item) => item.addEventListener("click", openModal));
};

const restart = () => {
  windowWidth = document.documentElement.clientWidth;
  if (windowWidth >= 1280 && columnPets === 8) {
    return;
  } else if (1280 > windowWidth && windowWidth >= 768 && columnPets === 6) {
    return;
  } else if (windowWidth < 768 && columnPets === 3) {
    return;
  }
  start();
};

const paginationGo = (e) => {
  if (e.target.classList.contains("button_active")) {
    let moove = e.target.dataset.moove;
    if (moove === "start") {
      goStart();
    }
    if (moove === "left") {
      goLeft();
    }
    if (moove === "right") {
      goRight();
    }
    if (moove === "end") {
      goEnd();
    }
  }
};
const goStart = () => {
  page = 1;
  indexArrey = 0;
  buttons.forEach((item) => {
    if (item.dataset.moove === "start" || item.dataset.moove === "left") {
      item.classList.remove("button_active");
      item.classList.add("button_disabled");
    }
    if (item.dataset.moove === "end" || item.dataset.moove === "right") {
      item.classList.remove("button_disabled");
      item.classList.add("button_active");
    }
  });
  paginationDraw();
};
const goLeft = () => {
  page -= 1;
  indexArrey -= columnPets;
  if (page === 1) {
    buttons.forEach((item) => {
      if (item.dataset.moove === "start" || item.dataset.moove === "left") {
        item.classList.remove("button_active");
        item.classList.add("button_disabled");
      }
    });
  }
  buttons.forEach((item) => {
    if (item.dataset.moove === "end" || item.dataset.moove === "right") {
      item.classList.remove("button_disabled");
      item.classList.add("button_active");
    }
  });
  paginationDraw();
};
const goRight = () => {
  page += 1;
  indexArrey += columnPets;
  if (page === columnPages) {
    buttons.forEach((item) => {
      if (item.dataset.moove === "end" || item.dataset.moove === "right") {
        item.classList.remove("button_active");
        item.classList.add("button_disabled");
      }
    });
  }

  buttons.forEach((item) => {
    if (item.dataset.moove === "start" || item.dataset.moove === "left") {
      item.classList.remove("button_disabled");
      item.classList.add("button_active");
    }
  });
  paginationDraw();
};
const goEnd = () => {
  page = columnPages;
  indexArrey = (page - 1) * columnPets;
  buttons.forEach((item) => {
    if (item.dataset.moove === "end" || item.dataset.moove === "right") {
      item.classList.remove("button_active");
      item.classList.add("button_disabled");
    }
    if (item.dataset.moove === "start" || item.dataset.moove === "left") {
      item.classList.remove("button_disabled");
      item.classList.add("button_active");
    }
  });
  paginationDraw();
};

start();

window.addEventListener("resize", restart);
paginationButtons.addEventListener("click", paginationGo);
