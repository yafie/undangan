$(document).ready(function () {
  $(".instagram-effects").slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });

  $.ajax({    //create an ajax request to display.php
    type: "GET",
    url: "./php/display.php",
    dataType: "html",   //expect html to be returned                
    success: function (response) {
      $( ".block-data-doa" ).append( response );
    }
  }); 
        
});

var x = document.getElementById("background_music");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

$(".music-control").click(function () {
  
  var music = $(this).hasClass('off');

  if (music) {
    playAudio();
    $(this).removeClass('off');
    $('.sound-off').hide();
    $('.sound-on').show();
  } else {
    pauseAudio();
    $(this).addClass('off');
    $('.sound-off').show();
    $('.sound-on').hide();
  }
});

$("#pay").click(function () {
  $("#id01").show();
});
