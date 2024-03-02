const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req.url, req.headers, req.method);
  const method = req.method;

  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action='/message' method='POST'><input type="text" name='message'><button type='submit'>send</button></form></body>`
    );
    res.write("<html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = []; //mt array
    req.on("data", (chunk) => {
      //on allow to listen some event, a data event can be fired whenever the new chunks is ready to read
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      //once it done parcing the incoming chunks or data
      // we now need to buffer that
      const parcedBody = Buffer.concat(body).toString(); //to converted it to string
      console.log(parcedBody);
      const message = parcedBody.split("=")[1];
      // fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message,(err)=>{console.log(err)});
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });

    // redirect to user to slash or home page, and store the message in the file
    // fs.writeFileSync("message.txt", "DUMMY");
    // writehead allow to write some meta info
    // res.writeHead(302,{})//status code 302
  }
});

server.listen(3000);
