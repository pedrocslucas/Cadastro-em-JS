//Variáveis Globais
var nome = document.getElementById('nome')
var email = document.getElementById('email')
var senha = document.getElementById('senha')
var confSenha = document.getElementById('confSenha')

//Funções Auxiliares

//Funções Principais
function limpar(){
    nome.value = "";
    email.value = "";
    senha.value = "";
    confSenha.value = "";
    alert('Dados Limpados!')
}

function validar(){
    var name = nome.value
    var mail = email.value
    var psw = senha.value
    var autPsw = confSenha.value

    if(name.lenght == 0 && mail.lenght == 0 && psw == 0 && autPsw == 0){
        alert('Todos os dados devem ser preenchidos!')
    }else if(name.lenght == 0){
        alert('Preencha o seu nome!')
    }else if(mail.lenght == 0){
        alert('Preencha o seu email!')
    }else if(psw.lenght == 0){
        alert('Preencha o campo de senha!')
    }else if(autPsw.lenght == 0){
        alert('Por favor! Confirme sua senha')
    }else{
        confirm('Tudo certo!')

    }
}