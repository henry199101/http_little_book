var http = require("http");
function onRequest(request, response) {
response.end("hello world\n")
}
http.createServer(onRequest).listen(8181);