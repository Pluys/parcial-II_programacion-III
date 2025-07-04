import "./header.css";
import logo from "../../assets/favicon.png";

export default function CreateHeader() {
  return `
    <header>
        <a href="index.html">
        <img src="${logo}" alt="">
        </a>

      <div class="menuBurger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </header>
    <nav>
        <ul>
            <li ><a href="index.html">Home</a></li>
            <li><a href="/src/pages/jsonTemplates/jsonTemplates.html">JSON Requests</a></li>
            <li><a href="/src/pages/jsonRandoms/jsonRandoms.html">JSON Random</a></li>
            <li><a href="/src/pages/jsonSaves/jsonSaves.html">JSONs Saved</a></li>
        </ul>
        </nav>
    `;
}
