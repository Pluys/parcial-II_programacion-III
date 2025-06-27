import "./header.css";
import jsonFile from "../../assets/jsonFile.png";

export default function CreateHeader() {
  return `
    <header>
      <a href="">
          <img src="${jsonFile}" alt="">
      </a>
      <div class="menuBurger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    </header>
    <nav>
        <ul>
            <li ><a href="../../../index.html">Home</a></li>
            <li><a href="/src/pages/jsonTemplates/jsonTemplates.html">JSON Placeholder</a></li>
        </ul>
    </nav>

    `;
}
