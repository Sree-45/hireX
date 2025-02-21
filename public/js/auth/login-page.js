// Ensure the DOM is fully loaded before running the script
$(document).ready(() => {
  // Select the login form and input fields for email and password
  const loginForm = $('form.auth');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');

  // Attach a submit event handler to the login form
  loginForm.on('submit', async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Extract user data from the input fields and trim any whitespace
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    // If either email or password is empty, return early
    if (!userData.email || !userData.password) return;

    // Call the loginUser function with the extracted email and password
    await loginUser(userData.email, userData.password);

    // Clear the input fields after successful login
    emailInput.val('');
    passwordInput.val('');
  });

  // Function to handle user login
  function loginUser(email, password) {
    // Make an AJAX POST request to the server with the user's email and password
    return $.post('/login/login-now', {
      user_email: email,
      user_password: password,
    })
      // If the request is successful, redirect the user to the returned URL
      .then((data) => window.location.replace(data))
      // If the request fails, alert the user with the error message
      .catch((err) => alert(err.message ?? 'Login failed'));
  }
});
