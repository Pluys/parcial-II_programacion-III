import "./jsonTemplates.css";
import "../../globals.css";
import "../../components/components.css";

import CreateFooter from "../../components/footer/createFooter";
import CreateHeader from "../../components/header/CreateHeader";
import { HydrationMain, HydrationFooter } from "../../main";
import {
  CreateCards,
  getAllAlbums,
  getAllComments,
  getAllPhotos,
  getAllTodos,
  getAllUsers,
  TYPES,
} from "../../utils/fetch";

const app = document.getElementById("app");

app.innerHTML = `
${CreateHeader()}
<main id="main">
  y yono soy la sesion
  <section id="templates">
  <button class="primaryButton">See data types</button>
  </select>
  <dialog class="dataTypePopup">
  <h2>Choose a data type!</h2>
  <button class="secondaryButton">Users</button>
  <button class="secondaryButton">To do(s)</button>
  <button class="secondaryButton">Albums</button>
  <button class="secondaryButton">Photos</button>
  <button class="secondaryButton">Comments</button>
  </dialog>
  </section>
  </main>
${CreateFooter()}
`;

HydrationMain();
HydrationFooter();
// getAllComments().then(CreateCards);
