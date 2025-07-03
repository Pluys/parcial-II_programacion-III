import { TYPES } from "./fetch";
import { stringCopyHandler } from "./handlers";

export function CreateSearch() {
  const dataContainerEl = document.getElementById("dataContainer");

  const dataTypeFiltersEl = document.getElementById("dataTypeFilters");
  const searchBarEl = document.createElement("input");
  searchBarEl.type = "search";
  searchBarEl.name = "searchBar";
  searchBarEl.id = "searchBar";
  const labelEl = document.createElement("label");
  labelEl.htmlFor = "searchBar";
  labelEl.textContent = "Filter ID/Titles: ";
  const buttonSearchEl = document.createElement("button");
  buttonSearchEl.className = "primaryButton";
  buttonSearchEl.textContent = "Search";
  const buttonOrderEl = document.createElement("button");
  buttonOrderEl.className = "secondaryButton";
  buttonOrderEl.textContent = "Reverse ID order";

  searchBarEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && e.target.value != "") {
      const stringSearch = searchBarEl.value.toLowerCase();
      let stringCompare = "";
      searchBarEl.value = "";

      for (let i = 0; i < dataContainerEl.childNodes.length; i++) {
        stringCompare = dataContainerEl.childNodes[i].innerText.toLowerCase();

        if (!stringCopyHandler(stringSearch, stringCompare)) {
          dataContainerEl.removeChild(dataContainerEl.childNodes[i]);
          i--;
        }
      }
    }
  });

  //Same as the previous event.
  buttonSearchEl.addEventListener("click", () => {
    const stringSearch = searchBarEl.value.toLowerCase();
    let stringCompare = "";

    if (stringSearch == "") {
      return;
    }

    searchBarEl.value = "";

    for (let i = 0; i < dataContainerEl.childNodes.length; i++) {
      stringCompare = dataContainerEl.childNodes[i].innerText.toLowerCase();

      if (!stringCopyHandler(stringSearch, stringCompare)) {
        dataContainerEl.removeChild(dataContainerEl.childNodes[i]);
        i--;
      }
    }
  });

  buttonOrderEl.addEventListener("click", () => {
    const childs = dataContainerEl.childNodes.length;
    const tempArray = [];

    for (let i = childs - 1; i >= 0; i--) {
      tempArray.push(dataContainerEl.childNodes[i]);
      dataContainerEl.removeChild(dataContainerEl.childNodes[i]);
    }

    for (let i = 0; i < tempArray.length; i++) {
      dataContainerEl.appendChild(tempArray[i]);
    }
  });

  dataTypeFiltersEl.innerHTML = "";
  dataTypeFiltersEl.append(
    labelEl,
    document.createElement("br"),
    searchBarEl,
    buttonSearchEl,
    buttonOrderEl
  );
}
