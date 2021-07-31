import { html } from "../../node_modules/lit-html/lit-html.js";

export let catTempalte = (cat, statusToggle) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${statusToggle}>Show status code</button>
        <div class="status hidden" id="${cat.id}">
            <h4>Status Code on Cat: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`;

export let allCatsTempalte = (cats, statusToggle) => html`
<ul>
    ${cats.map(cat => catTempalte(cat,statusToggle))};
</ul>
`;