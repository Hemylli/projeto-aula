console.log("TESTE")

let lista = {
    nome:"Lista de tarefas",
    imprimeTítulo:function(el,titulo){
        el.innerHTML=titulo
    },
    estiloLista:function(el,corDaBorda){
        el.style.borderWidth='1px'
        el.style.borderStyle='solid'
        el.style.borderColor=corDaBorda
    },
    gravarLista:function(el,key){
        localStorage.setItem(key,el.innerHTML)
    },
    imprimeLista:function(el,lista){
        el.innerHTML=lista
    }
}
//imprime a lista 'l1' >>>caso exista<<< (ao carrear a página)
if(localStorage.lista_l1){
    lista.imprimeLista(document.querySelector('#tarefas_l1'),localStorage.getItem('lista_l1'))
}

console.log(lista.nome)
//imprime o nome da lista em tela
lista.imprimeTítulo(document.querySelector('#lista1 h2'),"Lista de Compras")
lista.imprimeTítulo(document.querySelector('#lista2 h2'),"Lista de Viagem")
//altera a cor da borda da lista
lista.estiloLista(document.querySelector('#tarefas_l1'),'green')
lista.estiloLista(document.querySelector('#tarefas_l2'),'blue')
//grava em localStorage
document.querySelector('#bt_l1').onclick=function(){
    lista.gravarLista(document.querySelector('#tarefas_l1'),'lista_l1')
}
document.querySelector('#bt_l2').onclick=function(){
    lista.gravarLista(document.querySelector('#tarefas_l2'),'lista_l2')
}