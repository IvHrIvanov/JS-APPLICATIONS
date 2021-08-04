import { render } from "../node_modules/lit-html/lit-html.js";
import { body } from "./templates/showBookLibrary.js";
let bodyElement = document.querySelector('body');
let url = 'http://localhost:3030/jsonstore/collections/books';
fetch(url)
    .then(body => body.json())
    .then(books => {
        let booksValues = Object.values(books);
        console.log(books);
        renderDisplay(booksValues)
        let loadAllBooksElement = document.querySelector('#loadBooks');

        let tdBodyElement = document.querySelector('.hideTable');
        let addFormElement = document.querySelector('#add-form')

        let editFormElement = document.querySelector('#edit-form')
        let editButton = document.querySelectorAll('.btnEdit');

        editFormElement.classList.add('hideTable')
        loadAllBooksElement.addEventListener('click', (e) => {
            tdBodyElement.classList.remove('hideTable')
        })
        editButton.forEach(button => {
            button.addEventListener('click', (e) => {
                let titleElement = document.querySelector('.titleInput')
                let authorElement = document.querySelector('.authorInput')
                let currenAuthor = document.querySelector('.author');
                let currentTitle = document.querySelector('.titleBook');
                if (editFormElement.style.display = 'none') {
                    editFormElement.style.display = 'block';
                    addFormElement.style.display = 'none';
                }
                console.log(currenAuthor.textContent);
                console.log(currentTitle.textContent);  
                authorElement.value = currenAuthor.textContent;
                titleElement.value = currentTitle.textContent;
            })
        })
    })

function renderDisplay(booksValues) {
    render(body(booksValues), bodyElement)
}

