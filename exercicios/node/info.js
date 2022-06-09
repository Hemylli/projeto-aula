const fs = require('fs') 
//file system (fs) tem a capacidade de interagir com arquivos do sistema

fs.readFile('info.txt','utf-8',(err,data) => {
    if(err){
        console.log(err)
        return
    }
    console.log(data)
})