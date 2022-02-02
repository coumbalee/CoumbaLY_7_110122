export default class Tag {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  generateTag() {
    return `
            <span class="tags__item tags__item--${this.color}">
                <p class="tags__name">${this.name}</p>
                <i class="far fa-times-circle fa-lg tags__close"></i>
            </span>
        `;
  }
}
