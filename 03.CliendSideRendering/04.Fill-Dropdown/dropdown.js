import { render } from "../node_modules/lit-html/lit-html.js"
import { optionAddElements } from "./template/dropDownTemplate.js";
let url = 'http://localhost:3030/jsonstore/advanced/dropdown ';
let addInputElement = document.querySelector('.Add');
addInputElement.addEventListener('click', addItem)
let objValues = '';
let selectMenuElement = document.querySelector('#menu');
let inputItemTextElement = document.querySelector('#itemText');
async function addItem(e) {
    e.preventDefault();
    if (inputItemTextElement.value == '') {
        console.error('Cannot send empty');
        return;
    }
    let itemForAdding = {
        text: inputItemTextElement.value,
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemForAdding)
    })
    addTowns();
    inputItemTextElement.value = '';
    return response.json()
}
addTowns();
function addTowns() {
    fetch(url)
        .then(body => body.json())
        .then(obj => {
            objValues = Object.values(obj);
            render(optionAddElements(objValues), selectMenuElement);
        })
}
