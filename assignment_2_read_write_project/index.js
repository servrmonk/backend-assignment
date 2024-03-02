const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `<body><form action='/' method='POST'><input type="text" placeholder='add data' name='message'><button type='submit'>send</button></form></body>`
    );
  }
  if (req.url === "/" && req.method === "POST") {
    // const body=[];
    let body = "";
    req.on("data", (chunk) => {
      console.log("Chunk data", chunk);
      // body.push(chunk)
      body += chunk.toString();
    });
   req.on("end", () => {
      console.log("body==>", body.substring(body.indexOf("=") + 1));

      res.end(body.substring(body.indexOf("=") + 1));
    });
  }
});
server.listen(3001, () => {
  console.log("Server is listening at 3001");
});
