// create interface for Teacher
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}
// example of the usage of Teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
  
console.log(teacher3);

// Interface for Directors
interface Directors extends Teacher {
    numberOfReports: number;
}

// example of the usage of Directors interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

// Interface for a function that prints teacher's fullname
interface printTeacherFunction {
    (firsName: string, lastName: string) : string;
}

// example of the usage of printTeacherFunction interface
const printTeacher: printTeacherFunction = (firsName, lastName) => {
    return `${firsName[0]}. ${lastName}`;
}
console.log(printTeacher("John", "Doe")); // output: J. Doe