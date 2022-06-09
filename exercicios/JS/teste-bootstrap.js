console.log('Teste JS')

//palavras reservadas para declaração de variáveis
//var, let, const

let nomes=new Array("Francis","Fred","Albany")
let cores=["amarelo","branco","azul"]
//0=nome,1=cargo,2=idade,3=tempo de casa
let cargos=[
    ["Francis","Diretor",45,4],
    ["Fred","Scrum",25,2],
    ["Albany","PO",22,1]
]

for(x=0;x<cargos.length;x++){
    console.log(cargos[x][1])
}

let media= parseInt((cargos[0][2] + cargos[1][2] + cargos[2][2])/3)
document.querySelector("#media").innerHTML="A média das idades é " +media+ " anos."

var p=document.createElement('p')
p.innerHTML=cargos[0][0]+ ", " + cargos[0][1] + ", " +cargos[0][2]+" anos"
document.querySelector("#cargos").appendChild(p)

console.log(media)
console.log(nomes[2])//Albany
console.log(cores[0])//amarelo
console.log(cargos[0][0],cargos[0][1],cargos[0][2]+" anos")

//++++++++++++++++++++++++++++=
//JSON

let pessoa='{"nome":"Fred","cargo":"Scrum","esportes":["natação","boxe"],"idades":[12,34,18,45]}'

let pessoaJSON=JSON.parse(pessoa)
console.log(pessoaJSON.nome,pessoaJSON.esportes[0])


let total='230'
console.log("v1 " + total)
let totalFinal=parseInt(total)
console.log(typeof(totalFinal))//number

total=400
console.log("v2 " + total)
//LocalStorage

//Ex 1 - Gravação
localStorage.aula="Javascript"
//Ex 2 - Gravação
localStorage.setItem("Projeto","ImpulsoTec")

//Ex1 - Recuperar (leitura) LocalStorage
console.log(localStorage.Projeto)
//Ex2 -  Recuperar (leitura) LocalStorage
console.log(localStorage.getItem("Projeto"))

localStorage.aula='Banco de dados'
//localStorage.removeItem("aula")