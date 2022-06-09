const http = require('http')

//cria o objeto server
http.createServer(function(req,res){
    res.write('Hello World Node JS')
    res.end()//finaliza a resposta
}).listen(8080)//habilita a porta 8080 (http://localhost:8080)

//caminhos locais não serão mais utilizados