import { recipes } from "./recipes.js";

// Je récupère tous les appareils
export function getAllAppliancesFromRecipes() {
  const appliances = [
    ...new Set(
      recipes.map((recipes) => recipes.appliance.toLowerCase()).sort()
    ),
  ];
  // for (let i = 0; i < recipes.length; i++) {
  //   console.log(recipes[i].appliance);
  // }

  console.log(appliances);

  return appliances;
}
getAllAppliancesFromRecipes();

// Je récupère tous les ustensils
export function getAllUstensilsFromRecipes() {
  //
  const ustensils = [
    ...new Set(
      recipes
        .map((recipes) => recipes.ustensils.map((ustensils) => ustensils))
        .flat()
        .sort()
    ),
  ];

  console.log(ustensils);
  return ustensils;
}
getAllUstensilsFromRecipes();

// Je récupère tous les ingrédients
export function getAllIngredientsFromRecipes() {
  const ingredients = [
    ...new Set(
      recipes
        .map((recipes) =>
          recipes.ingredients.map((ingredient) =>
            ingredient.ingredient.toLowerCase()
          )
        )
        .flat()
        .sort()
    ),
  ];

  console.log(ingredients);
  return ingredients;
}
getAllIngredientsFromRecipes();
