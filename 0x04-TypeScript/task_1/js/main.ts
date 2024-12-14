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

// Interface for StudentClass
interface IStudentClass {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string;
}
// Interface for StudentClass Constructor
interface IStudentClassConstructor {
    new (firstName: string, lastName: string): IStudentClass;
}

class StudentClass implements IStudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}
// example of the usage of StudentClass
const stud1 = new StudentClass("John", "Doe");
console.log(stud1.displayName()); // output: John
console.log(stud1.workOnHomework()); // output: Currently working