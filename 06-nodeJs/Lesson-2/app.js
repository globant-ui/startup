const fs = require('fs');
const getArg = require('./modules/consoleInput');
const fsPromises=fs.promises;
const UUID = require("node-uid");



let uuid = UUID();
let now = new Date();
now_string = JSON.stringify(now);
const file = './logger.log';


var user = getArg('--user');
var psw = getArg('--psw');
var sessionID = uuid



data = [
  `usuario: ${user}`,
  `contraseña: ${psw}`,
  `session-id: ${sessionID}`,
  `Fecha y hora actual: ${now_string}`
]


fsPromises.access(file, fs.constants.R_OK | fs.constants.W_OK)
  .then(() => console.log('the log file alredy exist'),
    fs.appendFile(file, data, (err) => {
      if (err) throw err;
    }),
    console.log('...has been updated')
  )

  .catch(() =>
    fs.writeFile(file, data, (err) => {
      if (err) throw err;
    }),
    console.error('the log file has been created'));


  