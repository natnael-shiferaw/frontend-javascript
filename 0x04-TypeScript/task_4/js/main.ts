import {Cpp}  from './subjects/Cpp'
import {Java} from './subjects/Java'
import {React} from './subjects/React'
import {Teacher} from './subjects/Teacher'

// create a Teacher object with experienceTeachingC attribute
export const cTeacher : Teacher = {
    firsName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
}

//Cpp subject
export const cpp = new Cpp();
console.log("C++")
console.log(cpp.setTeacher(cTeacher))
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

// Java subject
export const java = new Java();
console.log("Java")
console.log(java.setTeacher(cTeacher))
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())

// React Subject
export const react = new React();
console.log("React")
console.log(react.setTeacher(cTeacher))
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())
