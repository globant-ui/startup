import fs = require('fs');
import express = require('express');
import cors = require('cors');


let dataArtists = fs.readFileSync('artist.json');

let artists = JSON.parse(dataArtists.toLocaleString());


const app = express();

app.get('/search/:type/:name',(req,res)=>{
    const myPromise = new Promise((resolve,reject) =>{
        let name = req.params.name; 
        let type = req.params.type;
        if(type === 'artist' && !artists[type].includes(name)){
        artists[type].push(name);
        }
        else if(type === 'track' && !artists[type].includes(name)){
            artists[type].push(name);
        } else if(type === 'playlist' && !artists[type].includes(name)){
            artists[type].push(name);
        }
        console.log(artists);
        fs.writeFile('artist.json',JSON.stringify(artists,null,' '),'utf8',(error) => {
            if(error){
                reject(error);
            }
            resolve('artist.json');
        })

    });
    myPromise.then((file)=>{
        res.send(file);
    }).catch((error)=>{
        res.send(error);
    });
});

app.get('/get',(req,res)=>{
    const myPromise = new Promise((resolve,reject)=>{
        if(!artists){
            reject('Error');
        }else{
            resolve('Resolve');
        }    
    });
    myPromise.then(()=>{
        res.send(artists);
    }).catch((error)=>{
        res.send(error);
    });    
});


// Add headers
/* app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000/get');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('content-type', 'text/json');

    // Pass to next layer of middleware
    next();
});
 */

//app.use(cors());

app.listen(4000,()=>{console.log('Running server at port 4000');});
