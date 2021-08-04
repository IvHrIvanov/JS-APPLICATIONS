import { render } from '../node_modules/lit-html/lit-html.js'
import { tbody } from './template/tableDisplayStudents.js';
let url = 'http://localhost:3030/jsonstore/advanced/table';
let tableElement = document.querySelector('.container > tbody');
fetch(url)
   .then(body => body.json())
   .then(tableBody => {
      let tablebodyImportFromUrl = Object.values(tableBody);
      rendering(tablebodyImportFromUrl);
   })

document.querySelector('#searchBtn').addEventListener('click', onClick);
function onClick() {
   let inputElement = document.querySelector('#searchField');
   let table = document.querySelectorAll('.container > tbody > tr')
   let inputValue = inputElement.value.toLocaleLowerCase();
   if (inputValue == '') {
      table.forEach(x => x.classList.remove('select'))
      return;
   }
   table.forEach(x => {
      let studentInfo = x.textContent;
      if (studentInfo.toLocaleLowerCase().includes(inputValue)) {
         x.classList.add('select')
      }
   })
   inputElement.value = '';
}
function rendering(tablebodyImportFromUrl) {
   render(tbody(tablebodyImportFromUrl), tableElement);
}