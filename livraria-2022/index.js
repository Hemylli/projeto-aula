const express = require('express')
const app = express()
const port = 8080

//renderizar imagens
app.use(express.static('livraria-2022'))
app.use("/books",express.static("books"))

//renderizar logotipo
app.use(express.static('livraria-2022'))
app.use("/imgs",express.static("imgs"))

//renderizar através da porta 8080
app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/index-estatico.html`)
})

app.listen(port,()=> console.log("Servidor rodando!"))