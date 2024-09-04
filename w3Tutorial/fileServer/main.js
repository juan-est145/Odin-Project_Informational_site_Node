const http = require("node:http");
const fs = require("node:fs");
const url = require("node:url");

const server = http.createServer((req, res) => {
	let urlParam = url.parse(req.url, true);
	if (urlParam.pathname === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		return res.end("You are in the main page");
	}
	fs.readFile(`.${urlParam.pathname}.html`, (err, data) => {
		if (err) {
			res.writeHead(404, { "Content-Type": "text/html" });
			return res.end("404 Not Found");
		}
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

server.listen(8080);