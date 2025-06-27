import "./globals.css";
import CreateHeader from "./components/header/CreateHeader";
import CreateFooter from "./components/footer/createFooter";

const app = document.getElementById("app");

app.innerHTML = `
${CreateHeader()}
<main>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur sed iure omnis, quae suscipit debitis odit? Ipsa minus laudantium deserunt dolorum nemo ratione optio odit, tenetur ullam non culpa corporis!
</main>
${CreateFooter()}
`;

/*remember to ask*/
/*will probaby keep main to hydrate the html */
/*folders, index */
const menuBurgerEl = document.querySelector(".menuBurger");

menuBurgerEl.addEventListener("click", () => {
  menuBurgerEl.classList.toggle("menuBurgerX");
  document.querySelector("nav").classList.toggle("navShow");
  document.querySelector("main").classList.toggle("unfocus");
});
