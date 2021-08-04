import { html } from "../../node_modules/lit-html/lit-html.js";

export let trTdody = (student) => html`
<tr>
    <td>${student.firstName} ${student.lastName}</td>
    <td>${student.email}</td>
    <td>${student.course}</td>
</tr>

`;

export let tbody = (students) => html`
        ${students.map(st => trTdody(st))}
`;