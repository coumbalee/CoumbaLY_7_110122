"use strict";
import { displayDropdowns } from "./dropdowns.js";
import { displayCards } from "./cards.js";

// import Tag from "./TagsClass.js";
// console.log(Tag);

async function displayPage() {
  displayDropdowns();
  displayCards();
}
displayPage();
