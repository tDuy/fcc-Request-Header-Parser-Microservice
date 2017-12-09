// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.set('trust proxy', true);


app.get("/", function (request, response) {
  var lang = request.get('accept-language');
  lang = lang.split(';',1)[0].split(',', 1)[0];
  var os = request.get('user-agent');
  os = os.match(/\(([^)]+)\)/)[1];  // inside first parentheses () 
  var obj = { ip: request.ip, language: lang, os: os };
  response.send(obj);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
