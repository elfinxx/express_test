var requestify = require("requestify");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {  
  requestify.get('http://example.com').then(function(response) {
      // Get the response body (JSON parsed - JSON response or jQuery object in case of XML response)
      console.log(response.getBody());
      res.send(response.getBody());

      // Get the response raw body
      response.body;
  });

  res.send('respond with a resource');
});

module.exports = router;
