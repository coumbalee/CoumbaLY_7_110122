export default class Select {
  constructor(color, value) {
    this.color = color;
    this.value = value;
  }
  generateCustomSelect() {
    return `
    <div class="section-filters__custom-select">
        <span class="section-filters__arrow  filters__arrow--${this.color}"> <i class="fas fa-angle-up"></i></span>
        <input  class="section-filters__select filters__select--${this.color}" type="button" data-color="${this.color}" value="${this.value}">
        <ul id = "${this.color}" class="section-filters__list section-filters__list--${this.color}"></ul>
    </div>
    `;
  }
}

export function generateUstensilsSelect() {
  const ustensilsSelect = new Select("red", "Ustensiles");
  const ustensilsSelectDropdown = ustensilsSelect.generateCustomSelect();
  const section = document.querySelector(".section-filters");
  section.innerHTML += `${ustensilsSelectDropdown}`;
}

export function generateApplianceSelect() {
  const applianceSelect = new Select("green", "Appareils");
  const applianceCustomSelect = applianceSelect.generateCustomSelect();
  const section = document.querySelector(".section-filters");
  section.innerHTML += `${applianceCustomSelect}`;
}

export function generateIngrédientsSelect() {
  const ingrédientsSelect = new Select("blue", "Ingrédients");
  const ingrédientsCustomSelect = ingrédientsSelect.generateCustomSelect();
  const section = document.querySelector(".section-filters");
  section.innerHTML += `${ingrédientsCustomSelect}`;
}
