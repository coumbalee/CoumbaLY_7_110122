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
  addListenersToDropDowns();
}

function addListenersToDropDowns() {
  let elts = Array.from(document.querySelectorAll(".section-filters__select"));
  elts.forEach((elt) =>
    elt.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      const sortOptions = sortOptionsByButtonValue(e.target.value);
      // console.log(e.target.dataset.filter);
      displayOptions(sortOptions);
    })
  );
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
function displayOptions(options) {
  displayApllianceOptions(options);
  // displayIngrédientsOptions();
  // displayUstensilsOptions();
}
function displayApllianceOptions(options) {
  const list = document.querySelector(".section-filters__custom--select");
  const applianceContainer = document.querySelector("#green");
  applianceContainer.innerHTML = options
    .map((option) => `<li>${option}</li>`)
    .join("");
  console.log(list);
  // boucle for dans le tableau des appareils de la fonction getAllAppliancesFromRecipes
}
//displayOptions();
