// const loginFormHandler = async (event) => {
//   event.preventDefault();
//   console.log("hit form handler");

//   const email = document.querySelector('#email-input').value.trim();
//   const password = document.querySelector('#password-input').value.trim();

//   console.log(email, password);
//   if (email && password) {
//     try {
//       const response = await fetch('/api/user/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         document.location.replace('/homepage'); // Redirect to homepage
//       } else {
//         alert('Failed to log in');
//       }
//     } catch (error) {
//       console.error('Error occurred during login:', error);
//       alert('An error occurred during login. Please try again later.');
//     }
//   }
//   return false;
// };

// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', (e) => loginFormHandler(e));

// document.getElementById("registerBtn").addEventListener("click", function() {
//   // Get the modal element
//   var modal = document.getElementById("staticBackdrop4");

//   // Show the modal
//   var modalBootstrap = new bootstrap.Modal(modal);
//   modalBootstrap.show();
// });




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

  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })

  //Modal listener
document.getElementById("registerBtn").addEventListener("click", function() {
  // Get the modal element
  var modal = document.getElementById("staticBackdrop4");

  // Show the modal
  var modalBootstrap = new bootstrap.Modal(modal);
  modalBootstrap.show();
});
