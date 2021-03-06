const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, github, email, title = "Engineer") {
        super(name, id, email, title)
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;