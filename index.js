const inquirer = require('inquirer');
const fs = require('fs');

const readmePathAndFilename = 'dist/README.md';

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

const getUserInput = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    }
  ])
  .then(({ title }) => {
    appData.title = title;
    processInputs();
  });
}


const processInputs = () => {
  processTitle();
};


const processTitle = () => {
  const titleText = `# ${appData.title}`;
  appendToFile(titleText);
};

const appendToFile = (value) => {
  fs.appendFile(readmePathAndFilename, value, (err) =>
    err ? console.error(err) : console.log('readme.md created!')
  );
};

const deleteReadme = () => {
  try {
    fs.unlinkSync(readmePathAndFilename)
  } catch(err) { console.error(err) }
};

const start = () => {
  deleteReadme();
  getUserInput();
}
start();



// const writeReadme = () => {
//   fs.writeFile('dist/README.md', 'hellow', (err) =>
//     err ? console.error(err) : console.log('Success!')
//   );
// }


