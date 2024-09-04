const http = require("http");
const eventEmitter = require("node:events");
const url = require("node:url");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write(req.url);
	const urlObject = url.parse(req.url, true);
	const dateParam = urlObject.query.date;
	if (dateParam) {
		const date = new Date(dateParam);
		res.write(`Date parameter ${date.toISOString()}\n`);
	} else {
		res.write("No date parameter provided\n");
	}
	res.end("Hello world");
});
server.listen(8080);

const startEvent = new eventEmitter();
startEvent.on("start", () => {
	console.log("Server has been started");
});
startEvent.emit("start");