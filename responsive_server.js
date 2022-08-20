var http = require('http');
var dt = require('./date_module');
var eliza_says = require('./eliza_speech');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write('Hello, I am Eliza.\n');
    res.write(eliza_says.eliza_greeting());
    res.write('\r\nYou spoke to me at ' + dt.myDateTime() + '.');
    res.end();
}).listen(8080);
