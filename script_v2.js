document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const statusMessage = document.getElementById('status-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting and reloading the page

        const email = emailInput.value;
        const password = passwordInput.value;

        // Simulating a successful login with a correct email and password
        if (email === 'reeham@cabardo' && password === 'password123') {
            statusMessage.textContent = 'Login successful!';
            statusMessage.className = 'success';
            statusMessage.style.display = 'block';

            // Redirect to the index.html page after 2 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // 2000 milliseconds = 2 seconds

        } else {
            // Simulating a failed login
            statusMessage.textContent = 'Invalid email or password.';
            statusMessage.className = 'error';
            statusMessage.style.display = 'block';
        }
    });
});
