const mysql = require('mysql')

//con ou conn significam connection
const conn = mysql.createConnection(
    {
        host:'localhost',
        user:'hemylli',
        password:'Tec#381*',        
    }
)

conn.connect(function(err){
    console.log("Mysql Conectado!")

    let sql = 'CREATE DATABASE IF NOT EXISTS Pessoas'
    conn.query(sql,function(err,result){
    if(err) throw err
    //console.log(`Query : ${sql}`)
    //console.log(`Query : ${result} `)
    console.log(`Query : Database Criada `)
    })
})