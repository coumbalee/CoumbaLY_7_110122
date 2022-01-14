// BARRE DE RECHERCHE
export function generateSearchBar() {
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
