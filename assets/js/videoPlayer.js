const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlyer = document.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");

function handlePlayClick() {
  if (videoPlyer.paused) {
    videoPlyer.play();
  } else {
    videoPlyer.pause();
  }
}
function init() {
  playButton.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}
