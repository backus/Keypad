// Generated by CoffeeScript 1.4.0
(function() {
  var app, express, password;

  express = require('express');

  app = express();

  app.use(express.bodyParser());

  password = '1234';

  app.get('/', function(req, res) {
    return res.sendfile('index.html');
  });

  app.post('/unlock', function(req, res) {
    var submittedKey;
    submittedKey = req.body.key;
    if (submittedKey === password) {
      return res.send('correct');
    } else {
      return res.send('incorrect');
    }
  });

  app.get('/:resource(css|js|img)/:file', function(req, res) {
    return res.sendfile(req.params.resource + '/' + req.params.file);
  });

  app.listen(process.env.PORT || 8080);

}).call(this);
