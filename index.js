const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

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
      }
    ])
    .then(answer => {
      //Manager object added to array
        nameArray.push(new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerOffice));      
    })
    .catch(error => {
        console.log(error);
    })
};

//If user selects to add an engineer, they are prompted for information
//and an engineer is added to the array of objects
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
      validate: engineerGithub => {
        if (engineerGithub) {
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
    //Engineer object added to array
    nameArray.push(new Engineer(answer.engineerName, answer.engineerID, answer.engineerEmail, answer.engineerGithub));

    if (answer.addMore) {
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
          return addIntern();
        } else {
          return addEngineer();
        }
      })
    } else {
      return nameArray;
    }
  })
}

//If user selects to add an intern, they are prompted for information
//and an intern is added to the array of objects
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
    //Intern object added to array
    nameArray.push(new Intern(answer.internName, answer.internID, answer.internEmail, answer.internSchool));

    if (answer.addMore) {
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
          return addIntern();
        } else {
          return addEngineer();
        }
      })
    } else {
      console.log("Done!", nameArray);
      return nameArray;
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
      return addIntern();
    } else {
      return addEngineer();
    }
  })

}

//Initiates prompt
getInput()
  .then(pickEmployee)
  .then(employeeArray => {
    return generatePage(employeeArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(copyFileResponse => {
    return copyFile(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });