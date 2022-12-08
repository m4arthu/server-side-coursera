//imports
const express = require('express');
const bodyParser = require('body-parser');


var promoRouter = express.Router();
promoRouter.use(bodyParser.json());


promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the promotions to you!');
})
.post((req, res, next) => {
    res.end(`Will add the promotion ${req.body.name} with details
     ${req.body.description}`);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /dishes`);
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
})


promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
    .get((req, res, next) => {    
    res.end(`Will send ${req.params.promoId} the promotion to you!`);
})
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions');
})
    .put((req, res, next) => {    
        res.end(`Will update the promotions: ${req.body.name} with details: ${req.body.description}`);        
})
.delete((req, res, next) => {
    res.end(`Deleting promotion: ${req.params.promoId}`);
});

module.exports = promoRouter