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
const generateReadme = ( {title, description, installation} ) =>
`
# ${title}

# Description: ${description}

# ![video description](./readmeImages/videofile.xxx)

[link text](#abcd)

# Table of Contents
    * Installation 
    * Usage  [link text](#abcd)
    * License
    * Contributing
    * Tests
    * Reporting Issues
    * Questions?

## Installation - ${installation} 
## Usage - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## License - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Contributing - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Tests - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Reporting Issues - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Questions? - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 


## Installation - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Usage - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## License - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Contributing - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Tests - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf  
## Reporting Issues - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Questions? - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 


## Installation - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Usage - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## License - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Contributing - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Tests - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Reporting Issues - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Questions? - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 


## Installation - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Usage - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## License - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Contributing - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Tests - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf  
## Reporting Issues - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Questions? - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 


## Installation - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Usage - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## License - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Contributing - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Tests - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf  <a id="abcd"></a>
## Reporting Issues - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
## Questions? - asdf adf adf asdf adf asdf adf asdf asdf asdf asdf asdf sdf 
`;

start();
