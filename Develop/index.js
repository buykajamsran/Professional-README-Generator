// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Project title required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description explaining the what, why, and how of your project (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Project description required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the steps required to install your project (required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Installation steps required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use (required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Project instructions required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'List your collaborators, if any, with links to their GitHub profiles',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Write tests for your application',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a licence for your project',
        choices: ['mit', 'apache', 'boost', 'none'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('GitHub username required');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Email address required');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeToFile = data => {
    fs.writeFileSync('./dist/README.md', data)
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(promptUser)
    .then(data => {
        Response = data
        return Response;
    })
};

// Function call to initialize app
init()
    .then(Response => {return generateMarkdown(Response)})
    .then(writeToFile)