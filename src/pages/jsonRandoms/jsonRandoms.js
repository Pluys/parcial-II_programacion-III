import "./jsonRandoms.css";
import "../../globals.css";
import "../../components/components.css";

import CreateFooter from "../../components/footer/createFooter";
import CreateHeader from "../../components/header/CreateHeader";
import { HydrationJsonRandoms, HydrationMain } from "../../main";
import { TYPES } from "../../utils/fetch";
import { toUpperCaseFirst } from "../../utils/toUpperCaseFirst";

const app = document.getElementById("app");

app.innerHTML = `
${CreateHeader()}
<main id="main">
<h2>Random JSONs!</h2>
<p>
    All of the buttons provide with a functionality related to showing
    JSONs in the grey box down below, each one of them making a
    different request by themselves.
    <br>
    You can get a random JSON from a certain datatype, make it
    completely random, or just cleanse the box.
    <br>
    It's also possible to save the jsons with the button down below.
    <br>
    Have fun!
    <br>
    <br>
</p>
<div id="buttonsContainer">
    <button class= "primaryButton">Cleanse card!</button>
    <button class= "primaryButton">True random!</button>
  ${Object.values(TYPES)
    .map(
      (type) =>
        `
        <button class="secondaryButton">
          ${toUpperCaseFirst(type)} JSON
        </button>
      `
    )
    .join("")}
</div>
<div id="jsonRandom">
    The JSON will be displayed here!
</div>
<button class="saveButton">Save JSON</button>
</main>
${CreateFooter()}
`;

HydrationMain();
HydrationJsonRandoms();
