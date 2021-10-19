const inquirer = require('inquirer');
const fs = require('fs');

// Constants for generated readme.md path and filename.
const readmePathAndFilename = './dist/README.md';

// start() starts the app.  Called from end of this file.
const start = () => {
  promptForInput()
    .then( (responses) => {
      makeReadme(responses);
      console.log('README.md successfully created');
    })
    .catch((err) => console.error('An error occured when generating the README.md file:', err));
}

// Prompts user for input used to generate README.md file.
const promptForInput = () => {
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe how to install this project.',
      name: 'installation',
    }
  ])
};

// Generates README.md content and writes to file system.
const makeReadme = (responses) => {
  const readmeContent = generateReadme(responses);
  fs.writeFileSync(readmePathAndFilename, readmeContent);
};

// generateReadme() uses template literals to parameterize an otherwise hardcoded README.md file.
const generateReadme = ( {title, description, installation, usage, license, contributing, tests, issues, questions} ) => `
# Project: ${title}

# Description: ${description}

# Table of Contents:
* [Installation](#installation) 
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Reporting Issues](#issues)
* [Questions?](#questions)

## Installation<a id="installation"></a> - ${installation} 

## Usage<a id="usage"></a> - ${usage}

## License<a id="license"></a> - ${license} 

## Contributing<a id="contributing"></a> - ${contributing}  

## Tests<a id="tests"></a> - ${tests}

## Reporting Issues<a id="issues"></a> - ${issues}

## Questions?<a id="questions"></a> - ${questions}
`;

start();
