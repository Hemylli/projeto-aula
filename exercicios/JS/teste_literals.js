console.log("Olá")

let  nome="Richard"
let mensagem = "Olá, eu sou " + nome
console.log(mensagem)

//utilizando o cifrão e crase é possível concatenar elementos sem utilizar
//o sinal de mais (+)

//exemplo 1
let mensagem2 = `Olá ${nome}`

//exemplo2
let a = 10
let b = 15
let calculo = `o valor total é ${a+b}`
console.log(calculo)

//exemplo3
function info (){
    return 'Hoje é segunda-feira'
}
let infoSemana= `Salve! ${info()}. Bora codar!`
console.log(infoSemana)

//exemplo4
let tempo=new Date()
let diaDaSemana=['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
let mesDoAno=['Jan','Fev','Mar','Abri','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
function infoParam (dia){
    return `Hoje é ${dia}`
}
let infoSemanaParam = `Salve! ${infoParam('Segunda-feira')}`
console.log(infoSemanaParam)
console.log(diaDaSemana[tempo.getDay()])


let saudacao=`${diaDaSemana[tempo.getDay()]}, ${tempo.getDate()} de ${mesDoAno[tempo.getMonth()]} de ${tempo.getFullYear()}`
document.querySelector("#p1").innerHTML=saudacao

console.log(Date)

//Formato Data ex2
function relogio (){
    let tempo_1=new Date()
    let hora=tempo_1.getHours()
    let minutos=tempo_1.getMinutes()
    let segundos=tempo_1.getSeconds()
    //adiciona zero antes do digito se menor que 10
    hora <10 ? hora=`0${hora}`:null
    minutos <10 ? minutos=`0${minutos}`:null
    segundos <10 ? segundos=`0${segundos}`:null
    // console.log(hora,minutos,segundos)
    //console.log(hora,minutos,segundos)
    document.querySelector("#p2").innerHTML=`${hora}:${minutos}:${segundos}`
}
relogio()
let tempo_intervalo=setInterval(
    function(){
        relogio()
    },1000)

//Exemplo 5
let pessoa={
    nome:"Tom Hanks"
}
let msgPessoa=`${pessoa.nome.toUpperCase()}, ator de cinema`
console.log(msgPessoa)

//Arrow funtions

let treinamento = function (){
    return "Javascript Back End!"
}

let treinamento_1 = () => {
    return "Node Js!"
}

console.log(treinamento())
let calculo_1 = (a,b) => a/b * 100
console.log(calculo_1(10,5))


//SOBRE O THIS (quando arrow function, não reconhece o elemnto do clique de imediato)
let viagem = (el) => {
document.querySelector("#p3").innerHTML+= `Vou para o México, este evento foi disparado por: ${el}<br />`
}

   //maneira antiga/tradicional (repasse automático)
   let viagem_0 = function(){
       document.querySelector("#p3").innerHTML+= `Vou para o México, este evento foi disparado por: ${this} <br />`
   }

window.addEventListener("load",viagem(this))
document.querySelector("#bt_teste").addEventListener("click",viagem_0)
document.querySelector("#bt_teste").onclick = function(){ viagem(this.id) }
