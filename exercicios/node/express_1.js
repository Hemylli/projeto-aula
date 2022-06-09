//index (Quando criar o html diretamente)
const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

//Gera url estática das imagens
app.use(express.static('node'))
app.use("/imagens",express.static("imagens"))

//index (Quando criar o html diretamente no res.end() insira o writeHead)
app.get("/",(req,res)=>{
    //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    //res.end('<h1>Página Home</h1>')
    res.sendFile(`${__dirname}/template_1.html`)
})

//contato
app.get("/contato",(req,res)=>{
    res.sendFile(`${__dirname}/template_1_contato.html`)
})

//sobre
app.get("/sobre",(req,res)=>{
    res.sendFile(`${__dirname}/template_1_sobre.html`)
})

app.listen(port,() => console.log(`Servidor rodando na porta ${port} - ${__dirname}`))