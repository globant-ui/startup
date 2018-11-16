const fs = require('fs');
const argv = require('yargs').argv;
import config from './config.json';


const fileLog:string = config.name;
const version:string =  config.version;

const demoObject = {
  date: new Date(),
  text: argv.msg
};

const appendFile = (filename:string)=>{
  fs.appendFile(fileLog, `======= \n Date: ${demoObject.date}\n Message: ${demoObject.text}\n=======` , (err:string) => {
    if (err) throw err;
  });
}

const fileExists = (file:string, append:Function) => {
  if(argv.version){
    console.log(version);
  } 
  fs.exists(file, (exists:any) => {
    if (!exists) {
      console.log('File created and message added');
      append(file);
    }else {
      console.log('Message added');
      append(file);
      
    }
  });

}

fileExists(fileLog, appendFile)