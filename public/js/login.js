// LOGIN LOGIC
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //console.log(response);

    //Put a .25 second delay when logging in
    setTimeout( () => {
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/albums');
      } else {
        alert(response.statusText);
      }
    }, 1000);

  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    //Put a .25 second delay when signing in in
    setTimeout( () => {
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/albums');
      } else {
        alert(response.statusText);
      }
    }, 250);

  }
};

const loginEl = document.querySelector('.login-form');
  // This will get rid of a console error
if (loginEl) {
  loginEl.addEventListener('submit', loginFormHandler);
}

const signUpEl = document.querySelector('.signup-form');
if (signUpEl) {
  signUpEl.addEventListener('submit', signupFormHandler);
}
  
  // Make sure query selectors are the same

