const http = require("http");

// custom files
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000);
