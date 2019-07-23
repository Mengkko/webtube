const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlyer = document.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");
const jsVolumeButton = document.getElementById("jsVolumeButton");

function handlePlayClick() {
  if (videoPlyer.paused) {
    videoPlyer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlyer.pause();
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlyer.muted) {
    videoPlyer.muted = false;
    jsVolumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlyer.muted = true;
    jsVolumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}
function init() {
  playButton.addEventListener("click", handlePlayClick);
  jsVolumeButton.addEventListener("click", handleVolumeClick);
}

if (videoContainer) {
  init();
}
