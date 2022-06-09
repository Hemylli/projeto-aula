//atribuindo o acesso ao formContato para a variavel formC
var formL=document.forms.formLogin
//Evento de clique no botão confirmar
document.querySelector("#btLogin").onclick=function(){
    //alert('ok')
    if(formL.email.value == ""){
        alert("Preencha o email!")
    }else if(formL.senha.value == ""){
        alert("Preencha a senha!")
    }else{
        formL.submit()
        localStorage.emailUser=formL.email.value
    }
}