// create an interface for a student

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
//create two students using Student interface
const stud1 : Student = {
	firstName: "john";
	lastName: "Doe";
	age: 21;
	location: "Dubai";
}
const stud2 : Student = {
        firstName: "jane";
        lastName: "Doe";
        age: 18;
        location: "California";
}

