var http = require('http');
let delay = 5000;
let port = 1337;

http.createServer(function (req, res) {
    setTimeout(() => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hi there\n');
    }, delay);
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:'+port+'/');
