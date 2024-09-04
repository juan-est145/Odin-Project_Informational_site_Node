const http = require("http");
const eventEmitter = require("node:events");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write(req.url);
	res.write("\n");
	res.end("Hello world");
});
server.listen(8080);

const startEvent = new eventEmitter();
startEvent.on("start", () => {
	console.log("Server has been started");
});
startEvent.emit("start");

