// export function generateDropdown()
import Select, {
  generateApplianceSelect,
  generateUstensilsSelect,
  generateIngrédientsSelect,
} from "./class.js";
console.log(Select);
import {
  getAllAppliancesFromRecipes,
  getAllUstensilsFromRecipes,
  getAllIngredientsFromRecipes,
} from "./dataRecipes.js";

export function displayDropdowns() {
  const appliance = generateApplianceSelect();
  const ustensils = generateUstensilsSelect();
  const ingrédients = generateIngrédientsSelect();
  addListenersToDropDowns(appliance, ustensils, ingrédients);
}

function addListenersToDropDowns(recipes, value) {
  let elts = Array.from(document.querySelectorAll(".section-filters__select"));
  elts.forEach((elt) =>
    elt.addEventListener("click", (e) => {
      e.preventDefault();
      const sortOptions = sortOptionsByButtonValue(
        recipes,
        value
        // e.target.dataset.filter
      );
      // console.log(e.target.dataset.filter);
      displayOptions(sortOptions);
    })
  );
}

// récupérer les options selon la valeur du bouton
function sortOptionsByButtonValue(recipes, value, filter) {
  switch (value) {
    case "Ingrédients":
      return getAllIngredientsFromRecipes(recipes, filter);
    case "Appareils":
      return getAllAppliancesFromRecipes(recipes, filter);

    case "Ustensiles":
      return getAllUstensilsFromRecipes(recipes, filter);

    default:
      break;
  }
}
// tri pour les placeholders des input

function displayPlaceholderByButtonValue(value) {
  const input = document.querySelectorAll(".section-filters__select");
  switch (value) {
    case "Ingrédients":
      input.innerHtml = ` Recherche un ingrédient`;

    case "Appareils":
      input.innerHtml = ` Recherche un appareil`;

    case "Ustensiles":
      input.innerHtml = ` Recherche un ustensil`;

    default:
      break;
  }
}

// afficher les options avec function displayOptions et y appeler la fonction displayPlaceholderByButtonValue
function displayOptions() {
  displayApllianceOptions();
  // displayIngrédientsOptions();
  // displayUstensilsOptions();
}
function displayApllianceOptions() {
  const list = document.querySelector(".section-filters__custom--select");
  console.log(list);
  // boucle for dans le tableau des appareils de la fonction getAllAppliancesFromRecipes
}
displayOptions();
