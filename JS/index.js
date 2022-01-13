"use strict";
import recipes from "./recipes.js";

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
generateHeader();

// BARRE DE RECHERCHE
function generateSearchBar() {
  const searchSection = document.querySelector(".section-search");
  const searchBar = document.createElement("div");
  searchBar.classList.add("section-search__bar");
  const inputSearch = document.createElement("input");
  inputSearch.classList.add("section-search__input");
  inputSearch.placeholder = `Rechercher un ingrédient, appareil, ustensil ou une recette`;
  const searchBarButton = document.createElement("button");
  searchBarButton.classList.add("section-search__button");
  searchBarButton.innerHTML += `<i class="fas fa-search"></i>`;
  searchSection.prepend(searchBar);
  searchBar.append(inputSearch, searchBarButton);
}
generateSearchBar();
recipes;
