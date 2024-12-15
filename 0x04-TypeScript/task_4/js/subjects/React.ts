// a class named React that extends Subject class within the Subjects namespace
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        getRequirements(): string {
            return "Here is a list of requirements for Teaching React"
        }
        getAvailableTeacher(): string {
            if(this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`
            }
            return "No available teacher"
        }
    }
}

