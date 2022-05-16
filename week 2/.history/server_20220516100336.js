//require built-in modules
const http = require('http'); // CommonJS Module pattern (CJS)
const fs = require('fs');
const mime = require('mime-types');

let lookup = mime.lookup; //alias for mime.lookup

const port = 3000;

const server = http.createServer(function(req, res)   
{
    //console.log(__dirname);
    let path = req.url;

    if(path == "/" || path =="/home"){
        path = "/index.html";
    }

    let mime_type = lookup(path.substring(1));
    console.log(`MIME TYPE: ${mime_type}`);

    fs.readFile(__dirname + path, function(err, data){
        if(err){
            res.writeHead(404); //file not found
            console.log(`Error: ${err.message}`); //output to the dev console
            return res.end("ERROR: 404 - file not found"); //out put error message to the page
        }
        //if no error
        res.setHeader("X-Content-Type-Options", "nosniff");//security guard
        res.writeHead(200, {'Conten-Type': mime-type}); //status all ok
        console.log(`DATA: ${data}`); //this wont work because the server is already created, it is an object, it cannot be changed, until the server is restarted
        return res.end(data);
        
    });
});

server.listen(port, function() 
{
    console.log(`Server running at Port: ${port}`);
});
