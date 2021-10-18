const inquirer = require('inquirer');
const fs = require('fs');

const readmePathAndFilename = 'dist/README.md';
// Constants for generated readme.md path and filename.
const readmeDirectory = './dist';
const readmeFilename = 'README.md';

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
  // Array of readme sections to be iterated over for appending to readme.md file.
  readmeSections: []
};

const getUserInput = () => {
  inquirer.prompt([
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
    .then(({ title, description }) => {
      appData.title = title;
      appData.description = description;
    });
}



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

// https://www.titanwolf.org/Network/q/de3adffe-b816-4f95-93f3-ef1534b80fe5/y
var deleteFolderRecursive = function (path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file) {
      var curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};


const start = () => {
  deleteFolderRecursive(readmeDirectory);
  getUserInput();
  processInputs();
  // writeReadme();
}
start();



const generateReadme = ({ name, location, github, linkedin }) =>
`
# Weather Dashboard

# This is the submission for Coding Quiz homework [Weather Dashboard](https://uwa.bootcampcontent.com/UWA-Bootcamp/uw-blv-virt-fsf-pt-07-2021-u-c/-/tree/master/06-Server-Side-APIs/02-Homework) for U/W Coding Bootcamp Full Stack Flex Program, for Kurt Heimerman.<br/><br/>

## A few notes about this app:      
* When the app starts it defaults to the city of 'Seattle'.
* The app first makes an API call to openweathermap.org to get the city's latitude & longitude.
* It then makes a subsequent API call to get the current and forecast conditions.
* A user can enter a city name, click 'Search', and be presented with that city's weather info.
* The app saves weather info for cities in local storage.
* The app is responsive.

![Screenshot of Password Generator](./readmeImages/screenshot.png)

## The deployed app is here:  https://kurtgithubok.github.io/Weather_Dashboard/

## It uses HTML, CSS, Web-API fetch, and Javascript.

## The most challenging part of this exercise was accounting for structuring methods without resorting to deep nesting of API calls.
`;
