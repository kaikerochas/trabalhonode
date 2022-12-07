var http = require('http');
var url = require('url');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req, url);
    var q = url.parse(req.url, true).query;
    var txt = "ano: " +q.ano+"mes: "+q.mes+"dia: "+q.dia;
    res.end(txt);
}).listen(80);
