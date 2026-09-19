```javascript
const card = document.getElementById("card");
const message = document.getElementById("message");
const gallery = document.querySelector(".gallery");
const cake = document.getElementById("cake");

card.addEventListener("click", function() {

    // Hide the card
    card.style.display = "none";

    // Show the birthday message
    message.style.display = "block";

    // Show the pictures
    gallery.style.display = "grid";

    // Show the cake
    cake.style.display = "block";

});