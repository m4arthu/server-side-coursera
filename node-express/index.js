//import modules
const express = require('express');
const http = require('http');
const morgan = require('morgan'); // middleware to define an static file.
const bodyParser = require('body-parser'); // middleware to  parse the body menssage.
const dishRouter = require('./routs.js')

var hostname = 'localhost';
var port = 3000;
var app = express();
var server = http.createServer(app);

// usages of  the app
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use('/dishes', dishRouter)


//main page(route)
app.use((req, res, next) => {
    req.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server </h1></body></html>');
})


server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`)
})