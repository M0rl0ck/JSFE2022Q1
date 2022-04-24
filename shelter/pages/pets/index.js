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
const buttons = document.querySelector(".pagination-buttons");

let petCardsArrey = generateCardsArray();
let indexPetCardsArrey = [];
let indexArrey = 0;
let columnPets = 0;

const start = () => {
  windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= 1280) {
    columnPets = 8;
    indexPetCardsArrey = generateIndexPetCardsArrey(columnPets);
    console.log(indexPetCardsArrey);
  } else if (windowWidth >= 768) {
    columnPets = 6;
    indexPetCardsArrey = generateIndexPetCardsArrey(columnPets);
  } else {
    columnPets = 3;
    indexPetCardsArrey = generateIndexPetCardsArrey(columnPets);
  }
  pagination.innerHTML = "";
  for (let i = 0; i < columnPets; i++) {
    pagination.append(petCardsArrey[i]);
  }
  document
    .querySelectorAll(".pet-card")
    .forEach((item) => item.addEventListener("click", openModal));
};

const restart = () => {
  if (windowWidth >= 1280 && columnPets === 8) {
    return;
  } else if (1280 > windowWidth >= 768 && columnPets === 6) {
    return;
  } else if (windowWidth < 768 && columnPets === 3) {
    return;
  }
  start();
};

start();

window.addEventListener("resize", restart);
