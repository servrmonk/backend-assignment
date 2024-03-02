const fs = require("fs");

const requestHandle = (req, res) => {
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parcedBody = Buffer.concat(body).toString();
      console.log(parcedBody);
      const message = parcedBody.split("=")[1];

      fs.writeFile("message.txt", message, (err) => {
        console.log(err);
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};
// 2ways of exporting 
// first way is 
module.exports = requestHandle

// second way is u can directly export that part of the function and also export in the form of object
// or u can export like this also 
// exports.someText = "some hard coded text";