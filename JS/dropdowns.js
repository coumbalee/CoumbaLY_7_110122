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
function addListenerToInput() {
  const inputs = Array.from(
    document.querySelectorAll(".section-filters__select")
  );
  inputs.forEach((input) =>
    input.addEventListener("input", (e) => {
      e.preventDefault();
      const value = e.target.value;
      console.log(value);

      filterFunction();
    })
  );
}
// function addListenerToOptions() {
//   const inputs = Array.from(
//     document.querySelectorAll(".section-filters__select")
//   );
//   inputs.addEventListener("input", (e) => {
//     const value = e.target.value;
//     const options = Array.from(document.querySelectorAll(".options"));
//     options.forEach((option) => {
//       const isVisible = option.includes(value);
//       options.element.classList.toggle("hide", !isVisible);
//     });
//   });
// }
export function displayDropdowns(sortOptions) {
  const ingrédients = generateIngrédientsSelect();
  const appliances = generateApplianceSelect();
  const ustensils = generateUstensilsSelect();

  addListenersToDropDowns([ingrédients, appliances, ustensils]);
  addListenerToInput([ingrédients, appliances, ustensils]);
  // addListenerToOptions([ingrédients, appliances, ustensils]);
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
    .map((option) => `<li class="options"><a>${option}</a></li>`)
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
    .map((option) => `<li class="options"><a>${option}</a></li>`)
    .join("");
  const input = document.querySelector(".filters__select--blue");
  input.value = " ";
  input.placeholder = " Rechercher un ingrédient";
}
function displayUstensilsOptions(options) {
  const ustensilsContainer = document.querySelector("#red");
  ustensilsContainer.innerHTML = options
    .map((option) => `<li class="options"><a>${option}</a></li>`)
    .join("");
  const input = document.querySelector(".filters__select--red");
  input.value = " ";
  input.placeholder = " Rechercher un ustensil";
}

function filterFunction() {
  // ajouter le onKeyup à l'input
  const input = document.querySelector("#mySearch");
  const filter = input.value.toLowerCase();
  const ul = document.querySelectorAll(".section-filters__list");
  const li = document.querySelectorAll(".options");
  for (let i = 0; i < li.length; i++) {
    const a = li[i].querySelectorAll("a")[0];
    console.log(a);
    // ESSAYER AVEC ISVISIBLE
    if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
