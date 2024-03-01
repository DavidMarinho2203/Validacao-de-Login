const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const Submit_login = document.querySelector('#submit-login')


/* Error */
const menssagemError = document.querySelector('.form__msg')


Submit_login.addEventListener('click', (e) => {
    e.preventDefault()

    const valueEmail = emailInput.value,
        valuePassword = passwordInput.value

    if (valueEmail === "" || valuePassword === "") {

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

    if (sessionStorage.getItem('email') == valueEmail) {

        const senhaArmazenada = sessionStorage.getItem('senha')

        if (senhaArmazenada == valuePassword) {
            window.location.href = '/pagina-logado/logado.html'
            emailInput.value = ''
            passwordInput.value = ''

        } else {
            passwordInput.value = ''
            menssagemError.textContent = 'Senha inválida, tente novamente!'
            menssagemError.classList.add('error')

            setTimeout(() => {
                menssagemError.classList.remove('error')
                menssagemError.textContent = ''
            }, 3000)

            return;
        }

    } else {
        menssagemError.textContent = 'Não existe login com esse email'
        menssagemError.classList.add('error')

        setTimeout(() => {
            menssagemError.classList.remove('error')
            menssagemError.textContent = ''
        }, 5000)

    }

    emailInput.value = ''
    passwordInput.value = ''

})
