const http = require("http");
const eventEmitter = require("node:events");

const startEvent = new eventEmitter();
startEvent.on("start", () => {
	console.log("Server has been started");
});
startEvent.emit("start");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end("Hello world");
});
server.listen(8080);

