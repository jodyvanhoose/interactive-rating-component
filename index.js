let ratingBtns = document.querySelectorAll('.rating__num');
let rating = document.getElementById('thanks-rating');


// Selecting active state for rating button when clicked as well as assigning the rating number on the thank you section
ratingBtns.forEach(btn => {
  btn.addEventListener('click', function(){
    ratingBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    rating.innerHTML = btn.innerHTML;
  })
})

// Displays thank you section and hides rating section when clicked
function submitRating(){
  const ratingSection = document.getElementById('rating');
  const thanksSection = document.getElementById('thanks');
  ratingSection.style.display = 'none';
  thanksSection.style.display = 'flex';
}

