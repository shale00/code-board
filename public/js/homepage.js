var feed = document.getElementById('feed');
var showMoreButton = document.getElementById('showMoreButton');
var newPostButton = document.getElementById('newPostButton');
var newPostModal = document.getElementById('newPostModal');
var closeModal = document.getElementsByClassName('close')[0];
var newPostForm = document.getElementById('newPostForm');

// Simulated array of posts
// var posts = [
//     { title: 'Post 1', content: 'This is the content of Post 1.' },
//     { title: 'Post 2', content: 'This is the content of Post 2.' },
//     { title: 'Post 3', content: 'This is the content of Post 3.' },
//     { title: 'Post 4', content: 'This is the content of Post 4.' },
//     { title: 'Post 5', content: 'This is the content of Post 5.' },
//     { title: 'Post 6', content: 'This is the content of Post 6.' },
//     { title: 'Post 7', content: 'This is the content of Post 7.' },
//     { title: 'Post 8', content: 'This is the content of Post 8.' },
//     { title: 'Post 9', content: 'This is the content of Post 9.' },
//     { title: 'Post 10', content: 'This is the content of Post 10.' }
// ];

// var currentPosts = 5;
// var increment = 5;

// Function to display the posts
// function displayPosts() {
//     feed.innerHTML = '';

//     for (var i = 0; i < currentPosts; i++) {
//         var post = posts[i];
//         var postElement = document.createElement('div');
//         postElement.className = 'post';

//         var titleElement = document.createElement('h2');
//         titleElement.textContent = post.title;

//         var contentElement = document.createElement('p');
//         contentElement.textContent = post.content;

//         postElement.appendChild(titleElement);
//         postElement.appendChild(contentElement);

//         feed.appendChild(postElement);
//     }

//     if (currentPosts < posts.length) {
//         showMoreButton.style.display = 'block';
//     } else {
//         showMoreButton.style.display = 'none';
//     }
// }

// Event listener for "Show 5 More" button
showMoreButton.addEventListener('click', function () {
    currentPosts += increment;
    displayPosts();
});

// Event listener for "New Post" button
newPostButton.addEventListener('click', function () {
    newPostModal.style.display = 'block';
});

// Event listener for closing the modal
closeModal.addEventListener('click', function () {
    newPostModal.style.display = 'none';
});

// Event listener for submitting a new post
newPostForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = newPostForm.elements['title'].value;
    var content = newPostForm.elements['content'].value;

    // Add the new post to the array
    posts.push({ title: title, content: content });

    // Reset the form
    newPostForm.reset();

    // Close the modal
    newPostModal.style.display = 'none';

    // Update the displayed posts
    displayPosts();
});

// Initial display of posts
displayPosts();
