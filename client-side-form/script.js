const form = document.getElementById('form');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const userEmailValue = userEmail.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    if(userNameValue === '' ){
        setErrorFor(userName, 'Username cannot be blank');
    }
    else {
        setSuccessFor(userName);
    }

    if(userEmailValue === ''){
        setErrorFor(userEmail, 'Email cannot be blank');
    }
    else if (!isEmali(userEmailValue)){
        setErrorFor(userEmail, 'Email is not valid');
    }
    else{
        setSuccessFor(userEmail);
    }

    if(passwordValue === '' ){
        setErrorFor(password, 'Password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }

    if(passwordCheckValue === ''){
        setErrorFor(passwordCheck, 'Password Check cannot be blank');
    }
    else if(passwordCheckValue !== passwordValue){
        setErrorFor(passwordCheck, 'Passwords don\'t match');
    }
    else {
        setSuccessFor(passwordCheck);
    }


}

function setErrorFor(input, msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = msg;

    formControl.className= 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmali(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}