const fs = require('fs')

fs.appendFile('leiame.txt',' Testando funcionalidades!',function(err){
    if(err) throw err
    console.log('Arquivo atualizado!')
})