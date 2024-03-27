// Get all rating stars
const stars = document.querySelectorAll('.rating-star');

// Add event listeners to each star
stars.forEach(star => {
  star.addEventListener('mouseover', function() {
    // Highlight stars up to this one on hover
    const value = this.dataset.value;
    highlightStars(value);
  });

  star.addEventListener('click', function() {
    // Mark stars up to this one as active on click
    const value = this.dataset.value;
    setActiveStars(value);
  });

  star.addEventListener('mouseout', function() {
    // Reset stars on mouseout
    resetStars();
  });
});

function highlightStars(value) {
  stars.forEach(star => {
    if (star.dataset.value <= value) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function setActiveStars(value) {
  stars.forEach(star => {
    if (star.dataset.value <= value) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function resetStars() {
  stars.forEach(star => {
    star.classList.remove('active');
  });
}
