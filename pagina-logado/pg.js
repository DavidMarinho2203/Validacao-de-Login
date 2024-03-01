const form__submit = document.querySelector('#submit-login')

form__submit.addEventListener('click', (e) => {
    e.preventDefault()

    window.location.href = '../index.html'
    return;
})