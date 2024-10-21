const loginForm = document.getElementById('login-form');
const emailUsernamePhoneInput = document.getElementById('email-username-phone');
const passwordInput = document.getElementById('password');
const errorMessageDiv = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const loginType = document.querySelector('input[name="login-type"]:checked').id;
    const emailUsernamePhone = emailUsernamePhoneInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate email
    if (loginType === 'email-login') {
        if (!emailUsernamePhone.endsWith('@gmail.com')) {
            errorMessageDiv.innerText = 'Invalid email address';
            return;
        }
    }

    // Validate username
    if (loginType === 'username-login') {
        if (emailUsernamePhone.includes(' ') || /\d/.test(emailUsernamePhone)) {
            errorMessageDiv.innerText = 'Username should not contain spaces or digits';
            return;
        }
    }

    // Validate phone number
    if (loginType === 'phone-login') {
        if (!/^\d{10}$/.test(emailUsernamePhone)) {
            errorMessageDiv.innerText = 'Invalid phone number';
            return;
        }
    }

    // Validate password
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        errorMessageDiv.innerText = 'Password should be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one digit, and one special symbol';
        return;
    }

    // Login successful
    console.log('Login successful');
});