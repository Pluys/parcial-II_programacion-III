import { CreateCards } from "./utils/createCards";
import { CreateSearch } from "./utils/createSearch";
import { allData, TYPES, getRandomJson } from "./utils/fetch";
import {
  addJsonLocalStorage,
  removeJsonLocalStorage,
} from "./utils/localStorage";

//Functionality of the components shared by all pages.
export function HydrationMain() {
  const menuBurgerEl = document.querySelector(".menuBurger");
  const navEl = document.querySelector("nav");

  menuBurgerEl.addEventListener("click", () => {
    //Functionality of the header's menu button.
    menuBurgerEl.classList.toggle("menuBurgerX");
    navEl.classList.toggle("navShow");
  });

  //The style property is not set instantly so it doesn't show the user
  //the creation of the page.
  setTimeout(() => {
    document.getElementById("app").style.transition = "all 0.25s";
  }, 1000);
}

//Functionality of the components located in jsonTemplates.
export function HydrationJsonTemplates() {
  const dataFiltersEl = document.getElementById("dataFilters");
  for (let i = 3; i < dataFiltersEl.childNodes.length - 4; i += 2) {
    const btnEl = dataFiltersEl.childNodes[i];

    btnEl.addEventListener("click", () => {
      allData[i - i / 2 - 1.5]().then((data) => {
        CreateSearch(data[0], Object.values(TYPES)[i - i / 2 - 1.5]);
        CreateCards(data);
      });
    });
  }
}

//Functionality of the components located in the jsonRandoms page.
export function HydrationJsonRandoms() {
  const buttonsContainerEl = document.getElementById("buttonsContainer");
  const cardEl = document.getElementById("jsonRandom");

  //Adds an event listener to the buttons with defined random types.
  for (let i = 5; i < buttonsContainerEl.childNodes.length; i += 2) {
    buttonsContainerEl.childNodes[i].addEventListener("click", () => {
      //This formula v v v v v v v represent the amount of datatypes that exist.
      getRandomJson(i - i / 2 - 2.5);
    });
  }

  buttonsContainerEl.childNodes[3].addEventListener("click", () => {
    //Adds the same event listener that the other buttons have,
    // but this button gives a random json
    // while also giving it from a random datatype.
    getRandomJson();
  });

  buttonsContainerEl.childNodes[1].addEventListener("click", () => {
    //Cleanses the card on click.
    cardEl.innerHTML = "The JSON will be displayed here!";
    cardEl.className = "";
  });

  document.querySelector(".saveButton").addEventListener("click", () => {
    if (cardEl.innerText === "The JSON will be displayed here!") {
      return;
    }
    addJsonLocalStorage(cardEl.innerHTML);
  });
}

export function HydrationJsonSaves() {
  const savedDataEl = document.getElementById("savedData");
  const children = [];

  for (let i = 0; i < savedDataEl.childNodes.length; i++) {
    children.push(savedDataEl.childNodes[i]);
  }

  for (let i = 1; i < children.length - 1; i++) {
    children[i].addEventListener("dblclick", () => {
      children[i].remove();
      removeJsonLocalStorage();
    });
  }
}
