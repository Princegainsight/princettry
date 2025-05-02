document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const loginButton = document.getElementById('login-btn');
    const signOutButton = document.getElementById('signout-btn');
    const userDisplay = document.getElementById('user-display');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Toggle the mobile nav menu
    if (menuIcon) {
        menuIcon.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    }

    // Navigate to login page
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

    // Simulate login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validate the password is entered and any other simple client checks
            if (username && password) {
                const storedName = window.localStorage.getItem('displayName');
                if (storedName) {
                    alert('Login successful');
                    window.localStorage.setItem('currentUserName', storedName); // Save current session user's name
                    window.location.href = 'index.html';
                } else {
                    alert('Please register first');
                }
            } else {
                alert('Please enter a username and password');
            }
        });
    }

    // Simulate registration form submission
    if (registerForm) {
        const registerButton = document.getElementById('register-btn');
        registerButton.addEventListener('click', function () {
            const regName = document.getElementById('reg-name').value;
            const regEmail = document.getElementById('reg-email').value;
            const regPassword = document.getElementById('reg-password').value;

            if (regName && regEmail && regPassword) {
                window.localStorage.setItem('displayName', regName); // Store the name for use after login
                alert(`Registration successful for ${regName}`);
            } else {
                alert('Please complete all registration fields');
            }
        });
    }

    // Update the UI to show user's name if logged in
    const storedUserName = window.localStorage.getItem('currentUserName');
    if (storedUserName && userDisplay && signOutButton) {
        loginButton.classList.add('hidden');
        userDisplay.textContent = storedUserName;
        userDisplay.classList.remove('hidden');
        signOutButton.classList.remove('hidden');

        signOutButton.addEventListener('click', function () {
            window.localStorage.removeItem('currentUserName');
            alert('You have been signed out');
            userDisplay.classList.add('hidden');
            signOutButton.classList.add('hidden');
            loginButton.classList.remove('hidden');
        });
    }
});

