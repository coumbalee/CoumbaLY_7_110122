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

async function addListenersToDropDowns(values, index) {
  let elts = Array.from(
    document.querySelectorAll(".section-filters__custom-select")
  );
  console.log(elts);
  elts.forEach((elt) =>
    elt.addEventListener("click", (e) => {
      e.preventDefault();

      elt.classList.add("selected");

      // const sortOptions = sortOptionsByButtonValue(
      // recipes,
      // values[index],
      // index
      // );
      // console.log(sortOptions);
      // const sort = sortOptions();
      // console.log("const sortOption");
      displayOptions();
      // const placeholder = displayPlaceholderByButtonValue(value);
      //   console.log(placeholder);
      filterFunction();
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
// function sortOptionsByButtonValue(recipes, value, index) {
//   console.log("sortOptionsByV");
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
  // console.log("displayOptions");
  displayApplianceOptions();
  // displayIngrédientsOptions();
  // displayUstensilsOptions();
}
async function displayApplianceOptions() {
  // console.log("displayApplianceOptions");
  // const list = document.querySelector("#green");
  // list.innerHTML += options.map((option) => `<p>${option}</p>.join`);
  const Select = await generateApplianceSelect;
  console.log(Select);
  const appliances = [
    ...new Set(
      recipes.map((recipes) => recipes.appliance.toLowerCase()).sort()
    ),
  ];
  console.log(appliances);
  const appliancesList = document.querySelector("#green");
  const input = document.querySelector(".filters__select--green");
  console.log(input);
  input.value = " ";
  input.placeholder = `Rechercher`;
  for (let i = 0; i < appliances.length; i++) {
    const listElmt = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    // Ajouter les attributs au liens
    link.innerHTML = appliances[i];
    appliancesList.appendChild(listElmt);
    listElmt.appendChild(link);
  }
}
// async function sortOptions() {
// const Select = await generateApplianceSelect;
// console.log("select");
// const appliances = [
//   ...new Set(
//     recipes.map((recipes) => recipes.appliance.toLowerCase()).sort()
//   ),
// ];
// const appliancesList = document.querySelector("#green");
// appliancesList.innerHTML += `${appliances}`;
// console.log("now");
// console.log(appliancesList);
// }

// function filterFunction() {
//   // const input, filter, a, i;
//   const input = document.queryselector(".section-filters__select");
//   const filter = input.value.toUpperCase();
//   const div = document.querySelector(".section-filters__custom-select");
//   const a = div.querySelector("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }
