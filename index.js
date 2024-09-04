const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");

const page404 = fs.readFileSync("./404.html", "utf-8", (err, data) => {
	if (err) throw err;
	return data;
});


const server = http.createServer((req, res) => {
	const pathName = url.parse(req.url, true).pathname;
	let htmlPath = pathName === "/" ? "./index.html" : `.${pathName}.html`;

	fs.readFile(htmlPath, (error, data) => {
		if (error) {
			res.writeHead(404, { "Content-Type": "text/html" });
			res.write(page404);
			return res.end();
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return (res.end());
		}
	})
});

server.listen(8080);