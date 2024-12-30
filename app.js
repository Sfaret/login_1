document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById("sign-up-form");

    signUpForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const message = document.getElementById("message");

        if (response.ok) {
            message.textContent = "Sign up successful!";
        } else {
            message.textContent = "Sign up failed.";
        }
    });
});