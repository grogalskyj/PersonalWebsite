var slideIndex = 1;
showDivs(slideIndex);
randomQuote();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function randomQuote() {
	var x = document.getElementsByClassName('quote');
	var i = Math.floor(Math.random()*(x.length));
	console.log(i);
	x[i].style.display = 'block';

}


$(document).ready(function(){
  $(".RIT").click(function(){
    $("#rit").slideDown("slow");
  });
});


$(document).ready(function(){
  $(".Cornell").click(function(){
    $("#cornell").slideDown("slow");
  });
});





