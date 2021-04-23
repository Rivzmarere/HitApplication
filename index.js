const express = require('express');
const { error } = require('console');
const ParseServer = require('parse-server').ParseServer;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// calling routes
const activity = require('./routes/ActivitieRoute');
const canteen = require('./routes/CanteenRoute');
const course = require('./routes/CourseRoute');
const lecturer = require('./routes/LecturerRoute');
const payment = require('./routes/PaymentRout');
const program = require('./routes/ProgramsRoute');
const student = require('./routes/StudentsRoute');
//connecting mongodb
const api = new ParseServer({
    // mongodb+srv://retail:retail1234@cluster0.ms5eo.mongodb.net/retail?retryWrites=true&w=majority
    databaseURI:'mongodb://localhost:27017/HitApplication', // Connection string for your MongoDB database
    cloud: './cloud/main.js', // Absolute path to your Cloud Code
    appId: 'myAppId',
    masterKey: 'myMasterKey', // Keep this key secret!
    fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:1000/parse' // Don't forget to change to https if needed
  });
  
  //middlware
  //Routes
app.use('/activity',activity);
app.use('/canteen',canteen);
app.use('/course',course);
app.use('/lecturer',lecturer);
app.use('/payment',payment);
app.use('/program', program);
app.use('/student',student);

  //Serve the Parse API pn the /parse URL prefix
app.use('/parse',api);

const PORT = process.env.PORT || 1000;
app.listen(PORT, ()=> console.log(`API Running on port ${PORT}`))