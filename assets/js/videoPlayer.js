const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlyer = document.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");
const VolumeButton = document.getElementById("jsVolumeButton");
const fullscrnButton = document.getElementById("jsFullScreen");

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
    VolumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlyer.muted = true;
    VolumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function exitFullScreen() {
  fullscrnButton.innerHTML = '<i class="fas fa-expand"></i>';
  fullscrnButton.addEventListener("click", goFullScreen);
  document.exitFullscreen();
}

function goFullScreen() {
  videoContainer.webkitRequestFullscreen();
  fullscrnButton.innerHTML = '<i class="fas fa-compress"></i>';
  fullscrnButton.removeEventListener("click", goFullScreen);
  fullscrnButton.addEventListener("click", exitFullScreen);
}
function init() {
  playButton.addEventListener("click", handlePlayClick);
  VolumeButton.addEventListener("click", handleVolumeClick);
  fullscrnButton.addEventListener("click", goFullScreen);
}

if (videoContainer) {
  init();
}
