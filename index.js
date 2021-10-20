// Imports.
const inquirer = require('inquirer');
const fs = require('fs');

// Constants.
const readmePathAndFilename = './dist/README.md';
const LICENSE_BSD = 'BSD';
const LICENSE_MIT = 'MIT';
const LICENSE_GPL = 'GPL';

// start() starts the app.  Called from end of this file.
const start = () => {
  promptForInput()
    .then((responses) => {
      makeReadme(responses);
      console.log('dist/README.md successfully created');
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
      message: 'Describe how to install this project:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How is this app run?',
      name: 'usage'
    },
    {
      type: 'list',
      name: 'licenseType',
      message: 'Which type of license?',
      choices: [LICENSE_BSD, LICENSE_GPL, LICENSE_MIT]
    },
    {
      type: 'input',
      message: 'What tests were performed on this app?',
      name: 'tests'
    },
    {
      type: 'input',
      message: 'Enter your email address:',
      name: 'email'
    },
    {
      type: 'input',
      message: 'Enter your github account name:',
      name: 'github'
    }
  ])
};

// Generates README.md content and writes to file system.
const makeReadme = (responses) => {
  const readmeContent = generateReadme(responses);
  fs.writeFileSync(readmePathAndFilename, readmeContent);
};

const getLicenseIconUrl = (licenseType) => {
  if (licenseType === LICENSE_MIT) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (licenseType === LICENSE_GPL) {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '[![License BSD-3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
};

// generateReadme() uses template literals to parameterize an otherwise hardcoded README.md file.
const generateReadme = ({ title, description, installation, usage, licenseType, tests, email, github }) => `
# Title: ${title}

# License: ${getLicenseIconUrl(licenseType)}

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

## Tests<a id="tests"></a> - ${tests}

## Contributing<a id="contributing"></a> - Contributions can be made via this github link:  https://github.com/${github}

## Reporting Issues<a id="issues"></a> - Issues can be reported via this github link:  https://github.com/${github}

## Questions?<a id="questions"></a> - Questions can be emailed to the author:  email:${email}
`;

// Starts the app when 'node index.js' command is run from the command line.
start();
