const emailInput = document.querySelector('#email')
const passwordInputUm = document.querySelector('#passwordUm')
const passwordInputDois = document.querySelector('#passwordDois')
const Submit_login = document.querySelector('#submit-login')

/* Error */
const menssagemError = document.querySelector('.form__msg')

Submit_login.addEventListener('click', (e) => {
    e.preventDefault()

    const valueEmail = emailInput.value,
        valuePasswordUm = passwordInputUm.value,
        valuePasswordDois = passwordInputDois.value

    if (valueEmail == '' || valuePasswordUm == '' || valuePasswordDois == '') {
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

    if (sessionStorage.getItem('email') == emailInput.value) {
        menssagemError.textContent = 'Email já cadastrado!'
        menssagemError.style.backgroundColor = '#121113'

        setTimeout(() => {
            menssagemError.textContent = ''
            menssagemError.style.backgroundColor = ''
        }, 3000)

        emailInput.value = ''
        passwordInputUm.value = ''
        passwordInputDois.value = ''

        return;
    } else if (valuePasswordUm === valuePasswordDois) {

        menssagemError.textContent = 'Cadastrado com sucesso!'
        menssagemError.style.color = '#121113'

        window.sessionStorage.setItem('email', valueEmail)
        window.sessionStorage.setItem('senha', valuePasswordUm)

        setTimeout(() => {
            menssagemError.textContent = ''
        }, 3000)

        emailInput.value = ''
        passwordInputUm.value = ''
        passwordInputDois.value = ''


    }  else {
        menssagemError.textContent = 'Senhas não estão iguais!'
        menssagemError.style.color = '#121113'
        emailInput.value = ''
        passwordInputUm.value = ''
        passwordInputDois.value = ''


        setTimeout(() => {
            menssagemError.textContent = ''
        }, 3000)
    }


})
