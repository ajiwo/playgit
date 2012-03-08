var app
,   http = require('http')
,   host = '127.0.0.1'
,   port = 2000;

app = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port);
console.log('Server running at http://'+host+':'+port+'/');

