// // Start of the Code...
// const express = require('express')
// const cors = require('cors');
// const bodyParser= require('body-parser')

// const { mongoose }  = require('./db.js') 
// //var empCont =require("../backend/control.js")
// //var addUser =require("../backend/addUser.js")
// let users =require('../backend/Controllers/user_controller.js') 
// let adhd =require('../backend/Controllers/adhd_controller.js') 
// let aq_10 =require('../backend/Controllers/aq_10_controller.js') 
// let model =require('../backend/Controllers/model_controller.js') 

// let app = express(); // creating an express application 
// app.use(cors());
// app.use(bodyParser.json()); // setups middleware to  be used for  all routes 


// app.listen( 3009 , ()=>console.log('Server Started at port : 3009'));
// app.use('/AQ_10' , aq_10)
// app.use('/AI' , model)
// app.use('/ADHD' , adhd)
// app.use('/Users' , users)

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverless = require('serverless-http'); // Import serverless-http

const { mongoose } = require('./db.js');
let users = require('../netlify/functions/user_controller.js');
let adhd = require('../netlify/functions/adhd_controller.js');
let aq_10 = require('../netlify/functions/aq_10_controller.js');
let model = require('../netlify/functions/model_controller.js');

let app = express();
console.log("index.js")
app.use(cors());
app.use(bodyParser.json());

// Remove the app.listen line as it's not needed in serverless architecture
// app.listen(3009, ()=>console.log('Server Started at port : 3009'));

app.use('/.netlify/functions/api/AQ_10', aq_10);
app.use('/.netlify/functions/api/AI', model);
app.use('/.netlify/functions/api/ADHD', adhd);
app.use('/.netlify/functions/api/Users', users);

// Export the serverless application
module.exports.handler = serverless(app);
