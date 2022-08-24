$(document).ready(function () {

  const queryString = window.location;
  const url = new URL(queryString);
  const untuk = url.searchParams.get("untuk");
  
   if (untuk) {
     $(".mobile-title").html(untuk);
     $("#nama").val(untuk);
  }

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

$("#okay").click(function () {
  $("#id02").hide();
});

$(".buka-udangan").click(function () {
  $(".main-title").hide();
  $(".main-img").hide();
  $(".mobile-separator").show();
  $("#pay").show();
  $(".desktop-bar").show();
  $(".separator").css("position", "absolute");
  $("#id02").show();
  playAudio();
  $(".music-control").show().removeClass('off');
  $('.sound-off').hide();
  $('.sound-on').show();
});
