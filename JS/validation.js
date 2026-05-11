document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('login_email').value.trim();
      const password = document.getElementById('login_password').value.trim();
      const errorDiv = document.getElementById('loginError');
      errorDiv.style.display = 'none';
      errorDiv.textContent = '';
      if (!email) {
        showError(errorDiv, 'please enter your E-mail');
        return;
      }
      if (!validateEmail(email)) {
        showError(errorDiv, 'please enter a valid E-mail');
        return;
      }
      if (!password) {
        showError(errorDiv, 'please enter your password');
        return;
      }
      errorDiv.style.display = 'none';
      alert('login accomplished!');
      localStorage.setItem("loggedInUser", email)
      window.location.href = 'index.html';
    });
  }



  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value.trim();
      const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
      const errorDiv = document.getElementById('signupError');
      errorDiv.style.display = 'none';
      errorDiv.textContent = '';
      if (!name) {
        showError(errorDiv, 'please enter the full name');
        return;
      }
      if (!email) {
        showError(errorDiv, 'please enter your E-mail');
        return;
      }
      if (!validateEmail(email)) {
        showError(errorDiv, 'please enter the correct E-mail');
        return;
      }
      if (!password) {
        showError(errorDiv, 'plaese enter the password');
        return;
      }
      if (password.length < 6) {
        showError(errorDiv, 'password must be at least 6 digits');
        return;
      }
      if (password !== confirmPassword) {
        showError(errorDiv, 'passwords do not match');
        return;
      }
      errorDiv.style.display = 'none';
      console.alert('the account has been successfully created!');
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", name);
      window.location.href = 'login.html';
    });
  }
  function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
  }
  function validateEmail(email) {
    // checking
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
