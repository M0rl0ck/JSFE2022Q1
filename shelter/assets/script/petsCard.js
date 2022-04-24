class PetsCards {
  constructor(obj) {
    this.name = obj.name;
    this.url = obj.img;
  }
  generatePetCard() {
    let template = "";
    let card = document.createElement("div");
    card.className = "pet-card";
    card.setAttribute("data-id", this.name);
    template += `<img src=${this.url} alt=${this.name}>`;
    template += `<h4 class="pet-card__title">${this.name}</h4>`;
    template += ` <a href="#!" class="button-link button-link_bordered">Learn more</a>`;
    card.innerHTML = template;
    return card;
  }
}

export { PetsCards };
