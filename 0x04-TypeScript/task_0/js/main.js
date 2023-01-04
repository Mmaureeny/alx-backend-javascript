"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayStudents = void 0;
const studentA = {
    firstName: "Roy",
    lastName: "Ken",
    age: 22,
    location: "Arusha, Tanzania",
};
const studentB = {
    firstName: "Mudzo",
    lastName: "Mwaka",
    age: 22,
    location: "Gilgil, Nakuru",
};
const studentsList = [
    studentA,
    studentB,
];
const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;
/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */
const displayStudents = (students) => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
    for (const student of students) {
        const bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
        bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};
exports.displayStudents = displayStudents;
(0, exports.displayStudents)(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
