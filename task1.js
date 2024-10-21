function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var actualUsername = 'Admin';
    var actualPassword = 'Admin@123';

    
    var messageElement = document.getElementById('message');

    if (username === actualUsername) {
        if (password === actualPassword) {
            messageElement.textContent = 'Login successful';
            messageElement.style.color = 'blue';
            messageElement.style.fontFamily = 'cursive';
        } else {
            messageElement.textContent = 'Incorrect password';
            messageElement.style.color = 'red';
            messageElement.style.fontFamily = 'cursive';
        }
    } else {
        messageElement.textContent = 'Incorrect username';
        messageElement.style.color = 'red';
    }
}