export default class Card {
  constructor(name, time, ingredients, description, appliance, ustensils) {
    this.name = name;
    this.time = time;
    this.ingredients = ingredients;
    this.description = description;
    this.appliance = appliance;
    this.ustensils = ustensils.map((ustensil) => ustensil.toLowerCase());
  }
  generateCard() {
    return `
    <li class="card">
    <a href="#">
        <div class="card__thumb"></div>
        <div class="card__body">
            <div class="card__head">
                <h2 class="card__title">${this.name}</h2>
                <div class="card__time">
                    <i class="far fa-clock"></i>
                    <p class="card__minutes">${this.time} min</p>
                </div>
            </div>
            <div class="card__content">
                 <ul class="card__ingredients">${this.ingredients}
                </ul>
                <p class="card__description">${this.description}</p>
            </div>
        </div>
    </a>
</li>

      `;
  }
}
