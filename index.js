// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatereadme = require('./utils/generateMarkdown')
//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Hello! I am here to help you make a README for your projects. You'll just need to asnwer a few questions. First, what is the name of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Great! Now please give a project description: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "Now enter installation instructions: "
    },
    {
        type: 'input',
        name: 'credit',
        message: "if there is anyone you would like to give credit to, list their name and a link to their work."
    },
    {
        type: 'input',
        name: 'contribution',
        message: "How does one go about contributing?"
    },
        {
        type: 'input',
        name: 'usage',
        message: "What is the usage information? "
    },
    {
        type: 'input',
        name: 'features',
        message: "If your project has cool features you want to mention, list them here."
    },
    {
        type: 'input',
        name: 'test',
        message: "What command runs tests?"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license is your project using?",
        choices: ["Apache", "GNU General Public License (GPL)", "MIT", "Mozilla"]
    },
        {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is email address?"
    },
];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        fs.writeFile('readme.md', generatereadme(response), () =>
            console.log('Response recorded to readme file.'));
    });
}

// Function call to initialize app
init();