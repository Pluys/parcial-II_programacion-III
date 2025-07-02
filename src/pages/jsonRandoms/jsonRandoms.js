import "./jsonRandoms.css";
import "../../globals.css";
import "../../components/components.css";

import CreateFooter from "../../components/footer/createFooter";
import CreateHeader from "../../components/header/CreateHeader";
import { HydrationMain } from "../../main";

const app = document.getElementById("app");

app.innerHTML = `
${CreateHeader()}
<main id="main">
Pagina 3
</main>
${CreateFooter()}
`;

HydrationMain();
