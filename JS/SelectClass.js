export default class Select {
  constructor(color, value) {
    this.color = color;
    this.value = value;
  }
  generateCustomSelect() {
    return `
    <div class="section-filters__custom-select  filters__custom-select--${this.color}">
        <span class="section-filters__arrow  filters__arrow--${this.color}"> <i class="fas fa-chevron-down"></i></span>
        <input  class="section-filters__select filters__select--${this.color}" type="text" data-color="${this.color}" value="${this.value}" >
        <ul id = "${this.color}" class="section-filters__list section-filters__list--${this.color}"></ul>
    </div>
    `;
  }
}
