const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, role, email);

        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }
} 

mobile.exports = Manager;