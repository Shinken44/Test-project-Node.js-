const http = require('http');
const port = 50300;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello! This is my fisrt http-server');
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log('server is listening on ${port}');
})