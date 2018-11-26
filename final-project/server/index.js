const express= require('express');
const config= require('./config');
const morgan= require('morgan');
const cors= require('cors');
const app= express();




//settings
app.set('port', config.port)

//middlewares 
//app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(require('./routes/spotify.routes'))
app.use(cors({origin:'http://localhost:4200/'}));
//starting the server


console.log('app run in port: ',config.port);
app.listen(3000)