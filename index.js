const inquirer = require('inquirer');
const fs = require('fs');
/*
Rqmnts:		
    app purpose		
    how to use		
    how to install		
    how to report issues		
    how to make contributions		
Include video tutorial		
include gitignore.

ask Qs - figure out how inq works
store in variables.
write to filesystem - 
*/

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!', response.name, response.password, response.confirm)
  );

const writeReadme = () => {
  fs.writeFile('dist/README.md', 'hellow', (err) =>
  err ? console.error(err) : console.log('Success!')
  );
}









