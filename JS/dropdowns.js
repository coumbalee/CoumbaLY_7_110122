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
      e.stopPropagation();
      elt.classList.add("selected");

      console.log(e.target.textContent);
      console.log(e.target.dataset.color);

      const sortOptions = sortOptionsByButtonValue(e.target.value);
      console.log(sortOptions);
      displayOptions(sortOptions, e.target.value);
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
      // console.log(e.target.dataset);
      console.log(value);

      filterFunction(input);
    })
  );
}
function createTagFromOption() {
  const options = Array.from(document.querySelectorAll(".options"));
  console.log(options);
  options.forEach((option) =>
    option.addEventListener("click", (e) => {
      e.preventDefault();
      const value = e.target;
      console.log(value);
      document.querySelector(
        ".section-tags"
      ).innerHTML = ` <span class="section-tags__item ">
      <p class="section-tags__name">${e.target.textContent}</p>
      <i class="far fa-times-circle fa-lg section-tags__close"></i>
      </span>`;
      const optionFromSelect = option.closest(
        ".section-filters__custom-select"
      );
      console.log(optionFromSelect.dataset.color);
      const tag = document.querySelector(".section-tags__item");
      tag.setAttribute("data-color", optionFromSelect.dataset.color);
    })
  );
  const buttonClose = document.querySelector(".section-tags__close");
  console.log(buttonClose);
  buttonClose.addEventListener("click", removeTag);
}
function removeTag() {
  const Tag = document.querySelector(".section-tags__item");
  Tag.remove();
}

export function displayDropdowns(sortOptions) {
  const ingrédients = generateIngrédientsSelect();
  const appliances = generateApplianceSelect();
  const ustensils = generateUstensilsSelect();

  addListenersToDropDowns([ingrédients, appliances, ustensils]);
  addListenerToInput([ingrédients, appliances, ustensils]);
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
// function sortOptionsByDataset(dataset, color) {
//   console.log(dataset);
//   switch (color) {
//     case "blue":
//       return getAllIngredientsFromRecipes();
//     case "green":
//       return getAllAppliancesFromRecipes();

//     case "red":
//       return getAllUstensilsFromRecipes();

//     default:
//       break;
//   }
// }

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
  createTagFromOption();
}
// function displayOptions(options, selector) {
//   switch (selector) {
//     case "green":
//       displayApplianceOptions(options);
//       break;
//     case "blue":
//       displayIngrédientsOptions(options);
//       break;
//     case "red":
//       displayUstensilsOptions(options);
//   }
//   createTagFromOption();
// }
function displayApplianceOptions(options) {
  const applianceContainer = document.querySelector("#green");
  applianceContainer.innerHTML = options
    .map((option) => `<li class="options"><a href="#tags">${option}</a></li>`)
    .join("");
  const input = document.querySelector(".filters__select--green");
  input.value = null;
  input.placeholder = "Rechercher un appareil";
}

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

document.addEventListener("click", removeList);
function removeList() {
  const option = document.querySelector(".options");
  const list = option.closest("ul");
  console.log(list);
  list.classList.remove("selected");

  list.remove();
}
