var http = require('http');
http.createServer( function(req, res) {
  res.writeHead(200);
  res.write("git test04");
  res.end();
 }).listen(3001);
 console.log('http://localhost:3001/');
