const express = require('express')
const app = express()
const port = 8080

// Declare the counter as a global variable, 
// so that it can be accessed and updated in routers
app.locals.counter = 0;

// Run the app on port 8080
app.listen(port, () => console.log('My app listening on port 8080!'))

