var express = require('express');
var path = require('path');
var port = process.env.PORT || 5000;
var app = express();
app.use('/ashin', express.static(path.resolve(__dirname, 'ashin')));

var server = app.listen(port, function () {
    // var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
