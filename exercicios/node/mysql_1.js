const mysql = require('mysql')

//con ou conn significam connection
const conn = mysql.createConnection(
    {
        host:'localhost',
        user:'hemylli',
        password:'Tec#381*',
        database:'Pessoas',

    }
)

conn.connect(function(err){
    console.log("Mysql Conectado!")
    let sql = 'CREATE DATABASE IF NOT EXISTS Pessoas'
    conn.query(sql,function(err,result){
    if(err) throw err
    console.log(`Query : ${sql}`)
    //console.log(`Query : ${result} `)
    //console.log(`Query : Database Criada `)
    })

    let sqlTable = 'CREATE TABLE IF NOT EXISTS funcionarios (nome varchar(255), endereco varchar(255))'
    conn.query(sqlTable,function(err,result){
    if(err) throw err
    console.log(`Query : ${sqlTable} `)
    })

    let sqlInsert1 = "INSERT INTO funcionarios (nome,endereco) VALUES ('Fabiano','Av. Cesário de Melo, 3600')"
    let sqlInsert2 = "INSERT INTO funcionarios (nome,endereco) VALUES ?"
    let values=[
        ['Mauro', 'Av Paulista, 892'],
        ['Pedro', 'Rua Funchal, 14 ap 02'],
        ['Ana', 'Rua Cotovia, 142'],
        ['Wilson', 'Estrada do Oratório, km 03'],
        ['Mariana', 'Av Central, 102 15'],
        ['Samanta', 'Rua Oliver, 130'],
        ['Bete', 'Av Bom Pastor, 90'],
        ['Ricardo', 'Rua Green, 39'],
        ['Sivia', 'Rua Salto, 132'],
        ['Vitoria', 'Alameda Campinas, 32'],
        ['Bernardo', 'Pça da Arvore, 123'],
        ['Joice', 'Elevado da Paz, 1230'],
        ['Tenório', 'Travessa do Remo, 49'],
        ['Irineu', 'Rua do Carmo, 2330']
    ]

    conn.query(sqlInsert2,[values],function(err,result){
    if(err) throw err
    console.log(`Query : ${sqlInsert2} `)
    })

    let sqlSelect='SELECT * FROM funcionarios'
    conn.query(sqlSelect,function(err,result,fields){
        if(err) throw err
        console.log(result)
        })
})
