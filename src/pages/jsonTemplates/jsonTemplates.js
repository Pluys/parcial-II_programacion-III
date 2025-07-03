import "./jsonTemplates.css";
import "../../globals.css";
import "../../components/components.css";

import CreateFooter from "../../components/footer/createFooter";
import CreateHeader from "../../components/header/CreateHeader";
import { HydrationMain, HydrationJsonTemplates } from "../../main";
import { TYPES } from "../../utils/fetch";
import { toUpperCaseFirst } from "../../utils/toUpperCaseFirst";

const app = document.getElementById("app");

app.innerHTML = `
${CreateHeader()}
<main id="main">
<h2>The user friendly api interface!</h2>
<p>
    Even when only being a couple of components that are
    not that useful on their own, they make a really comprehensive
    fetch and search  system!
    <br>
    It's quite simple: The searchbar will try to find exactly what
    you inserted into every object of the fetch that you made.
    You can search keys,values, or anything in particular, really!
    <br>
    And if you run out of search results, you can always fetch more
    data without worries!
</p>
<section id="dataFilters">
<span class="whiteLine"></span>
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
  <span class="whiteLine"></span>
  <div id="dataTypeFilters"></div>
    </section>

    <section id="dataContainer">
      Here will appear your requested data!
    </section>
  </main>
${CreateFooter()}
`;
/*
The join up there is the only thing
that idk why makes something work.
in this case, that thing being the ".map".
*/

HydrationMain();
HydrationJsonTemplates();
