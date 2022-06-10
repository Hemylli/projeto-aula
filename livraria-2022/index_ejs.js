(async () => {
const express = require('express')
const app = express()
const db = require("./db.js")
const port = 3000
const url = require("url")
const bodyParser = require("body-parser")

app.set("view engine","ejs")

//config para as variáveis POST
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

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

app.get("/contato",async(req,res)=>{
    let infoUrl = req.url
    let urlProp = url.parse(infoUrl,true)// /?id=5
    let q = urlProp.query
    const consultaSingle = await db.selectSingle(q.id)
    const consultaInit = await db.selectSingle(4)

    res.render(`contato`,
        {titulo:"Conheça nossos livros",
        promo:"Todos os livros com 10% de desconto!",
        livro:consulta,
        galeria:consultaInit        
    })
})

app.post("/contato",async(req,res)=>{    
    const info = req.body    
    await db.insertContato({        
       nome:info.cad_nome,
       sobrenome:info.cad_sobrenome,
       email:info.cad_email,
       mensagem:info.cad_mensagem,
    })
    res.redirect("/promocoes")
})

//==========TESTE PESSOAL==========
// app.get("/insere-contato",async(req,res)=>{
//     await db.insertContato({
//         nome:"Justin",
//         sobrenome:"Bieber",
//         email:"bieberfever@drew.com",
//         mensagem:"Olá! Tenho uma prosposta para inserir meus filmes no site de vocês."})
//     res.send("<alert>Sua mensagem foi encaminhada. Em breve entraremos em contato!</alert><a href='./'>Voltar</a>")
// })


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

app.post("/cadastro",async(req,res)=>{    
    const info = req.body    
    await db.insertUsuario({
        nome:info.nome_cadastro,
        email:info.email_cadastro,
        telefone:info.telefone_cadastro,
        senha:info.senha_cadastro,
        conf_senha:info.conf_senha_cadastro
    })
    //res.renderalert("Cadastro realizado com sucesso!")
    res.redirect("/promocoes")
})

app.get("/carrinho",(req,res)=>{
    res.render(`carrinho`,
        {titulo:"Conheça nossos livros",
        promo:"Todos os livros com 10% de desconto!",
    })
})

app.listen(port,()=> console.log("Servidor rodando com nodemon!"))

})
()