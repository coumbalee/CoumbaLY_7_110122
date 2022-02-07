import Select from "./SelectClass.js";
import {
  getAllAppliancesFromRecipes,
  getAllUstensilsFromRecipes,
  getAllIngredientsFromRecipes,
} from "./dataRecipes.js";
import { recipes } from "./recipes.js";
import Tag from "./TagsClass.js";

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
      // e.stopPropagation();
      elt.classList.add("selected");
      console.log(e.target);
      const sortOptions = sortOptionsByButtonValue(e.target.value);
      console.log(sortOptions);
      displayOptions(sortOptions, e.target.value);
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

      filterFunction(input);
    })
  );
}
function addListenerToOptions() {
  const options = Array.from(document.querySelectorAll(".options"));
  options.forEach((option) =>
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const value = e.target.value;
      console.log(value);
    })
  );

  // options.addEventListener("click", (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   options.forEach((option) => {
  //     const tagElmt = document.querySelector(".section-tags__name");
  //     tagElmt = new Tag();
  //   });
  // });
}
export function displayDropdowns(sortOptions) {
  const ingrédients = generateIngrédientsSelect();
  const appliances = generateApplianceSelect();
  const ustensils = generateUstensilsSelect();

  addListenersToDropDowns([ingrédients, appliances, ustensils]);
  addListenerToInput([ingrédients, appliances, ustensils]);
  addListenerToOptions([ingrédients, appliances, ustensils]);
}

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


function displayOptions(options, selector) {
  switch (selector) {
    case "Appareils":
      displayApplianceOptions(options);
      break;
    case "Ingrédients":
      displayIngrédientsOptions(options);
      break;
    case "Ustensiles":
      displayUstensilsOptions(options);
  }
}
function displayApplianceOptions(options) {
  const applianceContainer = document.querySelector("#green");
  applianceContainer.innerHTML = options
    .map((option) => `<li class="options"><a href="#tags">${option}</a></li>`)
    .join("");
  const input = document.querySelector(".filters__select--green");
  input.value = null;
  input.placeholder = "Rechercher un appareil";
  

function displayIngrédientsOptions(options) {
  const ingredientsContainer = document.querySelector("#blue");
  ingredientsContainer.innerHTML = options
    .map((option) => `<li class="options"><a href="#tags">${option}</a></li>`)
    .join("");
  const input = document.querySelector(".filters__select--blue");
  input.value = null;
  input.placeholder = "Rechercher un ingrédient";
}
function displayUstensilsOptions(options) {
  const ustensilsContainer = document.querySelector("#red");
  ustensilsContainer.innerHTML = options
    .map((option) => `<li class="options"><a href="#tags">${option}</a></li>`)
    .join("");
  const input = document.querySelector(".filters__select--red");
  input.value = null;
  input.placeholder = "Rechercher un ustensil";
}

function filterFunction(input) {
  const filter = input.value.toLowerCase();
  const li = input
    .closest(".section-filters__custom-select")
    .querySelectorAll(".options");
  for (let i = 0; i < li.length; i++) {
    const a = li[i].querySelectorAll("a")[0];
    console.log(a);
    if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// CLOSE SELECT

// document.addEventListener("click", function () {
//   const customSelect = Array.from(
//     document.querySelectorAll(".section-filters__custom-select")
//   );
//   console.log(customSelect);
//   customSelect.remove();
// });
