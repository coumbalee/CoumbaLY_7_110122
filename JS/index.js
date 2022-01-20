"use strict";
import { recipes } from "./recipes.js";
import {
  getAllAppliancesFromRecipes,
  getAllUstensilsFromRecipes,
  getAllIngredientsFromRecipes,
} from "./dataRecipes.js";
import { displayDropdowns } from "./dropdowns.js";
import { generateSearchBar } from "./searchBar.js";

async function displayPage() {
  // generateHeader();
  generateSearchBar();
  displayDropdowns();
}
displayPage();
