// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
// Use a validate to check user input to make sure at least required info is valid
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your full name? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your full name";
            }
        }    
    },


    {
        type: "input",
        name: "username",
        message: "What is your Github username? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter Github username";
            }
        }    
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your email address";
            }
        }    
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name? (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter your project name";
            }
        }    
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project: (Required)",
        validate: function(input) {
            if (input.length > 0) {
              return true;
            } else {
              return "Please enter a description of your project.";
            }
        }    
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run test?"
    },


    {
        type: "checkbox",
        name: "technology",
        message: "What technologies used in this project?",
        choices: ["HTML", "CSS", "JavaScript", "NodeJs","Bootstrap","VS Code", "jQuery","Bulma" ],
        validate: function(answer) {
            if (answer.length < 1) {
              return "You must choose at least one.";
            }
            return true;
          }
    },

    {
        type: "list",
        name: "license",
        message: "Select a license.",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3-Clause", "NONE"]
    },

    {
        type: "input",
        name: "usage",
        message: "What do the user need to know about using the repo?"
    },

    {
        type: "input",
        name: "screenshot",
        message: "Enter URL for landing page screenshot.",
    },


    {
        type: "input",
        name: "contribution",
        message: "What do the user need to know about contributing to the repo?"
    },

    {
        type: "input",
        name: "questions",
        message: "Enter questions/additional information."
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, err => {
    err ? console.error(err) : console.log("Success! Please find your README.md in the root folder")
});
}; 



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=> {      
        const markdown = generateMarkdown(data);
        writeToFile("Display-README.md", markdown);
    });
}

// Function call to initialize app
init();

