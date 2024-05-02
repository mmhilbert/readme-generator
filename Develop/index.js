// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'
import { generateMarkdown } from './utils/generateMarkdown.js'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'enter README title here'
    },
    {
        type: 'input',
        name: 'description',
        message: 'enter README desciption here'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'list your collaborators with links to their GitHub profile',
        validate: (input) => input.includes('github.com')
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'please provide testing instructions if applicable.'
    },
    {
        type: 'list',
        name: 'licence',
        message: 'What licence did you use?',
        choices: ['Apache-2.0', 'GNU-v3', 'Mozilla-2.0', 'BSD', 'MIT', 'Unlicensed' ]
    }

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err
        console.log('readme file created!')
    })
}

// TODO: Create a function to initialize app
const init = async () => {
    const answers = await inquirer.prompt(questions)
    console.log(answers)
    
    const markdown = generateMarkdown(answers) 
    writeToFile('./readme.md', markdown)
}

// Function call to initialize app
init();
