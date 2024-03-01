const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url,req.headers,req.method);

  const url = req.url;
  if(url === '/'){
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>');
    res.write(`<body><form action='/message' method='POST'><input type="text" name='message'><button type='submit'>send</button></form></body>`)
    res.write('<html>')
    return res.end();
  }
  if(url==='/home'){
    res.write(`<h1>Welcome Home</h1>`)
    return res.end()
  }
  if(url==='/about'){
    res.write(`<h1>About us </h1>`)
    return res.end()
  }
  if(url==='/node'){
    res.write(`<h1>Welcome to Nodejs </h1>`)
    return res.end()
  }
  

  // setHeader allow us to set a new headers's for ex content
  // res.setHeader('Content-Type','text/html'); //type of the content is html
  // res.write('<html>') //write allow us to write some data to the response it basically works in chunks or multiple line
  // res.write(`<body><h1>Hello from node.js</h1></body>`)
  // res.write('</html')
  // res.end(); //don't write after this 

});


server.listen(3000);
