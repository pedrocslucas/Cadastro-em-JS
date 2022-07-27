function limpar(){
    var nome = document.getElementsByName('nome').value
    var email = document.getElementsByName('email').value
    var senha = document.getElementsByName('senha').value
    var confSenha = document.getElementsByName('confSenha').value

    nome = "";
    email = "";
    senha = "";
    confSenha = "";
    console.log('Dados Limpados!')
}

function validar(){
    var nome = document.getElementsByName('nome').value
    var email = document.getElementsByName('email').value
    var senha = document.getElementsByName('senha').value
    var confSenha = document.getElementsByName('confSenha').value

    var resp = document.getElementsById('resp')
    resp.innerHTML = `Olá ${nome}, email: ${email} e senha ${senha}`
}