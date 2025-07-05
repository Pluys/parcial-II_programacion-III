import "./jsonSaves.css";
import "../../globals.css";
import "../../components/components.css";

import CreateFooter from "../../components/footer/createFooter";
import CreateHeader from "../../components/header/createHeader";
import { HydrationJsonSaves, HydrationMain } from "../../main";
import { getJsonLocalStorage } from "../../utils/localStorage";

const app = document.getElementById("app");

app.innerHTML = `
${CreateHeader()}
<main id ="main">
    <h2>
        List of your saved JSONs
    </h2>
    <p>
        They are all removable by double tapping them
        if you wish to do that! 
        Remember that all of the JSONs are saved locally on your
        computer, so try to not get too excited trying to break it!
    </p>
    <div id="referenceCard">
        For reference, they will look like this!
        <br>
        doubletapping in any part of the box will cause it to be
        removed from your saves, but you can always look for them
        in the API again!
    </div>
    <section id="savedData">
        ${getJsonLocalStorage()}
    </section>
</main>
${CreateFooter()}
`;
HydrationMain();
HydrationJsonSaves();
