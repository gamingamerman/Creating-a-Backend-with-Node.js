// htpp is a built-in module in node.js
const http = require("http");

// fs is a built-in module in node.js aswell
const fs = require("fs");

let rawdata = fs.readFileSync("data.json");
let file = JSON.parse(rawdata);


// We'll be using the createServer method which takes a callback funcction as an argument, and within the callback function two arguments are required: req and res.
const server = http.createServer(function (req, res) {

    console.log(`${req.method} request recieved at ${req.url}`);
    if (req.url === "/movies") {
        res.setHeader("Content-type", "text/json");
        res.statusCode = 200;
        res.end(JSON.stringify(file, null, 3));
    } 
});

// We'll make the server listen to incoming requests on the port we specified, being port 3000 on our localhost
server.listen(3000, function () {
    console.log("Port is listening at http://localhost:3000")
});