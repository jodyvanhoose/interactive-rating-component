let ratingBtns = document.querySelectorAll('.rating__num');

ratingBtns.forEach(btn => {
  btn.addEventListener('click', function(){
    ratingBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  })
})