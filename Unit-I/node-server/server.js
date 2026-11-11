
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("G19 - Node.js Server is Running Successfully!");
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
