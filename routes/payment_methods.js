var express = require('express');
var router = express.Router();

/* GET payment methods listing. */
router.get('/', function(req, res, next) {
  res.json({'payment_methods':{
    'test':'test'
  }});
});

module.exports = router;
