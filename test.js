var http = require("http");

http.createServer(function(req, res){
    
    
    res.end("hello");
    
    }).listen(process.env.PORT, process.env.IP);