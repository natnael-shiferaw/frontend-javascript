// create an interface for a student

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
//create two students using Student interface
const stud1 : Student = {
	firstName: "john",
	lastName: "Doe",
	age: 21,
	location: "Dubai"
}
const stud2 : Student = {
        firstName: "jane",
        lastName: "Gilbert",
        age: 18,
        location: "California"
}
// create an array of students
const studentsList : Student[] = [stud1, stud2];

// render a table  and for each elements in the array, append a new row to the table
const table = document.createElement('table');
const tbody = document.createElement('tbody')

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = student.firstName;
	const locationCell = document.createElement('td');
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell)
	row.appendChild(locationCell)
	tbody.appendChild(row)

})
table.appendChild(tbody)
document.body.appendChild(table)