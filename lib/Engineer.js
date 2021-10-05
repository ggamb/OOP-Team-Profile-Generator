const Employee = require('Employee');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, role, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }
} 

mobile.exports = Engineer;