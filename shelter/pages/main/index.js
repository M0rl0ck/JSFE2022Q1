import "../../assets/script/hamburger.js";
import { stopScrool, startScrool } from "../../assets/script/hamburger.js";
import { data } from "../../assets/script/constans.js";
import { PetsCards } from "../../assets/script/petsCard.js";
import { PopUp } from "../../assets/script/popup.js";

let windowWidth = document.documentElement.clientWidth;
const ourPetsContainer = document.querySelector(".our__pets");
const buttonLeft = document.querySelector(".our__button-arrey_left");
const buttonRight = document.querySelector(".our__button-arrey_right");

let petCardsArrey = [];
let indexPetCardsArrey = 0;
let columnPets = 0;
data.forEach((obj) => {
  let pet = new PetsCards(obj);
  let cardPet = pet.generatePetCard();
  petCardsArrey.push(cardPet);
});

const start = () => {
  windowWidth = document.documentElement.clientWidth;

  if (windowWidth >= 1280) {
    columnPets = 3;
  } else if (windowWidth >= 768) {
    columnPets = 2;
  } else {
    columnPets = 1;
  }
  ourPetsContainer.innerHTML = "";
  for (let i = 0; i < columnPets; i++) {
    ourPetsContainer.append(petCardsArrey[i]);
  }
  document
    .querySelectorAll(".pet-card")
    .forEach((item) => item.addEventListener("click", openModal));
};

const goLeft = () => {
  for (let i = 0; i < columnPets; i++) {
    let tempCard = petCardsArrey.shift();
    petCardsArrey.push(tempCard);
  }
  start();
};
const goRight = () => {
  for (let i = 0; i < columnPets; i++) {
    let tempCard = petCardsArrey.pop();
    petCardsArrey.unshift(tempCard);
  }
  start();
};

const openModal = (e) => {
  let petId = e.currentTarget.dataset.id;
  let overCard = new PopUp(
    data.find((item) => item.name === petId)
  ).generatePopUpWindow();
  document.body.append(overCard);
  stopScrool();
  document.querySelector(".overlay").addEventListener("click", closeModal);
};

const closeModal = (e) => {
  let classes = e.target.classList;
  if (
    classes.contains("overlay") ||
    classes.contains("button") ||
    classes.contains("button__img")
  ) {
    startScrool();
    document.querySelector(".overlay").remove();
  }
};

start();

// let overCard = new PopUp(data[1]).generatePopUpWindow();
// document.body.append(overCard);
// console.log(overCard);

window.addEventListener("resize", start);
buttonLeft.addEventListener("click", goLeft);
buttonRight.addEventListener("click", goRight);
