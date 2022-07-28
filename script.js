//Variáveis Globais
const form = document.getElementById('form')
const nome = document.getElementById('name')
const email = document.getElementById('mail')
const senha = document.getElementById('psw')
const confSenha = document.getElementById('autPsw')

//Funções Principais
form.addEventListener('submit', (e) => {
    e.preventDefault()//Previnir o comportamento padrão dos browsers para formulário

    checkInputs()
})

function checkInputs(){
    const nameValue = nome.value.trim()//Função 'trim' é utilizada para remover os espaços no início e fim de uma string
    const mailValue = email.value.trim()
    const pswValue = senha.value.trim()
    const autPswValue = confSenha.value.trim()

    if(nameValue === '') {
        //Adicionar classe de Erro
        errorValidation(nome, 'Preencha esse campo')
    } else {
        //Adicionar classe de Sucesso
        successValidation(nome)
    }

    if(mailValue === '') {
        errorValidation(email, 'Preencha esse campo')
    } else {
        successValidation(email)
    }

    if(pswValue === ''){
        errorValidation(senha, 'Preencha sua senha')
    } else if(pswValue.length < 8){
        errorValidation(senha, 'A senha deverá conter mais de 8 caracteres')
    } else {
        successValidation(senha)
    }

    if(autPswValue === '') {
        errorValidation(confSenha, 'Preencha sua senha')
    } else if(pswValue !== autPswValue){
        errorValidation(confSenha, 'As senhas devem ser iguais')
    } else {
        successValidation(confSenha)
    }
}

//Funções Auxiliares
function errorValidation(input, message){
    const formControl = input.parentElement;//Retornando o elemento pai do input
    const small = formControl.querySelector('small')
    
    small.innerText = message
    formControl.className = 'form-control error'
}

function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}