//require built-in modules
const http = require('http'); // CommonJS Module pattern (CJS)
const fs = require('fs');
const mime = require('mime-types');

let lookup = mime.lookup; //alias for mime.lookup

const port = 3000;

const server = http.createServer(function(req, res)   
{
    //console.log(__dirname);
    
    fs.readFile(__dirname + req.url, function(err, data){
        if(err){
            res.writeHead(404); //file not found
            console.log(`Error: ${err.message}`); //output to the dev console
            return res.end(err.message); //out put error message to the page
        }
        //if no error
        res.writeHead(200); //status all ok
        console.log(`DATA: ${data}`); //this wont work because the server is already created, it is an object, it cannot be changed, until the server is restarted
        return res.end(data);
        
    });
});

server.listen(port, function() 
{
    console.log(`Server running at Port: ${port}`);
});
