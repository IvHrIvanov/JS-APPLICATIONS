import { html } from "../../node_modules/lit-html/lit-html.js"

export let townLi = (town) => html`
<li>${town}</li>
`;

export let townAdd = (towns) => html`
<ul>
    ${towns.map(x => townLi(x))}
</ul>
`;

