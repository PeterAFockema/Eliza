//responsive_server.js
var http = require('http');
var fs = require('fs');
var events = require('events');

http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });

}).listen(8080);

var eventEmitter = new events.EventEmitter();

//Create an Event Handler
var myEventHandler = function() {
    console.log("My event");
}

//Assign the event handler to an event
eventEmitter.on('event1', myEventHandler);

//Fire the 'event1' event:
eventEmitter.emit('event1');