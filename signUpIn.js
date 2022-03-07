let signUp = document.querySelector('.sign_up');
let indexofusers = 0;
let signUpActivate = document.querySelector('.signUpActivate');
let signUpClose = document.getElementById('exit');
signUpClose.onclick = function() {
    username.value = '';
    signUpPass.value = '';
    signupEmail.value = '';
    signUpRepeatPass.value = '';
    error = '';
    errorplace.replaceChildren(error)
    signUp.classList.remove('active')
}
signUpActivate.addEventListener('click', function() {
    signUp.classList.add('active');
})
const username = document.getElementById('name');
const signupEmail = document.getElementById('emailUp');
const signUpPass = document.getElementById('passwordUp');
const signUpRepeatPass = document.getElementById('passwordRepeatUp');
const signConfirmUpBtn = document.getElementById('upBtn');
let privetstviye = document.querySelector('.greeting');
if (localStorage.getItem('activeuser') == null) {
    localStorage.setItem('activeuser', '');
}
privetstviye.replaceChildren(localStorage.getItem('activeuser'));
let greet = document.createElement('p');
let errorplace = document.querySelector('.error');
let error = document.createElement('a');
signConfirmUpBtn.onclick = function() {
    let correctEmail = false;
    let correctPass = false;
    let counter = 0;
    let index;
    let email = signupEmail.value
    for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            index = i;
            correctEmail = true;
        }
    }
    if (correctEmail == true) {
        for (let i = 0; i < index; i++) {
            counter++;
        }
        if (counter >= 1) {
            correctEmail = true;
        } else {
            correctEmail = false;
        }
    }
    let counterunique = 0;
    let counternum = 0;
    let counterLet = 0;
    let signuppass = signUpPass.value;
    let signuprepeatpass = signUpRepeatPass.value;

    if (signuppass.length >= 8) {
        if (signuprepeatpass === signuppass) {
            correctPass = true;
        } else { correctPass = false; }







        if (correctPass == true && correctEmail == true && username.value.length < 15) {
            let user = {
                name: username.value,
                email: signupEmail.value,
                password: signUpPass.value,
            }
            localStorage.setItem("" + email, JSON.stringify(user));
            greet.value = 'Hello and welcome, ' + user.name;
            localStorage.setItem('activeuser', greet.value);
            privetstviye.replaceChildren(localStorage.getItem('activeuser'));
            indexofusers++;
            signUp.classList.remove('active');
            username.value = '';
            signUpPass.value = '';
            signupEmail.value = '';
            signUpRepeatPass.value = '';
        } else {
            if (correctPass == false) {
                username.value = '';
                signUpPass.value = '';
                signupEmail.value = '';
                signUpRepeatPass.value = '';
                if (counternum <= 0 && counterLet <= 0) {
                    if (select.value == 'en') {
                        error = 'password should contain at least 8 elements';
                    } else {
                        error = 'Пароль должен состоять из 8 элементов';
                    }
                    errorplace.replaceChildren(error)
                } else {
                    if (select.value == 'en') {
                        error = 'password should contain at least 8 elements';
                    } else {
                        error = 'Пароль должен состоять из 8 элементов';
                    }
                    errorplace.replaceChildren(error)
                }
            } else if (!(signuprepeatpass === signuppass)) {
                username.value = '';
                signUpPass.value = '';
                signupEmail.value = '';
                signUpRepeatPass.value = '';
                if (select.value == 'en') {
                    error = 'passwords should be the same ';
                } else {
                    error = 'Пароли должны быть одинаковыми';
                }
                errorplace.replaceChildren(error)
            } else if (correctEmail == false) {
                username.value = '';
                signUpPass.value = '';
                signupEmail.value = '';
                signUpRepeatPass.value = '';
                error = 'not valid email';
                errorplace.replaceChildren(error)
            }
        }
    } else {
        if (select.value == 'en') {
            error = 'password is short';
        } else {
            error = 'Пароль должен состоять из 8 элементов';
        }
        errorplace.replaceChildren(error)
    }
}





