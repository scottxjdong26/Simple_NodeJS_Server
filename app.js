const express = require('express')
const app = express()
const port = 8080

// Declare the counter as a global variable, 
// so that it can be accessed and updated in routers
app.locals.counter = 0;

// Add router file
require('./router/main')(app);

// Define directory of HTML file
app.set('views', __dirname + '/views');

// Set view engine & render HTML page through ejs
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Run the app on port 8080
app.listen(port, () => console.log('My app listening on port 8080!'))

