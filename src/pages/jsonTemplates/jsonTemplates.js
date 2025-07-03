import "./jsonTemplates.css";
import "../../globals.css";
import "../../components/components.css";

import CreateFooter from "../../components/footer/createFooter";
import CreateHeader from "../../components/header/CreateHeader";
import { HydrationMain, HydrationJsonTemplates } from "../../main";
import { allData, TYPES } from "../../utils/fetch";
import { toUpperCaseFirst } from "../../utils/toUpperCaseFirst";

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
  ${Object.values(TYPES)
    .map(
      (type) =>
        `
        <button class="secondaryButton">
          ${toUpperCaseFirst(type)}
        </button>
      `
    )
    .join("")}
    </dialog>
  </section>
  </main>
${CreateFooter()}
`;
/*
The join up there is the only thing
that idk why makes something work.
in this case, the thing being the ".map".
*/

HydrationMain();
HydrationJsonTemplates();
