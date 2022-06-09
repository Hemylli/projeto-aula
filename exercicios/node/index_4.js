const http = require('http')
//abaixo -> método que propicia pesquisa
const fs = require('fs')

//cria o objeto server
http.createServer(function(req,res){
    fs.readFile('template_1.html',function(err,data){

    if(err) throw err
    //escreve um cabeçalho e trata os caracteres especiais
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.write(data)
    return res.end()
    })

}).listen(8080)//habilita a porta 8080 
