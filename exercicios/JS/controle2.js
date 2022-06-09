console.log("Oi")

//CONTROLE SOBRE INPUT TYPE NUMBER

let inputNumber=document.querySelector("#qtd_telas")
let resultadoTelas=document.querySelector("#resultado_telas")
let btCalcular=document.querySelector("#bt_calcular")

function calcular(){
    let result=(inputNumber.value * 9.90).toFixed(2)
    result = result.replace('.','.')
    console.log(result)

resultadoTelas.innerHTML='R$ ' + result
}

function calcularPorcentagem(){
    let pct = (inputNumber.value * 9.90) * 0.07
    resultadoTelas.innerHTML=(inputNumber.value*9.90 + pct ).toFixed(2)
}
//keyup é uma funcionalidade para realizar algo logo após digitar 
//altera o valor ao clicar na seta, clacular ou digitar o valor
inputNumber.addEventListener('change',calcular)
inputNumber.addEventListener('keyup',calcular)
btCalcular.addEventListener('click',calcularPorcentagem)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//CONTROLE SOBRE SELECT

let categorias=document.querySelector("#categorias")
let resultadoCategorias=document.querySelector("#resultado_categorias")
let boxInfo=document.querySelector("#box_info")

//img=elemento imagem
//exibeInfo insere a imagem conforme a escolha do select
function exibeInfo(foto){
    let img = new Image()
    img.src=foto
    img.width='150'
    //impede que a imagem seja replicada
    boxInfo.children.length > 0 ? boxInfo.removeChild(boxInfo.firstChild) : null
    // document.querySelector("#box_info").innerHTML=''
    boxInfo.appendChild(img)
    // console.log(boxInfo.firstChild.constructor)
}

//exibirCategoria é tomada de decisão relativa a escolha do select
function exibirCategoria(){
    resultadoCategorias.innerHTML=categorias.value
    switch(categorias.selectedIndex){
        case 1 : 
        exibeInfo('imagens/quem-somos-nos.jpg')
        break
        case 2 : 
        exibeInfo('imagens/mick.jpg')
        break
        case 3 : 
        exibeInfo('imagens/pequeno-principe.jpg')
        break
    }
}

categorias.addEventListener('change',exibirCategoria)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//OBJETOS JAVASCRIPT (propriedades=variaveis,metodos=funções)

//Exemplo 1

let movel={
    nome:"sofá",
    lugares:3
}
console.log(movel.nome)//sofá
console.log(movel.constructor)//object

//Exemplo 2

function animal (especie,porte,nome){
    return{
        _especie:especie,
        _porte:porte,
        _nome:nome
    }
}

let mike=animal("York Shire","Pequeno","Mike")
console.log("Meu pet se chama " + mike._nome)
console.log(mike.constructor)

//Exemplo 3
//modelo familiar para outros programadores por sua linguagem se parecer com outras

function produto(nome,tipo){
    this._nome=nome
    this._tipo=tipo
}
function MaquinaCafe(cor,voltagem){
    this._cor=cor
    this._voltagem=voltagem
}
//instancia
let produto_1=new produto("Geladeira","Eletrodomestico")
let maquinaCafe_1=new MaquinaCafe ('vermelha','220')
console.log(produto_1 instanceof MaquinaCafe)
console.log(produto_1 instanceof produto)
console.log(produto_1._nome)
console.log(produto_1.constructor)

//Classes em JavaScript

class Pessoa {
    constructor(nome,idade){
        this._nome=nome
        this._idade=idade
    }
}

let funcionario_1=new Pessoa ("Asher",25)
console.log("Olá " + funcionario_1._nome)

class carro{
    //executa imediatamente ao utilizar a classe
    constructor(modelo,ano){
        this._modelo=modelo
        this._ano=ano
    }
    //método precisa ser invocado
    acessorios(){
        let bancoDeCouro = true
        return bancoDeCouro
    }
    km(x){
        return x
    }
}

let carro_1=new carro("BMW",2015)
console.log(carro_1._modelo,carro_1.acessorios())
carro_1.acessorios() ? console.log("Tem banco de couro") : null
let km = carro_1.km(80000)
console.log("Este " + carro_1._modelo + " tem " + km + " rodados.")

//Exemplo3 - extends

class Mercadoria{
    constructor(tipo,modelo){
        this._tipo=tipo
        this._modelo=modelo
    }
    info(){
        return 'Eu vendo ' + this._tipo + ', modelo ' + this._modelo
    }
}

class Fabricante extends Mercadoria{
    constructor(nome,tipo,modelo,local){
        super(tipo,modelo)
        this._nome=nome
        this._local=local
    }
    apresentacao(){
        return 'Eu sou a empresa ' + this._nome + ', ' + this.info() + '. Estou na região ' + this._local
    }
}

let empresa=new Fabricante('Apple','Iphone','Iphone 8 Plus','Vale do Silício')
console.log(empresa.apresentacao())