// core modules : http https fs path(constructing path) os
// http : launch a server , send request
// https: launch a ssl server
// fs

const http = require("http");
// console.log(http);
// http has createServer method it's a curucial method it takes request lisner as a arg just hover on it and it will return server

// function rqListener(request,response){} //or u can pass anynomous fun and it will return a server just hover on it 
// http.createServer(rqListener)

const server = http.createServer((req, res) => {
  console.log(req); //first send the request to server than this will print 
});

server.listen(3000,()=>{ //listen will run for upcomming request now listen takes arg first one is port that will server will listen , and the hostname in local machine the nameis localhost
console.log("Server is running on 3000");
});