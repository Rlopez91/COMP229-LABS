const http = require('http'); //common js module pattern
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req, res){
    fs.readFile(__dirname + req.url)
});

server.listen(port, function(){
    console.log(`Server running at Port: ${port}`)
});