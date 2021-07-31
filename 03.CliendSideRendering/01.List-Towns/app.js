import { render } from "../node_modules/lit-html/lit-html.js"
import { alltemplateTowns } from "../01.List-Towns/templates/townTemplates.js"

let form = document.querySelector('.towns-form');
form.addEventListener('submit', displayTowns);

let rootDivElement = document.querySelector('#root');

function displayTowns(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let townString = formData.get('towns');
    let towns = townString.split(', ');

    render(alltemplateTowns(towns), rootDivElement);

}