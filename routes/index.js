var express = require('express');
const path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(path.normalize(__dirname + '/../views') + '/index.html')
})

module.exports = router;
