const checkEmail = /\w+@\w+\.\w+/
const checkName = /^[A-Za-zÁÉÍÓÚáéíóúâêîôûãõçÇ\s]{2,50}$/;
const checkMessage = /^.{10,500}$/;

function checkForm(){
    const firstName = document.getElementById('first-name').value
    const lastName = document.getElementById('last-name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    let isValid = true

    if(checkName.test(firstName)){
        localStorage.setItem('firstName', firstName)
    }else{
        const errorFirstName = document.getElementById('error-firstName')
        errorFirstName.textContent = "Por favor, insira um nome válido."
        isValid = false
    }

    if(checkName.test(lastName)){
        localStorage.setItem('lastName', lastName)
    }else{
        const errorLastName = document.getElementById('error-lastName')
        errorLastName.textContent = "Por favor, insira um sobrenome válido."
        isValid = false
    }

    if(checkEmail.test(email)){
        localStorage.setItem('email', email)
    }else{
        const errorEmail = document.getElementById('error-email')
        errorEmail.textContent = "Por favor, insira um email válido."
        isValid = false
    }

    if(checkMessage.test(message)){
        localStorage.setItem('Message', message)
    }else{
        const errorMessage = document.getElementById('error-message')
        errorMessage.textContent = "Por favor, insira uma mensagem que possui entre 10 e 500 caracteres."
        isValid = false
    }

    return isValid
}

function checkFormEmail(){
    const email = document.getElementById('footer-email').value
    let isValid = true

    if(checkEmail.test(email)){
        localStorage.setItem('email', email)
    }else{
        const errorEmail = document.getElementById('error-footerEmail')
        errorEmail.textContent = "Por favor, insira um email válido."
        isValid = false
    }

    return isValid
}