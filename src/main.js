import {
  CreateCards,
  getAllAlbums,
  getAllComments,
  getAllPhotos,
  getAllTodos,
  getAllUsers,
  TYPES,
} from "./utils/fetch";

//Functionality of the components shared by all pages.
export function HydrationMain() {
  const menuBurgerEl = document.querySelector(".menuBurger");
  const navEl = document.querySelector("nav");
  const mainEl = document.getElementById("main");

  menuBurgerEl.addEventListener("click", () => {
    menuBurgerEl.classList.toggle("menuBurgerX");
    navEl.classList.toggle("navShow");
    mainEl.classList.toggle("unfocused");
  });

  //The style property is not set instantly so it doesn't show the user
  //the creation of the page.
  setTimeout(() => {
    document.getElementById("app").style.transition = "all 0.25s";
  }, 100);
}

//Functionality of the components located in the footer.
export function HydrationFooter() {
  const sectionEl = document.getElementById("templates");
  const buttonDataTypeEl = document.querySelector("button");
  const popupEl = document.querySelector("dialog");

  //Makes the popup visible on screen.
  buttonDataTypeEl.addEventListener("click", () => {
    popupEl.style.translate = "0";
  });

  for (let i = 3; i < popupEl.childNodes.length; i += 2) {
    const node = popupEl.childNodes[i];

    //Makes every button move the popup offscreen.
    //(ref: components/components.css/".dataTypePopup")
    node.addEventListener("click", () => {
      popupEl.style.translate = "100dvw 0";
    });
  }

  popupEl.childNodes[3].addEventListener("click", () => {
    getAllUsers()
      .then((data) => console.log(data))
      .catch(console.log);
  });

  popupEl.childNodes[5].addEventListener("click", () => {
    getAllTodos()
      .then((data) => console.log(data))
      .catch(console.log);
  });

  popupEl.childNodes[7].addEventListener("click", () => {
    getAllAlbums()
      .then((data) => console.log(data))
      .catch(console.log);
  });

  popupEl.childNodes[9].addEventListener("click", () => {
    getAllPhotos()
      .then((data) => console.log(data))
      .catch(console.log);
  });

  popupEl.childNodes[11].addEventListener("click", () => {
    getAllComments()
      .then((data) => console.log(data))
      .catch(console.log);
  });

  return "ola";
}
