const fs = require('fs')

fs.unlink('leiame.txt',function(err){
    if(err) throw err
    console.log('arquivo excluído com sucesso!')
})