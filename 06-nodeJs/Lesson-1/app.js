const fs = require('fs');
const getArg = require('./modules/consoleInput')

let now= new Date();
now_string = JSON.stringify(now);
const file='./logger.log';

var user = getArg('--user');
var psw = getArg('--psw');

// Check if the file exists in the current directory. and commit the changes
fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'has benn created' : 'has been update'}`);
    fs.appendFile('logger.log',`
    usuario: ${user}
    contraseña: ${psw}
    Fecha y hora actual: ${now_string}`)
  }); 
  

