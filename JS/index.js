"use strict";
import { recipes } from "./recipes.js";
import {
  getAllAppliancesFromRecipes,
  getAllUstensilsFromRecipes,
  getAllIngredientsFromRecipes,
} from "./dataRecipes.js";
import { displayDropdowns } from "./dropdowns.js";
import { generateSearchBar } from "./searchBar.js";
recipes;

// HEADER
function generateHeader() {
  const header = document.querySelector("header");
  const headerLink = document.createElement("a");
  const headerLogo = document.createElement("img");
  headerLogo.src = "/IMAGES/logo.png";
  headerLogo.setAttribute("alt", "logo les petits plats");
  headerLogo.classList.add("header__logo");
  header.classList.add("header");
  header.prepend(headerLink);
  headerLink.classList.add("header__link");
  headerLink.prepend(headerLogo);
}
async function displayPage() {
  generateHeader();
  generateSearchBar();
  displayDropdowns();
}
displayPage();
