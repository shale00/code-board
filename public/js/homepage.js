var feed = document.getElementById('feed');
var showMoreButton = document.getElementById('showMoreButton');
var newPostButton = document.getElementById('newPostButton');
var newPostModal = document.getElementById('newPostModal');
var closeModal = document.getElementsByClassName('close')[0];
var newPostForm = document.getElementById('newPostForm');



var currentPosts = 5;
var increment = 5;


// Event listener for "Show 5 More" button
showMoreButton.addEventListener('click', function () {
    currentPosts += increment;
    window.location.href= `/${currentPosts}`;
    console.log(currentPosts);
    // displayPosts();
});

// // Event listener for "New Post" button
// newPostButton.addEventListener('click', function () {
//     newPostModal.style.display = 'block';
// });

// // Event listener for closing the modal
// closeModal.addEventListener('click', function () {
//     newPostModal.style.display = 'none';
// });

  //Modal listener TODO: This is not doing anything
//   document.getElementById("newPostButton").addEventListener("click", function() {
//     // Get the modal element
//     var modal = document.getElementById("newPostModal");
  
//     // Show the modal
//     var modalBootstrap = new bootstrap.Modal(modal);
//     modalBootstrap.show();
//   });


// const newPostFormHandler = async (event) => {
//     event.preventDefault();

//     const body = document.querySelector('#content').value.trim();

//     if( body ) {
//         const response = await fetch ('api/post/create', {
//            method: 'POST',
//            body: JSON.stringify({ body }),
//            headers: { 'Content-Type': 'application/json' },
//         });

//         if(response.ok){
//             alert(`Created a new post!`)
//             document.location.replace('/');
//         } else {
//             alert(`something is wrong`)
//         }
//     }

//      // Reset the form
//      newPostForm.reset();

//      // Close the modal
//      newPostModal.style.display = 'none';
 
//      // Update the displayed posts
//      displayPosts();
    
// }

// const create = document
//   .querySelector('#createPostSubmit') 
// create
//   .addEventListener('click', (e) => newPost(e));

