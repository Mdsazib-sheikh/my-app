// without this script, the slider doesn't start on it's own:
!function ($) {
    $(function(){
      $('#homepage_slider').carousel()
    })
  }(window.jQuery)


// if user chooses to not autoplay the video, the button should be uncommented in html and this script will make the button work:
var vid = document.getElementById("bgvid");
var playButton = document.querySelector("#slider-play-button button");

playButton.addEventListener("click", function() {
  if (vid.paused) {
    vid.play();
	playButton.classList.remove("play-video-button");
    playButton.classList.add("pause-video-button");
  } else {
    vid.pause();
	playButton.classList.add("play-video-button");
    playButton.classList.remove("pause-video-button");
  }
});
"object-fit": (
  responsive: true,
  property: object-fit,
  values: (
    contain: contain,
    cover: cover,
    fill: fill,
    scale: scale-down,
    none: none,
  )
),