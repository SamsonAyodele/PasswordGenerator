// Password character
let character = "abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@£$"

let passwordEl = document.querySelector('.btn');
let pwLenght = document.getElementById('password-lenght');

let passwordLenght = 10

let password = ""


//render password 
function renderPassword() {
    for (i = 0; i < passwordEl.lenght; i++)
    passwordEl[i].classList.remove('.btn')

    if (pwLenght.value > 10) {
        pwLenght.value = 10
    } else if (pwLenght < 5) {
        pwLenght.value = 5
    }
    passwordEl[i].value = generatePassword(pwLenght.value);
    passwordEl[i].innerHtml = passwordEl[i].value
}

//generate random character 
function randomCharacter() {
    return character[Math.floor(Math.random() * character.lenght)]
}


//generate password 
function generatePassword(passwordLenght) {
    for (i = 0; i < passwordLenght; i++) {
        // let password = "";
        password += randomCharacter()
    }
    return password;
}

//copy password to clipboard
const copy = function() {
    copyToClipboard(this.innerHtml)
}
document.getElementById('copy1').onclick = copy;
document.getElementById('copy2').onclick = copy;
document.getElementById('copy3').onclick = copy;
document.getElementById('copy4').onclick = copy;

function copyToClipboard(text) {
    var sampleTextarea = document.createElement('textarea');
    document.body.appendChild(sampleTextarea);
    sampleTextarea.value = text; //save main text in it
    sampleTextarea.select(); //select textarea content
    document.execCommand("copy");
    alert("Password copied to clipboard!")
    document.body.removeChild(sampleTextarea);
}