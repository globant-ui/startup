import fs = require('fs');
import config from './config.json';
import uuidv1 = require('uuid/v1');
import express = require('express');


const fileName:string = config.name;
const version:string =  config.version;

interface Log {
    id:string,
    date: string,
    text: string
}

const app = express();

app.get('/message=:message',(req,res)=>{
    const myPromise = new Promise((resolve,reject) =>{
        let message:string = req.params.message; 
        let date:string = (new Date).toLocaleString();
        let id:string = uuidv1(); 
        let file:Log = {id:id,date:date,text:message};
        fs.appendFile(fileName,JSON.stringify(file)+'\n','utf8',(error) => {
            if(error){
                reject(error);
            }
            resolve(file);
        })

    });
    myPromise.then((file)=>{
        res.send(file);
    }).catch((error)=>{
        res.send(error);
    });
});

app.get('/version',(req,res)=>{
    const myPromise = new Promise((resolve,reject)=>{
        if(!version){
            reject('Error');
        }else{
            resolve('Resolve');
        }    
    });
    myPromise.then(()=>{
        res.send('Version: ' + version);
    }).catch((error)=>{
        res.send(error);
    });    
});


app.listen(4000);
