const express= require('express');
const config= require('./config');
const morgan= require('morgan');
const app= express();


//settings
app.set('port', config.port)

//middlewares 
//app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(require('./routes/spotify.routes'))

//starting the server


console.log('app run in port: ',config.port);
app.listen(3000)