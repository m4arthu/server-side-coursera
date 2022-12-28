var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var verifyadmin = function(req, res, next) {
  User.findOne({_id: req.user._id})
  .then((user) => {
    console.log("User: ", req.user);
    if (user.admin) {
      next();
    }
    else {
      err = new Error('You are not authorized to perform this operation!');
      err.status = 403;
      return next(err);
    } 
  }, (err) => next(err))
  .catch((err) => next(err))
}
exports.verifyAdmin = verifyadmin 