/*вход*/
let signIn = document.querySelector('.sign_in');
let signInActivate = document.querySelector('.signInActivate');
let createAccount = document.querySelector('.createAccount');
let incorrect = document.querySelector('.incorrect');
let message = document.createElement('a');

createAccount.onclick = function() {
    signIn.classList.remove('active');
    signUp.classList.add('active');
}
signInActivate.addEventListener('click', function() {
    signIn.classList.add('active');
})
let signInClose = document.getElementById('close');
signInClose.addEventListener('click', () => {
    signIn.classList.remove('active');
});
let emailIn = document.getElementById('emailIn');
let passwordIn = document.getElementById('passwordIn');
let signInBtn = document.getElementById('inBtn');
signInBtn.onclick = function() {
    if (JSON.parse(localStorage.getItem(emailIn.value)) != null) {
        let user = JSON.parse(localStorage.getItem(emailIn.value));
        if (user.email === emailIn.value) {
            if (passwordIn.value === user.password) {
                signIn.classList.remove('active');
                greet.value = 'Hello and welcome, ' + user.name;
                localStorage.setItem('activeuser', greet.value);
                privetstviye.replaceChildren(localStorage.getItem('activeuser'));
            } else {
                message.style.color = 'red';
                message.value = 'email or password incorrect, please, try again'

                incorrect.replaceChildren(message.value);
            }
        } else {
            message.style.color = 'red';
            message.value = 'email or password incorrect, please, try again'
            incorrect.replaceChildren(message.value);
        }
    } else {
        message.style.color = 'red';
        message.value = 'email or password incorrect, please, try again'
        incorrect.replaceChildren(message.value);
    }
}
signInClose.onclick = function() {
    incorrect.replaceChildren('');
    emailIn.value = '';
    passwordIn.value = '';
}

/*signConfirmUpBtn.addEventListener('click', function() {

    let checkem = checkEmail(signupEmail);
    let checkpass = checkPass(signUpPass, signUpRepeatPass);
    if (checkem == true && checkpass == true) {
        let user = {
            email: signupEmail,
            password: signUpPass,
        }
        localStorage.setItem('user1', JSON.stringify(user));
        signUp.style.display = "none";
    }
});


function checkEmail(signupemail) {
    let correct = false;
    let counter = 0;
    let index;
    for (let i = 0; i < signupemail; i++) {
        if (signupemail[i] == "@") {
            index = i;
            correct = true;
        }
    }
    for (let i = 0; i < index; i++) {
        counter++;
    }
    if (counter >= 1) {
        correct = true;
    } else {
        correct = false;
    }
    if (correct == false) {
        return false;
    } else if (correct == true) {
        return true;
    }
}

function checkPass(signuppass, signuprepeatpass) {
    let counterunique = 0;
    let counternum = 0;
    let counterLet = 0;
    for (let i = 0; i < signuppass; i++) {
        if (signuppass[i] > 33 && signuppass[i] < 65) {
            counterunique++;
        }
        if (signuppass[i] > 47 && signuppass < 58) {
            counternum++;
        }
        if (signuppass[i] > 64 && signuppass[i] < 123) {
            counterLet++;
        }
    }
    if (counterLet > 0 && counternum > 0 && counterunique > 0) {
        if (signuprepeatpass === signuppass) {
            return true;
        } else { return false; }
    } else {
        return false;
    }
}







/*
var upBtn = document.getElementById("upBtn");
var inBtn = document.getElementById("inBtn");

upBtn.onclick = checkUp;
inBtn.onclick = checkIn;

function checkUp(){
    var email = document.getElementById("emailUp");
    var password = document.getElementById("passwordUp");
    var passwordRepeat = document.getElementById("passwordRepeatUp");
}

function checkIn(){
    var email = document.getElementById("emailIn");
    var password = document.getElementById("passwordIn");

    alert();
    alert(ValidateEmail(email.value));
}


function ValidateEmail(input) {
    alert(input);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      alert("Valid email address!");
      document.form1.text1.focus();
      return true;
    } 
    else {
      alert("Invalid email address!");
      document.form1.text1.focus();
      return false;
    }
}*/