import { html } from "../../node_modules/lit-html/lit-html.js";

export let townLiTempalte = (town) => html`<li>${town}</li>`;

export let alltemplateTowns = (towns) => html`
<ul>
    ${towns.map(x => townLiTempalte(x))}
</ul>
`;