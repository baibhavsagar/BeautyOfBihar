$(document).ready(function() {
    $('#navbarDropdown').mouseenter(function() {
      $('.dropdown-menu').slideToggle(300, "linear");
    });
    
    $('.dropdown-menu').mouseleave(function() {
      $(this).slideToggle(300, "linear");
    });
  });
  



//   $(function () {
//     $(window).on('scroll', function () {
//         if ( $(window).scrollTop() > 10 ) {
//             $('.navbar').addClass('active');
//         } else {
//             $('.navbar').removeClass('active');
//         }
//     });
// });


//Code for the video background




// Function to play/pause video based on user interaction
document.addEventListener('DOMContentLoaded', function () {
  var backgroundVideo = document.getElementById('background-video');

  // Function to play/pause video
  function toggleVideo() {
    if (backgroundVideo.paused) {
      backgroundVideo.play();
    } else {
      backgroundVideo.pause();
    }
  }

  // Play video when user interacts with the page
  document.addEventListener('click', function () {
    toggleVideo();
  });

  // Play video when user interacts with the page
  document.addEventListener('touchstart', function () {
    toggleVideo();
  });
});