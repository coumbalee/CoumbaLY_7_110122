import Card from "./CardClass.js";
console.log(Card);
import { recipes } from "./recipes.js";

export function displayCards(
  name,
  time,
  ingredients,
  description,
  appliance,
  ustensils
) {
  let cards = [];
  const list = document.querySelector(".section-cards__list");
  for (const recipe of recipes) {
    cards = new Card(
      recipe.name,
      recipe.time,
      recipe.ingredients,
      recipe.description,
      recipe.appliance,
      recipe.ustensils
    );
    console.log(cards);
  }
  list.innerHTML = recipes
    .map(
      (recipe) => `<li class="card">
      <a href="#">
          <div class="card__thumb"></div>
          <div class="card__body">
              <div class="card__head">
                  <h2 class="card__title">${recipe.name}</h2>
                  <div class="card__time">
                      <i class="far fa-clock"></i>
                      <p class="card__minutes">${recipe.time} min</p>
                  </div>
              </div>
              <div class="card__content">
                   <ul class="card__ingredients">${recipe.ingredients}
                  </ul>
                  <p class="card__description">${recipe.description}</p>
              </div>
          </div>
      </a>
  </li>`
    )
    .join("");
}
{
}
