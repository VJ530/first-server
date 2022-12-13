//  first server

const { on } = require("events");
const http = require("http");

const port = 8081;
const toDoList = ["Need to learn", "Need to code"];

// http methods
// default - GET => getting certain detials from server , directly work on any browser
// PUT => overwrite , update fully 
// DELETE => deletes data from server 
// PATCH => to update certain files
// POST => sending data to the server
 

http
    .createServer((req, res) => {
    
        // res.writeHead(200, {"Content-Type": "text/html"});
        // res.write("<h4>Hello,guys hope ur doing fine</h4>");
        // res.end();
        const { method, url } = req;
        // console.log(method, url);
        // res.end();
        if (url === "/todos") {
            // todos -> http://localhost:8081/todos
            if (method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(toDoList.toString());
                // UI shows only HTML things so access the string use "toString()"
                
            } else if(method === "POST") {
                let body = "";
                // let , var , char ,const are written with variables
                req.on('error', (err) => {
                    console.log(err);
                }).on('data', (chunks) => {
                    body += chunks;
                    console.log(chunks);
                }).on('end', () => {
                    body = JSON.parse(body);
                    console.log("Body Data ",body);
                });
            }
            else {
                res.writeHead(501);
            }
        }
            else {
                res.writeHead(404);
        }
        res.end();
        })
    .listen(port, () => {
        console.log(`My NodeJs Server started on port ${port}`);
    });

// to run the server
// http://localhost:8081  SAME

// for getting any version explicitly
// write the version in "package.json - nodemon : " and in the terminal "npm i"

// http://localhost:8081/  SAME

// routes :-
// http://localhost:8081/home
// http://localgost:8081/aboutUs
// http://localhost:8081/contactUs

// 4 for client-side issues
// 5 for server-side issues

// Json is preferred bec it sends data on chunks


