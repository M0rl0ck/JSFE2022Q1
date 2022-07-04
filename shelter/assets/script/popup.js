class PopUp {
  constructor(obj) {
    this.name = obj.name;
    this.url = obj.img;
    this.type = obj.type;
    this.breed = obj.breed;
    this.description = obj.description;
    this.age = obj.age;
    this.inoculations = obj.inoculations;
    this.diseases = obj.diseases;
    this.parasites = obj.parasites;
  }
  generatePopUpWindow() {
    let template = "";
    let overlay = document.createElement("div");
    overlay.className = "overlay";

    let button = document.createElement("button");
    button.className = "button button_active";
    button.innerHTML = `<img src="../../assets/icons/X.svg" alt="X" class="button__img">`;

    let modalWrapper = document.createElement("div");
    modalWrapper.className = "overlay__container";

    template += `<img src='${this.url}' alt='${this.name}'>`;
    template += `<div class='modal__content'>`;
    template += `<h3>${this.name}</h3>`;
    template += `<h4>${this.type} - ${this.breed}</h4>`;
    template += `<p>${this.description}</p>`;
    template += `<ul>`;
    template += `<li><span>Age:&nbsp</span>${this.age}</li>`;
    template += `<li><span>Inoculations:&nbsp</span>${this.inoculations}</li>`;
    template += `<li><span>Diseases:&nbsp</span>${this.diseases}</li>`;
    template += `<li><span>Parasites:&nbsp</span>${this.parasites}</li>`;
    template += `</ul>`;
    template += `</div>`;

    modalWrapper.innerHTML = template;
    modalWrapper.append(button);
    overlay.append(modalWrapper);
    return overlay;
  }
}

export { PopUp };
