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
// une fonction addEventListener par element
function addListenersToDropDowns(values, index) {
  let elts = Array.from(
    document.querySelectorAll(".section-filters__custom-select")
  );
  console.log(elts);
  elts.forEach((elt) =>
    elt.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      elt.classList.add("selected");
      console.log(e.target);
      const sortOptions = sortOptionsByButtonValue(e.target.value);
      console.log(sortOptions);
      displayOptions(sortOptions);
      // filterFunction();
      // gérer les clicks suivants sur un autre élément
      // fonction close select
    })
  );
}

export function displayDropdowns(sortOptions) {
  const ingrédients = generateIngrédientsSelect();
  const appliances = generateApplianceSelect();
  const ustensils = generateUstensilsSelect();

  addListenersToDropDowns([ingrédients, appliances, ustensils]);
}

// récupérer les options selon la valeur du bouton
function sortOptionsByButtonValue(value) {
  console.log(value);
  switch (value) {
    case "Ingrédients":
      return getAllIngredientsFromRecipes();
    case "Appareils":
      return getAllAppliancesFromRecipes();

    case "Ustensiles":
      return getAllUstensilsFromRecipes();

    default:
      break;
  }
}

// tri pour les placeholders des input

// function displayPlaceholderByButtonValue(value) {
//   const input = document.querySelectorAll(".section-filters__select");
//   switch (value) {
//     case "Ingrédients":
//       input.placeholder.innerHtml = ` Recherche un ingrédient`;

//     case "Appareils":
//       input.placeholder.innerHtml = ` Recherche un appareil`;

//     case "Ustensiles":
//       input.placeholder.innerHtml = ` Recherche un ustensil`;

//     default:
//       break;
//   }
// }

function displayOptions(options) {
  displayApplianceOptions(options);
  displayIngrédientsOptions(options);
  displayUstensilsOptions(options);
}
function displayApplianceOptions(options) {
  const applianceContainer = document.querySelector("#green");
  applianceContainer.innerHTML = options
    .map((option) => `<li>${option}</li>`)
    .join("");
  const input = document.querySelector(".filters__select--green");
  input.value = " ";
  input.placeholder = " Rechercher un appareil";
  // const placeholder = displayPlaceholderByButtonValue();
  // console.log(placeholder);
}

function displayIngrédientsOptions(options) {
  const ingredientsContainer = document.querySelector("#blue");
  ingredientsContainer.innerHTML = options
    .map((option) => `<li>${option}</li>`)
    .join("");
  const input = document.querySelector(".filters__select--blue");
  input.value = " ";
  input.placeholder = " Rechercher un ingrédient";
}
function displayUstensilsOptions(options) {
  const ustensilsContainer = document.querySelector("#red");
  ustensilsContainer.innerHTML = options
    .map((option) => `<li>${option}</li>`)
    .join("");
  const input = document.querySelector(".filters__select--red");
  input.value = " ";
  input.placeholder = " Rechercher un ustensil";
}
// function filterFunction() {
//   // const input, filter, a, i;

//   const input = document.querySelector(".section-filters__select");
//   const filter = input.value.toUpperCase();
//   const div = document.querySelector(".section-filters__custom-select");
//   const a = Array.from(div.querySelectorAll("a"));
//   for (let i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }
