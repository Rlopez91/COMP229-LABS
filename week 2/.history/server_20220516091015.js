const http = require('http'); //common js module pattern
const fs = require('fs');

const server = http.createServer(function(req, res){
    fs.readFile(__dirname + req.url)
});

server.listen(port, function(){
    
})