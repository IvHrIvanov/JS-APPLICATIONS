import { render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { allCatsTempalte } from "./templates/showCatTempaltes.js";

function toggleButton(e) {
    let button = e.target;
    button.textContent = button.textContent === "Show status code"
        ? "Hide status code"
        : "Show status code";
    let infoDiv = button.closest('.info')
    let statusDiv = infoDiv.querySelector('.status');
    if (statusDiv.classList.contains('hidden')) {
        statusDiv.classList.remove('hidden');
    } else {
        statusDiv.classList.add('hidden');
    }
}

let allCatsElement = document.getElementById('allCats');
render(allCatsTempalte(cats, toggleButton), allCatsElement);