const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("hit form handler");

  const email = document.querySelector('#email-input').value.trim();
  const password = document.querySelector('#password-input').value.trim();
  
  console.log(email, password);
  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
  return (false)
};

const submit = document
  .querySelector('#login-form') 
submit
  .addEventListener('click', (e) => loginFormHandler(e));

  //Modal listener
document.getElementById("registerBtn").addEventListener("click", function() {
  // Get the modal element
  var modal = document.getElementById("staticBackdrop4");

  // Show the modal
  var modalBootstrap = new bootstrap.Modal(modal);
  modalBootstrap.show();
});
