import { data } from "./constans.js";
import { PetsCards } from "./petsCard.js";
import { PopUp } from "./popup.js";
import { startScrool, stopScrool } from "./hamburger.js";

const generateCardsArray = () => {
  let arr = [];
  data.forEach((obj) => {
    let pet = new PetsCards(obj);
    let cardPet = pet.generatePetCard();
    arr.push(cardPet);
  });
  return arr;
};

const generateIndexPetCardsArrey = (col) => {
  if (col === 8) {
    return generateMaxArrey();
  }
  return generateMinArrey();
};

const generateMaxArrey = () => {
  let arr = generateArrey();
  return resortArr(arr, 8);
};

const generateMinArrey = () => {
  let arr = generateArrey();
  return resortArr(arr, 6);
};

const generateArrey = () => {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7];
  let arrIndex = [];
  for (let i = 0; i < 6; i++) {
    arrIndex = arrIndex.concat(arr);
  }
  return arrIndex;
};

const resortArr = (arr, num) => {
  for (let i = 0; i < arr.length; i += num) {
    for (let j = i; j < i + num; j++) {
      let randomIndex = Math.floor(Math.random() * num);
      let a = arr[j];
      arr[j] = arr[randomIndex + i];
      arr[randomIndex + i] = a;
    }
  }
  return arr;
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

export {
  generateCardsArray,
  generateIndexPetCardsArrey,
  openModal,
  closeModal,
};
