const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, role, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }
} 

mobile.exports = Intern;