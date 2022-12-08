const express = require('express');
const bodyParser = require('body-parser');


var leadersRouter = express.Router();
leadersRouter.use(bodyParser.json());


leadersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end(`Will add the leader ${req.body.name} with details
     ${req.body.description}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /leaders`);
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
})

leadersRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res, next) => {    
    res.end(`Will send ${req.params.leaderId} the leaders to you!`);
})
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders');
})
    .put((req, res, next) => {    
        res.end(`Will update the leaders: ${req.body.name} with details: ${req.body.description}`);        
})
.delete((req, res, next) => {
    res.end(`Deleting leader: ${req.params.promoId}`);
});

module.exports = leadersRouter