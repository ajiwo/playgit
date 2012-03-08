var app
,   http = require('http')
,   host = '127.0.0.1'
,   port = 2000;

app = http.createServer(function (req, res) {
    var remip = req.connection.remoteAddress
    ,   remport = req.connection.remotePort;

    console.log('Request from '+remip+':'+remport);
    console.log('  ua: '+req.headers['user-agent']);
    console.log('  url: '+req.url);
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World\n');
});
app.listen(port, host, function(/* args ?*/)  {
    console.log('Server running at http://'+host+':'+port+'/');
});
