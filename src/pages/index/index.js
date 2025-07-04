import "./index.css";
import "../../globals.css";
import "../../components/components.css";

import CreateFooter from "../../components/footer/createFooter";
import CreateHeader from "../../components/header/createHeader";
import { HydrationMain } from "../../main";

import githubLogo from "../../assets/githubLogo.png";

const app = document.getElementById("app");

app.innerHTML = `
${CreateHeader()}
<main id ="main">
    <h2>
        Welcome to the JSONPlaceholder's API user friendly interface!
    </h2>
    <p>
        In this page, I try to adapt most of what makes JSONPlaceholder an
        excellent API, to a user friendly space. This page contains all of the
        requests in JSONPlaceholder's API, and is intended to be used for
        research and educational purposes, so you can also know what
        happens behind the scenes!
    </p>
    <a href="/src/pages/jsonTemplates/jsonTemplates.html">
        <button class="primaryButton">Do requests!</button>
    </a>

    <a href="/src/pages/jsonRandoms/jsonRandoms.html">
        <button class="primaryButton">Get a random json!</button>
    </a>
    <h3>In this page, you can:</h3>
    <ul>
        <li>Request every data type available in JSONPlaceholder API</li>
        <li>Apply filters to said requests</li>
        <li>Get randomized requests made to JSONPlaceholder</li>
        <li>Save requests that you made!</li>
    </ul>
    <section>
        <article>
            <h3>Support the developer of JSONPlaceholder API here:</h3>
            <a href="https://github.com/sponsors/typicode">
                <img src=${githubLogo} alt="typicode's github" />
            </a>
            </article>

            <article>
            <h3>If you want, you can also check my other works here:</h3>
            <a href="https://github.com/Pluys">
            <img src=${githubLogo} alt="my github" />
            </a>
        </article>

    </section>
</main>
${CreateFooter()}
`;

HydrationMain();
