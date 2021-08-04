import { html } from "../../node_modules/lit-html/lit-html.js";
export let currentTown = (town) => html`
    <option value=${town._id}>${town.text}</option>

`;

export let optionAddElements = (towns) => html`
${towns.map(x => currentTown(x))}
`;