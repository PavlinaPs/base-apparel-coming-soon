const validationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

let enteredEmail = document.getElementById("email");
const form = document.getElementById('form');
const errorMessage = document.querySelector('.error-message');
const errorSubmit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    if (validationRegex.test(enteredEmail.value)) {
        enteredEmail.classList.remove('email-error');
        errorMessage.setAttribute('visibility', 'hidden');
        errorSubmit.setAttribute('data-error', false);
        enteredEmail.value = null;
        return;
    } else {
        e.preventDefault();
        enteredEmail.classList.add('email-error');
        errorMessage.setAttribute('visibility', 'visible');
        errorSubmit.setAttribute('data-error', true);
        return;
    }
});
