import { allData, TYPES, getRandomJson } from "./utils/fetch";

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
  const sectionEl = document.getElementById("templates");
  const buttonDataTypeEl = document.querySelector("button");
  const popupEl = document.querySelector("dialog");

  sectionEl.appendChild();
  //Makes the popup visible on screen.
  //(ref: components/components.css/".dataTypePopup")
  buttonDataTypeEl.addEventListener("click", () => {
    popupEl.style.translate = "0";
  });

  for (let i = 3; i < popupEl.childNodes.length; i += 2) {
    const btnEl = popupEl.childNodes[i];

    //Makes every button move the popup offscreen.
    //(ref: components/components.css/".dataTypePopup")
    btnEl.addEventListener("click", () => {
      popupEl.style.translate = "100dvw 0";

      allData[i - i / 2 - 1.5]().then(console.log);
    });
  }
  //Do something about this god fucking dammit.
  // popupEl.childNodes[3].addEventListener("click", () => {});

  // popupEl.childNodes[5].addEventListener("click", () => {});

  // popupEl.childNodes[7].addEventListener("click", () => {});

  // popupEl.childNodes[9].addEventListener("click", () => {});

  // popupEl.childNodes[11].addEventListener("click", () => {});
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
}
