// const http = require("http")

import http from "http";


const server = http.createServer((req, res) => {

    // res.write("Hello, you requested the server!! This is server's response")
    // res.end();

    if(req.url == "/"){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>Welcome to home page</h1>");
        res.end()
    }
    else if(req.url == "/about" && req.method == "GET"){
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify({message: "hello from about"}))
        res.end()
    }
    else if(req.url == "/contact"){
        res.write("Welcome to contact page");
        res.end()
    }
    else {
        res.write(`404 ${req.url} route not found`);
        res.end()
    }

})


const PORT = 3000
server.listen(PORT, ()=> {
    console.log(`Server running at port ${PORT}`)
})