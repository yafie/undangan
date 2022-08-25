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
  $("#pay").show(); 
  $(".desktop-bar").show();
  $(".separator").css("position", "absolute");
  $(".mobile-separator").css("visibility", "visible");
  $("#id02").show();
  playAudio();
  $(".music-control").show().removeClass('off');
  $('.sound-off').hide();
  $('.sound-on').show();
});

gsap.timeline()
.to(".pictureDesktop", {opacity: 1, duration: 0.2})
  .to(".home", {opacity: 1, duration: 0.2})

gsap.from("h1.homeTitle", { delay: 0.6, y: 100, duration: 0.5, opacity: 0, ease: "back" })
      gsap.from(".defaultFont", {
        delay: 0.8,
        y: 50,
        duration: 1,
        opacity: 0,
        ease: "back",
      })
 
gsap.from(".btnHome", { delay: 0.9, y: 50, duration: 0.6, opacity: 0, ease: "back" });

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      scroller: "#mobile-scroll",
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

