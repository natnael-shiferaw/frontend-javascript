// a class named Java that extends Subject class within the Subjects namespace
namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is a list of requirements for Teaching Java"
        }
        getAvailableTeacher(): string {
            if(this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`
            }
            return "No available teacher"
        }
    }
}