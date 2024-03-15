//Defining interface for Student
interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

//Creating two students
const student1: Student = {
firstName: "Oluwatosin",
lastName: "Ajayi",
age: 25;
location: "Lagos"
};

const student2: Student = {
firstName: "John",
lastName: "Wayne",
age: 45;
location: "New York"
}

//Array containing the students created
const studentsList: Student[] = [student1, student2];

//Rendering table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
const table = document.createElement("table");
const tbody = document.createElement("tbody");

//Append table header
const thead = table.createTHead();
const headerRow = thead.insertRow();
const firstNameHeader = headerRow.insertCell();
firstNameHeader.textContent = "First Name";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";

//Append rows for each student
students.List.forEach(student => {
const row = tbody.inserRow();
const firstNameCell = row.insertCell();
firstNameCell.textContent = student.firstName;
const locationCell = row.insertCell();
locationCell.textContent = student.location;
});

table.appendChild(tbody);

document.body.appendChild(table);
});
