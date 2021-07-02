var btn = document.getElementById('signup')
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var firstName = lastName = eMail = userName = password = '';
var allUser = [];

class User {
    constructor(a, b, c, d, e) {
        this.name = a;
        this.surname = b;
        this.mail = c;
        this.username = d;
        this.password = e;
    }
}

function checkTrueValues() {
    var name = document.getElementById('name')
    var surname = document.getElementById('surname')
    var mail = document.getElementById('mail')
    var username = document.getElementById('username')
    var password = document.getElementById('password')
    var cPass = document.getElementById('cPass')
    var labelName = document.getElementById('label_name')
    var nameErrorText = document.getElementById('name_error_text')
    var labelSurname = document.getElementById('label_surname')
    var surNameErrorText = document.getElementById('surname_error_text')
    var labelMail = document.getElementById('label_mail')
    var mailErrorText = document.getElementById('mail_error_text')
    var labelUsername = document.getElementById('label_username')
    var usernameErrorText = document.getElementById('username_error_text')
    var labelPassword = document.getElementById('label_password')
    var passwordErrorText = document.getElementById('password_error_text')
    var labelcPass = document.getElementById('label_cPass')
    var cPassErrorText = document.getElementById('cPass_error_text')

    // Name
    if (name.value.length == 0) {
        labelName.innerHTML = '<input type="text" placeholder="Name" id="name">' + ' *'
        nameErrorText.innerText = 'Write a name'
        nameErrorText.style.display = 'block'
    } else if (!isNaN(name.value)) {
        labelName.innerHTML = '<input type="text" placeholder="Name" id="name">' + ' *'
        nameErrorText.innerText = 'Write letters'
        nameErrorText.style.display = 'block'
    } else if (name.value.length <= 2) {
        labelName.innerHTML = '<input type="text" placeholder="Name" id="name">' + ' *'
        nameErrorText.innerText = 'Name must be more than 3 letters'
        nameErrorText.style.display = 'block'
    } else {
        nameErrorText.style.display = 'none';
        firstName = name.value;
        labelName.innerHTML = `<input type="text" placeholder="Name" id="name" value="${name.value}">`
    }

    // Surname
    if (surname.value.length <= 3) {
        labelSurname.innerHTML = '<input type="text" placeholder="Surname" id="surname">' + ' *'
        surNameErrorText.innerText = 'Surname must be more than 4 letters'
        surNameErrorText.style.display = 'block'
    } else {
        surNameErrorText.style.display = 'none';
        labelSurname.innerHTML = `<input type="text" placeholder="Surname" id="surname" value="${surname.value}">`
    }

    // Mail
    if (!re.test(document.getElementById('mail').value)) {
        labelMail.innerHTML = '<input type="text" placeholder="Mail" id="mail">' + ' *'
        mailErrorText.innerText = 'Incorrect Mail'
        mailErrorText.style.display = 'block'
    } else {
        document.getElementById('mail_error_text').style.display = 'none';
        labelMail.innerHTML = `<input type="text" placeholder="Mail" id="mail" value="${mail.value}">`
    }

    // Username
    if (username.value.length <= 2) {
        labelUsername.innerHTML = '<input type="text" placeholder="Username" id="username">' + ' *'
        usernameErrorText.innerText = 'Username must be more than 3 letters'
        usernameErrorText.style.display = 'block'
    } else {
        usernameErrorText.style.display = 'none';
        labelUsername.innerHTML = `<input type="text" placeholder="Username" id="username" value="${username.value}">`
    }

    // Password
    if (password.value.length <= 3) {
        labelPassword.innerHTML = '<input type="password" placeholder="Password" id="password">' + ' *'
        passwordErrorText.innerText = 'Password must be more than 4 symbols'
        passwordErrorText.style.display = 'block'
    } else {
        passwordErrorText.style.display = 'none';
        labelPassword.innerHTML = `<input type="password" placeholder="Password" id="password" value="${password.value}">`
    }

    // Confirm Passwod
    if (password.value !== cPass.value) {
        labelcPass.innerHTML = '<input type="password" placeholder="Confirm Password" id="cPass">' + ' *'
        cPassErrorText.innerText = 'Password mismatch'
        cPassErrorText.style.display = 'block'
    } else {
        cPassErrorText.style.display = 'none';
        labelcPass.innerHTML = `<input type="password" placeholder="Confirm Password" id="cPass" value="${cPass.value}">`
    }

    // Check Values
    if (name.value.length > 1 && username.value.length > 1 && mail.value.length > 1 && surname.value.length > 1 && password.value.length > 1 && cPass.value.length > 1) {
        document.getElementById('signup_block').style.display = 'none'
        document.getElementById('login_block').style.display = 'block'
    }

    if (name.value != '' && surname.value != '' && mail.value != '' && username.value != '' && password.value != '') {
        var oneUser = new User(name.value, surname.value, mail.value, username.value, password.value);
        allUser.push(oneUser);
        console.log(allUser);
    }
}

function login() {
    for (var i = 0; i < allUser.length; i++) {
        if (document.getElementById('login_mail').value == allUser[i].mail && document.getElementById('login_password').value == allUser[i].password) {
            document.getElementById('login_block').style.display = 'none'
            document.getElementById('user_info_block').style.display = 'block'
            document.getElementById('username_info').innerText = allUser[i].username
            document.getElementById('email_info').innerText = allUser[i].mail
            document.getElementById('password_info').innerText = allUser[i].password
        }
    }
}

function signupButton() {
    checkTrueValues()
}
