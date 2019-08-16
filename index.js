var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

var submit = $('.submit');
var popupContainer = $('.popupContainer');
var popup = $('.popup');

function modalUp() {
  $(".popupContainer").css("display", "flex");
}
setTimeout(modalUp, 1000);
submit.on("click", signedUp);

function signedUp() {
  event.preventDefault();
  console.log("yay");
  popup.text("You're Signed Up!");
  $(".exit").css("display", "initial");
}

var exit = $('.exit');
exit.on("click", exitPage);

function exitPage() {
  event.preventDefault();
  $(".popupContainer").css("display", "none");
  console.log("it works");
}

var quit = $('.quit');
quit.on("click", quitPage);

function quitPage() {
  event.preventDefault();
  $(".popupContainer").css("display", "none");
}

var subscribe = $('#subscribe');
subscribe.on("click", modalUp);

var donate = $('#donate');
donate.on("click", donateUp);

function donateUp() {
  event.preventDefault();
  $(".donateContainer").css("display", "flex");
  $(".exitDonate").css("display", "initial");
}
var exitDonate = $('.exitDonate');
exitDonate.on("click", exitDonatePage);

function exitDonatePage() {
  event.preventDefault();
  $(".donateContainer").css("display", "none");
}

// function doSomething() {
//   $("body").append("<div class='popupContainer'><div class='popup'>Subscribe to Our Newsletter</div></div>");
// }
// $(window).on('load', doSomething);
