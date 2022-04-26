import "../../assets/script/hamburger.js";
import { stopScrool, startScrool } from "../../assets/script/hamburger.js";
import { data } from "../../assets/script/constans.js";
import { PetsCards } from "../../assets/script/petsCard.js";
import { openModal } from "../../assets/script/functions.js";

let windowWidth = document.documentElement.clientWidth;
const couruselWrapper = document.querySelector(".our__pets__wrapper");
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
for (let i = 0; i < petCardsArrey.length; i++) {
  let randomIndex = Math.floor(Math.random() * petCardsArrey.length);
  let a = petCardsArrey[i];
  petCardsArrey[i] = petCardsArrey[randomIndex];
  petCardsArrey[randomIndex] = a;
}

const start = () => {
  windowWidth = document.documentElement.clientWidth;
  let ourPetsContainer = document.querySelector(".our__pets");

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
  for (let i = columnPets; i < petCardsArrey.length; i++) {
    let randomIndex =
      Math.floor(Math.random() * (petCardsArrey.length - columnPets)) +
      columnPets;
    let a = petCardsArrey[i];
    petCardsArrey[i] = petCardsArrey[randomIndex];
    petCardsArrey[randomIndex] = a;
  }
  document
    .querySelectorAll(".pet-card")
    .forEach((item) => item.addEventListener("click", openModal));
};

const goLeft = () => {
  buttonLeft.removeEventListener("click", goLeft);
  buttonRight.removeEventListener("click", goRight);
  let tempContainer = document.querySelector(".our__pets");
  for (let i = 0; i < columnPets; i++) {
    let tempCard = petCardsArrey.shift();
    petCardsArrey.push(tempCard);
  }
  let ourContainer = document.createElement("div");
  ourContainer.className = "our__pets our__pets_right";
  for (let i = 0; i < columnPets; i++) {
    ourContainer.append(petCardsArrey[i]);
  }
  couruselWrapper.append(ourContainer);
  setTimeout(() => {
    tempContainer.classList.add("our__pets_left");
    ourContainer.classList.remove("our__pets_right");
  }, 200);
  ourContainer.addEventListener("transitionend", () => {
    tempContainer.remove();
    buttonLeft.addEventListener("click", goLeft);
    buttonRight.addEventListener("click", goRight);
  });

  // start();
};
const goRight = () => {
  buttonLeft.removeEventListener("click", goLeft);
  buttonRight.removeEventListener("click", goRight);
  let tempContainer = document.querySelector(".our__pets");
  for (let i = 0; i < columnPets; i++) {
    let tempCard = petCardsArrey.pop();
    petCardsArrey.unshift(tempCard);
  }

  let ourContainer = document.createElement("div");
  ourContainer.className = "our__pets our__pets_left";
  for (let i = 0; i < columnPets; i++) {
    ourContainer.append(petCardsArrey[i]);
  }
  couruselWrapper.append(ourContainer);
  setTimeout(() => {
    tempContainer.classList.add("our__pets_right");
    ourContainer.classList.remove("our__pets_left");
  }, 200);
  ourContainer.addEventListener("transitionend", () => {
    tempContainer.remove();
    buttonLeft.addEventListener("click", goLeft);
    buttonRight.addEventListener("click", goRight);
  });

  // start();
};

start();

window.addEventListener("resize", start);
buttonLeft.addEventListener("click", goLeft);
buttonRight.addEventListener("click", goRight);
