import { html } from "../../node_modules/lit-html/lit-html.js";

export let body = (books) => html`
<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody class="hideTable">
        ${books.map(b => tdInTable(b))};
    </tbody>
</table>
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>

<form id="edit-form">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input class="titleInput" type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input class="authorInput" type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>
`;

export let tdInTable = (book) => html`
<tr>
    <td class="titleBook">${book.title}</td>
    <td class="author">${book.author}</td>

    <td>
        <button class="btnEdit">Edit</button>
        <button class="btnDelete">Delete</button>
    </td>
</tr>
`;