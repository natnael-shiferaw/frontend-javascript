// a Cpp class that extends Subject class in the Subjects namespace
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is a list of requirements for Cpp"
        }
        getAvailableTeacher(): string {
            if(this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
                return `Available Teacher : ${this.teacher.firstName}`
            }
            return "No Teacher Available"
        }
    }
}
