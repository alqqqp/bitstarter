var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer_contents = fs.readFileSync('index.html','utf-8');
var string_contents = buffer_contents.toString();

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    response.send(string_contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
