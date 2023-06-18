const user = firebase.auth().currentUser;
const displayName = user.displayName;

// Get the reference to the HTML element
const usernameElement = document.getElementById('username');

// Update the content of the element with the user name
usernameElement.innerHTML = displayName;