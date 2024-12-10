
<script>
// Select all the stars
const stars = document.querySelectorAll('.star');

// Add event listeners for hover and click
stars.forEach(star => {
  star.addEventListener('mouseover', handleHover);
  star.addEventListener('mouseout', handleMouseOut);
  star.addEventListener('click', handleClick);
});

// Highlight stars on hover
function handleHover(event) {
  resetStars();
  highlightStars(event.target.dataset.value);
}

// Reset stars on mouse out
function handleMouseOut() {
  resetStars();
  highlightSelectedStars();
}

// Handle click event to select a rating
function handleClick(event) {
  resetStars();
  const value = event.target.dataset.value;
  selectStars(value);
  alert(`You rated this ${value} stars!`);
}

// Highlight stars up to the hovered one
function highlightStars(value) {
  stars.forEach(star => {
    if (star.dataset.value <= value) {
      star.style.color = 'rgba(255, 223, 0, 0.7)';
    }
  });
}

// Select stars up to the clicked one
function selectStars(value) {
  stars.forEach(star => {
    if (star.dataset.value <= value) {
      star.classList.add('selected');
    }
  });
}

// Reset all stars to their default color
function resetStars() {
  stars.forEach(star => star.style.color = '#ddd');
}

// Highlight selected stars on mouse out
function highlightSelectedStars() {
  stars.forEach(star => {
    if (star.classList.contains('selected')) {
      star.style.color = '#ffd700';
    }
  });
}
</script>
</body>
</html>