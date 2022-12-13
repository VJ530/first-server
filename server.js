//  first server

const http = require("http");

const port = 8081;
 
http
    .createServer((req, res) => {
    
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h4>Hello,guys hope ur doing fine</h4>");
        res.end();
    })
    .listen(port, () => {
        console.log(`My NodeJs Server started on port ${port}`);
    });

// to run the server
// http://localhost:8081

