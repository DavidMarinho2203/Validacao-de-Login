/* Selecionando os campos específicos dos inputs do HTML */
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const Submit_login = document.querySelector('#submit-login')


/* Selecionando o campo que tem a classe 'form__msg' no HTML */
const menssagemError = document.querySelector('.form__msg')

/* Criando um evento, para que quando o elemento for clicado, ele fará um evento */
Submit_login.addEventListener('click', (e) => {
    /* Impedindo o recarregamento da página quando o evento for chamado */
    e.preventDefault()

    const valueEmail = emailInput.value,
        valuePassword = passwordInput.value

    /* Verificando se os items estão vazios */
    if (valueEmail === "" || valuePassword === "") {

        /* Exibir um erro que vai durar 3s */
        menssagemError.textContent = 'Por favor, preencha todos os campos!'
        menssagemError.classList.add('error')
        emailInput.style.borderColor = 'red'
        passwordInput.style.borderColor = 'red'

        setTimeout(() => {
            menssagemError.classList.remove('error')
            menssagemError.textContent = ''
            emailInput.style.borderColor = ''
            passwordInput.style.borderColor = ''
        }, 3000)
        return;
    }

    // Obtendo a string JSON que está na chave 'users'
    let usersString = window.sessionStorage.getItem('users');

    let emailProcurado = valueEmail,
        senhaDigitada = valuePassword

    let users = JSON.parse(usersString) === null ? [] : JSON.parse(usersString)

    // Verificar se o email já existe ou verificando se existe um email qualquer.
    if (users.some(element => element.email == emailProcurado)) {

        // Verificar a se a senha está correta
        const emailJaCadastrado = users.find(element => element.email == emailProcurado)

        if (emailJaCadastrado.senha == senhaDigitada) {
            window.location.href = '/pagina-logado/logado.html'
        } else {
            menssagemError.textContent = 'Senha incorreta!'
            menssagemError.classList.add('error')
            passwordInput.style.borderColor = 'red'

            setTimeout(() => {
                menssagemError.classList.remove('error')
                menssagemError.textContent = ''
                passwordInput.style.borderColor = ''
            }, 3000)
        }

    } else {
        menssagemError.textContent = 'Email inexistente'
        menssagemError.classList.add('error')
        emailInput.style.borderColor = 'red'
        passwordInput.style.borderColor = 'red'

        setTimeout(() => {
            menssagemError.classList.remove('error')
            menssagemError.textContent = ''
            emailInput.style.borderColor = ''
            passwordInput.style.borderColor = ''
            window.location.href = './pagina-cadastro/criarLogin.html'
        }, 2000)

    }

})
