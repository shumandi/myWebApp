var express = require('express');
const path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.normalize(__dirname + '/../views') + '/index.html')
})
router.route('/signup').get((req, res, next) => {
  res.json(req.user);
})
module.exports = router;
