(async () => {
const express = require('express')
const app = express()
const db = require("./db.js")
const port = 3000
const url = require("url")

app.set("view engine","ejs")

app.use(express.static('livraria-2022'))
app.use("/books",express.static("books"))
app.use("/imgs",express.static("imgs"))
app.use("/css",express.static("css"))
app.use("/js",express.static("js"))

const consulta = await db.selectFilmes()
const consultaLivro = await db.selectLivros()

//console.log(consulta[0])
//console.log(consultaLivro[0])

app.get("/",(req,res)=>{
    res.render(`index`,
        {titulo:"Conheça nossos livros",
        promo:"Todos os livros com 10% de desconto!",
        livro:consulta,
        galeria:consultaLivro
    })
})

app.get("/upd-promo",(req,res)=>{
    res.render(`ADM/atualiza-promocoes`,
        {titulo:"Conheça nossos livros",
        promo:"Todos os livros com 10% de desconto!",
        livro:consulta,
        galeria:consultaLivro
    })
})

app.get("/insere-livro",async(req,res)=>{
    await db.insertLivro({
        titulo:"Anna Karenina",
        resumo:"Lorem Lorem",
        valor:20.45,
        imagem:"anna.jpg"})
    res.send("<h2>Livro adicionado!</h2><a href='./'>Voltar</a>")
})

app.get("/atualiza-promo",async(req,res)=>{
    let qs = url.parse(req.url,true).query
    await db.updatePromo(qs.promo,qs.id)
    res.send("<h2>Lista de Promoções atualizada!</h2><a href='/promocoes'>Voltar</a>")
})

app.get("/promocoes",async(req,res)=>{
    const consultaPromo = await db.selectPromo()
    res.render(`promocoes`,{
        titulo:"Conheça nossos livros",
        promo:"Todos os livros com 10% de desconto!",
        livro:consulta,
        galeria:consultaPromo
    })
})

app.get("/single-produto",async(req,res)=>{
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true)// /?id=5
    let q = urlProp.query
    const consultaSingle = await db.selectSingle(q.id)
    const consultaInit = await db.selectSingle(4)

    res.render(`single-produto`,
        {titulo:"Conheça nossos livros",
        promo:"Todos os livros com 10% de desconto!",
        livro:consulta,
        galeria:consultaSingle        
    })
})

app.get("/cadastro",async(req,res)=>{
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true)// /?id=5
    let q = urlProp.query
    const consultaSingle = await db.selectSingle(q.id)
    const consultaInit = await db.selectSingle(4)

    res.render(`cadastro`,
        {titulo:"Conheça nossos livros",
        promo:"Todos os livros com 10% de desconto!",
        livro:consulta,
        galeria:consultaInit        
    })
})

app.get("/carrinho",(req,res)=>{
    res.render(`carrinho`)
})

app.listen(port,()=> console.log("Servidor rodando com nodemon!"))

})
()