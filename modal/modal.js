// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the close button element
var span = document.getElementsByClassName("close")[0];

// Get the overlay element
var overlay = document.getElementById("overlay");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block"; // Display the overlay
}

// When the user clicks on the close button or the overlay, close the modal
span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none"; // Hide the overlay
}

overlay.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none"; // Hide the overlay
}

// Prevent the modal from closing when clicking inside the modal content
modal.onclick = function(event) {
  event.stopPropagation();
}

// Handle form submission
var form = document.querySelector("form");
form.onsubmit = function(event) {
  event.preventDefault(); // Prevent default form submission
  // Here you can add your code to handle the form submission
  alert("Form submitted!"); // Example: Show an alert
  modal.style.display = "none"; // Close the modal after form submission
  overlay.style.display = "none"; // Hide the overlay after form submission
};

// Prevent the modal from closing when clicking inside the form
form.onclick = function(event) {
  event.stopPropagation();
};
