async function conecta(){
    const mysql = require("mysql2/promise")
    const conn = await mysql.createConnection({
        host:"localhost",
        user:"hemylli",
        password:"Tec#381*",
        database:"filmes"
    })
    console.log("mySQL conectado!")
    global.connection = conn
    return connection
}

//conecta()

async function selectFilmes(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT f.titulo,f.genero,d.nome FROM videos as f INNER JOIN diretor as d ON f.diretor = d.diretor_id;")
    //console.log(rows)
    return rows
}

async function selectLivros(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM livros ORDER BY livros_id ASC")    
    return rows
}

async function selectSingle(id){
    const conectado = await conecta()
    const values = [id]
    const [rows] = await conectado.query("SELECT * FROM livros WHERE livros_id=?",values)    
    return rows
}

async function selectCarrinho(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM carrinho ORDER BY carrinho_id DESC")    
    return rows
}

async function selectPromo(){
    const conectado = await conecta()
    const [rows] = await conectado.query("SELECT * FROM livros WHERE promo=1")
    return rows
}

async function selectUsers(email,senha){
    const conectado = await conecta()
    const values = [email,senha]
    const [rows] = await conectado.query("SELECT * FROM usuarios WHERE email=? AND senha=?",values)
    return rows
}

async function updatePromo(promo,id){
    const conectado = await conecta();
    const values = [promo,id]
    return await conectado.query("UPDATE livros SET promo=? WHERE livros_id=?",values)
}

//updatePromo()

async function insertLivro(livro){
    const conectado = await conecta()
    const values = [livro.titulo,livro.resumo,livro.valor,livro.imagem]
    const [rows] = await conectado.query("INSERT INTO livros(titulo,resumo,valor,imagem) VALUES (?,?,?,?)",values)
    console.log("Insert ok!")
    return rows
}

async function insertContato(contato){
    const conectado = await conecta()
    const values = [contato.nome,contato.sobrenome,contato.email,contato.mensagem]
    const [rows] = await conectado.query("INSERT INTO contato(nome,sobrenome,email,mensagem) VALUES (?,?,?,?)",values)
    console.log("Insert ok!")
    return rows
}

async function insertUsuario(usuario){
    const conectado = await conecta()
    const values = [usuario.nome,usuario.email,usuario.telefone,usuario.senha,usuario.conf_senha]
    const [rows] = await conectado.query("INSERT INTO usuarios(nome,email,telefone,senha,conf_senha) VALUES (?,?,?,?,?)",values)
    console.log("InsertUsuario ok!")
    return rows
}

async function insertCarrinho(carrinho){
    const conectado = await conecta()
    const values = [carrinho.produto,carrinho.qtd,carrinho.valor,carrinho.livros_id]
    const [rows] = await conectado.query("INSERT INTO carrinho(produto,qtd,valor,livros_id) VALUES (?,?,?,?)",values)
    console.log("Insert ok!")
    return rows
}

async function deleteCarrinho(id){
    const conectado = await conecta();
    const values = [id]
    return await conectado.query("DELETE FROM carrinho WHERE carrinho_id=?",values)
}

//selectFilmes()
//selectLivros()
//selectSingle(10)
//insertLivro({titulo:"wild Fury",resumo:"Lorem Lorem",valor:40.35,imagem:"wild-fury.jpg"})
//insertContato({nome:"Ana",sobrenome:"Banana",email:"aninha@gmail.com",mensagem:"Aluguei um filme mas estou tendo problemas para conseguir assistir."})
//insertUsuario({nome:"Joelma Calypso",email:"jojoca@gmail.com",telefone:"11 35348789",senha:"eu123",conf_senha:"eu123"})


module.exports = {
    selectFilmes,
    selectLivros,
    selectSingle,
    selectCarrinho,
    selectPromo,
    selectUsers,
    updatePromo,
    insertLivro,
    insertContato,
    insertUsuario,
    insertCarrinho,
    deleteCarrinho,
}