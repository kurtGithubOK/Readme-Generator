const inquirer = require('inquirer');
const fs = require('fs');

// Constants for generated readme.md path and filename.
const readmePathAndFilename = './dist/README.md';

// appData object for storing answers.
let appData = {
  /*
    title: 'Project title here.',
    description: 'Project description',
    howToUse: ['step 1', 'step 2', 'step 3'],
    imageLink: 'pathToImage',
    videoLink: 'pathToVideo',
    technologiesUsed: '['technology 1', 'technology 2', 'technology 3']',
    problemsEncountered: '',
    technicalDescription: ''
  */
};

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
      message: 'Describe how to use this project.',
      name: 'howToUse',
    }
  ])
};


const start = () => {
  promptForInput()
    .then( (responses) => {
      makeReadme(responses);
      console.log('README.md successfully created');
    })
    .catch((err) => console.error('An error occured when generating the README.md file:', err));
}
start();

const makeReadme = (responses) => {
  const readmeContent = generateReadme(responses);
  fs.writeFileSync(readmePathAndFilename, readmeContent);
};

const generateReadme = ( {title, description} ) =>
`
# ${title}

# Description: ${description}

# ![video description](./readmeImages/videofile.xxx)
Usage[link text](#abcd)
# Table of Contents
    * Installation 
    * Usage  [link text](#abcd)
    * License
    * Contributing
    * Tests
    * Reporting Issues
    * Questions?

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




// // Wraps calls to functions that process each user input.
// const processInputs = () => {
//   const processedTitle = processTitle();
//   appData.readmeSections.push(processedTitle);

//   const processedDescription = processDescription();
//   appData.readmeSections.push(processedDescription);

//   // Now that .................
// };

// const processTitle = () => {
//   return `# ${appData.title} \n`;
// };

// const processDescription = () => {
//   return `## ${appData.description} \n`;
// };

// const appendToFile = (value) => {
//   fs.appendFile(readmePathAndFilename, value, (err) =>
//     err ? console.error(err) : console.log('readme.md created!')
//   );
// };

// const deleteReadme = () => {
//   try {
//     fs.unlinkSync(readmeDirectory)
//   } catch (err) { console.error(err) }
// };

// This code is from: https://www.titanwolf.org/Network/q/de3adffe-b816-4f95-93f3-ef1534b80fe5/y
// var deleteFolderRecursive = function (path) {
//   if (fs.existsSync(path)) {
//     fs.readdirSync(path).forEach(function (file) {
//       var curPath = path + "/" + file;
//       if (fs.lstatSync(curPath).isDirectory()) { // recurse
//         deleteFolderRecursive(curPath);
//       } else { // delete file
//         fs.unlinkSync(curPath);
//       }
//     });
//     fs.rmdirSync(path);
//   }
// };
