// create Director interface
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string;
}
// create Teacher interface
interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string;
}

// create a Director Class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting coffee break";
    }
    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}
// create a Teacher Class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot get coffee break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// create a function that creates Employees
function createEmployee(salary: string | number): DirectorInterface | TeacherInterface {
    if (typeof(salary) === "number" && salary < 500){
        return new Teacher();
    } else {
        return new Director();
    }
}
// example of the usage of the createEmployee function
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director

// a function that checks if an Employee is a Director
function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
    return employee instanceof Director;
}
// function that executes a method based on the type of employee
function executeWork(employee: DirectorInterface | TeacherInterface) : string {
    if(employee instanceof Director) {
        return employee.workDirectorTasks();
    }
    else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
    return '';
}
console.log(executeWork(createEmployee(200)));  // Expected: "Getting to work"
console.log(executeWork(createEmployee(1000))); // Expected: "Getting to director tasks"
