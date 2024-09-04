const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
	fs.readFile("index.html", (err, data) => {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(data);
		return (res.end());
	});
});
server.listen(8080);