import { render } from "../node_modules/lit-html/lit-html.js"
import { towns } from "./towns.js"
import { townAdd } from "./templates/cityTemplate.js"

let searchButtonElement = document.querySelector('.btnSearch');
let inputElement = document.querySelector('#searchText');
searchButtonElement.addEventListener('click', search);
let divResultElement = document.querySelector('#result');
let matches = 0;
function search() {
    let allTowns = document.querySelectorAll('#towns > ul > li')
  
    let searchTown = inputElement.value.toLowerCase();
    for (let i = 0; i < allTowns.length; i++) {
        let current = allTowns[i].textContent.toLocaleLowerCase()
        if (current === searchTown) {
            allTowns[i].classList.add('active');
            matches++;
            divResultElement.textContent = `${matches} mathches found`;
        }

    }
}
let divElement = document.querySelector('#towns');
render(townAdd(towns), divElement);
