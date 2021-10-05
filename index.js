const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');

let nameArray = [];

// Creates an array of questions for user input
const getInput = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "Enter your team manager's name",
        validate: managerName => {
          if (managerName) {
            return true;
          } else {
            console.log("Please enter your manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerID',
        message: "Enter your manager's ID",
        validate: managerID => {
          if (managerID) {
            return true;
          } else {
            console.log("Please enter your manager's ID!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Enter your manager's email",
        validate: managerEmail => {
          if (managerEmail) {
            return true;
          } else {
            console.log("Please enter your manager's email!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: "Enter your manager's office number",
        validate: managerOffice => {
          if (managerOffice) {
            return true;
          } else {
            console.log("Please enter your manager's office number!");
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'addMore',
        message: 'Would you like to add another member to the team?'
      }
    ])
    .then(answer => {
        console.log(nameArray);

        nameArray.push(new Manager(answer.managerName, answer.managerID, answer.managerEmail, "Manager", answer.managerOffice));


        console.log(nameArray);

        if (answer.addMore) {
            pickEmployee();
        }
    })
    .catch(error => {
        console.log(error);
    })
};



const addEngineer = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "Enter your engineer's name",
          validate: engineerName => {
            if (engineerName) {
              return true;
            } else {
              console.log("Please enter your engineer's name!");
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "Enter your engineer's ID",
            validate: engineerID => {
              if (engineerID) {
                return true;
              } else {
                console.log("Please enter your engineer's ID!");
                return false;
              }
            }
          },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "Enter your engineer's email",
          validate: engineerEmail => {
            if (engineerEmail) {
              return true;
            } else {
              console.log("Please enter your engineer's email!");
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "Enter your engineer's github",
          validate: engineerOffice => {
            if (engineerOffice) {
              return true;
            } else {
              console.log("Please enter your engineer's github!");
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'addMore',
          message: 'Would you like to add another member to the team?'
        }
      ])
      .then(answer => {
          if (answer.addMore) {
            pickEmployee();
          } else {
            console.log("Done!");
          }
      })
}

const pickEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'pick',
            message: 'Who would you like to add?',
            choices: ["Engineer", "Intern"]
        }
     ])
     .then(answer => { 
        if(answer.pick === "Intern") {
            addIntern();
        } else {
            addEngineer();
        }
     })
}

const addIntern = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'internName',
          message: "Enter your intern's name?",
          validate: internName => {
            if (internName) {
              return true;
            } else {
              console.log("Please enter your intern's name!");
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'internID',
          message: "Enter your intern's ID",
          validate: internID => {
            if (internID) {
              return true;
            } else {
              console.log("Please enter your intern's ID!");
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter your intern's email",
            validate: internEmail => {
              if (internEmail) {
                return true;
              } else {
                console.log("Please enter your intern's email!");
                return false;
              }
            }
          },
        {
          type: 'input',
          name: 'internSchool',
          message: "Enter your intern's school",
          validate: internSchool => {
            if (internSchool) {
              return true;
            } else {
              console.log("Please enter your intern's school!");
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'addMore',
          message: 'Would you like to add another member to the team?'
        }
      ])
      .then(answer => {
          if (answer.addMore) {
            return pickEmployee();
          } else {
            return false;
          }
      })
}



getInput();