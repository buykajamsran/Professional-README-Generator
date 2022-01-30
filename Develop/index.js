// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description of your project',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contributors if any',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test guidelines',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a licence for your project',
            choices: [],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
