import Card from "./CardClass.js";
console.log(Card);
import { recipes } from "./recipes.js";

//  générer une card pour chaque recette
export function displayCards(
  name,
  time,
  ingredients,
  description,
  appliance,
  ustensils
) {
  let cards = [];
  const sectionCards = document.querySelector(".section-cards");
  for (const recipe of recipes) {
    console.log(recipe);
    cards.push(
      new Card(
        recipe.name,
        recipe.time,
        recipe.ingredients,
        recipe.description,
        recipe.appliance,
        recipe.ustensils
      )
    );
    console.log(cards);
  }
  sectionCards.innerHTML = `${cards}`;
}
