var http = require('http');
http.createServer( function(req, res) {
	res.writeHead(200);
	res.write("This is test Web");
	res.end();
}).listen(3000);
console.log('http://localhost:3000/');