//Módulos
const http = require('http')
const url = require('url')
const fs = require('fs')

//cria o módulo
http.createServer(function(req,res){
    
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true)
    let rota = urlProp.pathname
    
    //leitura dos arquivos
    fs.readFile(`.${rota}`,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
            return res.end('<h2>Ops! Não encontramos o que você procura...</h2>')
        }
    
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'}) //escrevendo cabeçalho para o status 200
    res.write(data)
    return res.end()
    })
}).listen(8080)
