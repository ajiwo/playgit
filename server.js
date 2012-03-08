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

if(port) {
    app.listen(port, host, function(/* args ?*/)  {
        host = host || '0.0.0.0';
        console.log('Server running at http://'+host+':'+port+'/');
    });
}
else {
    // also dont pass host argument, 
    // it will be assumed as UNIX socket path
    // and a socket file will be created
    app.listen(function(/* args ?*/)  {
        host = app.address().address;
        port = app.address().port;
        console.log('Server running at http://'+host+':'+port+'/');
    });
}
