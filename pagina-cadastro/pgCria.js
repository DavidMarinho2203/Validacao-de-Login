// Selecionando os campos específicos dos inputs do HTML 
const emailInput = document.querySelector('#email')
const passwordInputUm = document.querySelector('#passwordUm')
const passwordInputDois = document.querySelector('#passwordDois')
const Submit_login = document.querySelector('#submit-login')

// Selecionando o campo que tem a classe 'form__msg' no HTML 
const menssagemError = document.querySelector('.form__msg')

// Criando um evento, para que quando o elemento for clicado, ele fará um evento 
Submit_login.addEventListener('click', (e) => {
    // Impedindo o recarregamento da página quando o evento for chamado 
    e.preventDefault()

    const valueEmail = emailInput.value,
        valuePasswordUm = passwordInputUm.value,
        valuePasswordDois = passwordInputDois.value

    // Verificando se os items estão vazios 
    if (valueEmail == '' || valuePasswordUm == '' || valuePasswordDois == '') {
        // Exibir um erro que vai durar 3s 
        menssagemError.textContent = 'Por favor, preencha todos os campos!'
        menssagemError.classList.add('error')
        emailInput.style.borderColor = 'red'
        passwordInputUm.style.borderColor = 'red'
        passwordInputDois.style.borderColor = 'red'

        setTimeout(() => {
            menssagemError.textContent = ''
            menssagemError.classList.remove('error')
            emailInput.style.borderColor = ''
            passwordInputUm.style.borderColor = ''
            passwordInputDois.style.borderColor = ''
        }, 2500)

        return;
    }

    // Obtendo a string JSON que está na chave 'users' no sessionStorage
    let usersString = window.sessionStorage.getItem('users');
    // criando o array

    let emailProcurado = valueEmail,
        senhaNova = valuePasswordUm,
        confirmacaoSenha = valuePasswordDois

    let users = JSON.parse(usersString) === null ? [] : JSON.parse(usersString)

    // Verificador se as senhas estão iguais
    if (senhaNova != confirmacaoSenha) {
        // Exibir um erro que vai durar 3s 
        menssagemError.classList.add('error');
        menssagemError.textContent = 'As senhas estão diferentes!';

        setTimeout(() => {
            menssagemError.classList.remove('error');
            menssagemError.textContent = '';
            emailInput.value = ''
            passwordInputUm.value = ''
            passwordInputDois.value = ''

        }, 3000);

    }

    // Verificar se o email já existe ou se existe algo na chave do sessionStorage.
    else if (users.some(element => element.email == emailProcurado)) {
        // Exibir um erro que vai durar 3s 
        menssagemError.textContent = 'Email já cadastrado!'
        menssagemError.style.color = '#121113'

        setTimeout(() => {
            window.location.href = '../index.html'
            menssagemError.style.color = ''
            menssagemError.textContent = ''
        }, 1000)

        emailInput.value = ''
        passwordInputUm.value = ''
        passwordInputDois.value = ''



    }

    // Estou criando o email.
    else {
        let newUser = {
            email: emailProcurado,
            senha: senhaNova
        }

        // Adiciono o objeto do array de objetos 
        users.push(newUser)
        // Tranformar o array em uma string para utiliar no JSON 
        usersString = JSON.stringify(users)
        // Mandar os valores com chave para o sessionStorage 
        window.sessionStorage.setItem('users', usersString);

        console.log(sessionStorage.getItem('users'))
        emailInput.value = ''
        passwordInputUm.value = ''
        passwordInputDois.value = ''

        menssagemError.textContent = 'Email cadastrado!'
        menssagemError.style.color = '#121113'

        setTimeout(() => {
            window.location.href = '../index.html'
            menssagemError.style.color = ''
            menssagemError.textContent = ''
        }, 1000)

    }

})
