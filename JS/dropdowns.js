import Select from "./SelectClass.js";
import {
  getAllAppliancesFromRecipes,
  getAllUstensilsFromRecipes,
  getAllIngredientsFromRecipes,
} from "./dataRecipes.js";
import { recipes } from "./recipes.js";

function generateUstensilsSelect() {
  const ustensilsSelect = new Select("red", "Ustensiles");
  const ustensilsSelectDropdown = ustensilsSelect.generateCustomSelect();
  const section = document.querySelector(".section-filters");
  section.innerHTML += `${ustensilsSelectDropdown}`;
}
function generateApplianceSelect() {
  const applianceSelect = new Select("green", "Appareils");
  const applianceCustomSelect = applianceSelect.generateCustomSelect();
  const section = document.querySelector(".section-filters");
  section.innerHTML += `${applianceCustomSelect}`;
}

function generateIngrédientsSelect() {
  const ingrédientsSelect = new Select("blue", "Ingrédients");
  const ingrédientsCustomSelect = ingrédientsSelect.generateCustomSelect();
  const section = document.querySelector(".section-filters");
  section.innerHTML += `${ingrédientsCustomSelect}`;
}

function addListenersToDropDowns(value, index) {
  let elts = Array.from(document.querySelectorAll(".section-filters__select"));
  elts.forEach((elt) =>
    elt.addEventListener("click", (e) => {
      e.preventDefault();
      // const sortOptions = sortOptionsByButtonValue(
      //   recipes,
      //   values[index],
      //   index
      // );
      // console.log(sortOptions);
      // displayOptions(sortOptions);
      // const placeholder = displayPlaceholderByButtonValue(value);
      //   console.log(placeholder);
    })
  );
}
export function displayDropdowns() {
  const ingrédients = generateIngrédientsSelect();
  const appliance = generateApplianceSelect();
  const ustensils = generateUstensilsSelect();

  addListenersToDropDowns([ingrédients, appliance, ustensils]);
}

// récupérer les options selon la valeur du bouton
// function sortOptionsByButtonValue(recipes, values, index) {
//   switch (index) {
//     case 0:
//       return getAllIngredientsFromRecipes();

//     case 1:
//       return getAllAppliancesFromRecipes();

//     case 2:
//       return getAllUstensilsFromRecipes();

//     default:
//       break;
//   }
// }

// tri pour les placeholders des input

// function displayPlaceholderByButtonValue(value) {
//   const input = document.querySelectorAll(".section-filters__select");
//   switch (value) {
//     case "Ingrédients":
//       input.innerHtml = ` Recherche un ingrédient`;

//     case "Appareils":
//       input.innerHtml = ` Recherche un appareil`;

//     case "Ustensiles":
//       input.innerHtml = ` Recherche un ustensil`;

//     default:
//       break;
//   }
// }

function displayOptions(options) {
  displayApllianceOptions(options);
  // displayIngrédientsOptions();
  // displayUstensilsOptions();
}
function displayApllianceOptions(options) {
  const list = document.querySelector("#green");
  list.innerHTML += options.map((option) => `<p>${option}</p>.join`);
}
