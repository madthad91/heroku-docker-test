var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("Hello from container land Mr. sir!");
});

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log('Example app listening at http:/localhost:%s', port);
});