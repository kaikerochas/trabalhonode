var http = require('http');
var n = require('./primeiroModulo');
var dia = require('./moduloData'); 

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<b>Aula de Node.js</b> </br>');
    res.write('<i>Aluno: </i> ');
    res.write(n.nome()+'<br>');

    res.write(dia.diaDaSemana()+'<br>');
    res.end('Bom dia');

}).listen(80);