var http = require('http');
http.createServer( function(req, res) {
	res.writeHead(200);
	res.write("Git test");
	res.end();
}).listen(3000);
console.log('http://localhost:3000/');