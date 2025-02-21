// Ensure the DOM is fully loaded before running the script
$(document).ready(() => {
  // Select the signup form and input fields for name, email, phone, address, password, and role
  const signUpForm = $('form.auth');
  const nameInput = $('input#name-input');
  const emailInput = $('input#email-input');
  const phoneInput = $('input#phone-input');
  const addressInput = $('input#address-input');
  const passwordInput = $('input#password-input');
  const getRole = $('input#get_role');

  // Attach a submit event handler to the signup form
  signUpForm.on('submit', async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Extract user data from the input fields and trim any whitespace
    const userData = {
      user_name: nameInput.val().trim(),
      user_email: emailInput.val().trim(),
      user_phone: phoneInput.val().trim(),
      user_address: addressInput.val().trim(),
      user_password: passwordInput.val().trim(),
      user_role: getRole.val().trim(),
    };

    // Call the signUpUser function with the extracted user data
    await signUpUser(
      userData.user_name,
      userData.user_email,
      userData.user_phone,
      userData.user_address,
      userData.user_password,
      userData.user_role,
    );

    // Clear the input fields after successful signup
    nameInput.val('');
    emailInput.val('');
    phoneInput.val('');
    addressInput.val('');
    passwordInput.val('');
  });

  // Function to handle user signup
  function signUpUser(
    user_name,
    user_email,
    user_phone,
    user_address,
    user_password,
    user_role,
  ) {
    // Make an AJAX POST request to the server with the user's data
    return $.post('/signup/signup-now', {
      user_name: user_name,
      user_email: user_email,
      user_phone: user_phone,
      user_address: user_address,
      user_password: user_password,
      user_role: user_role,
    })
      // If the request is successful, redirect the user to the returned URL
      .then((data) => window.location.replace(data))
      // If the request fails, alert the user with the error message
      .catch((err) => alert(err.message ?? 'Registration failed'));
  }
});
