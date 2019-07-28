const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlyer = document.querySelector("#jsVideoPlayer video");
const playButton = document.getElementById("jsPlayButton");
const VolumeButton = document.getElementById("jsVolumeButton");
const fullscrnButton = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

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
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function goFullScreen() {
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullscrnButton.innerHTML = '<i class="fas fa-compress"></i>';
  fullscrnButton.removeEventListener("click", goFullScreen);
  fullscrnButton.addEventListener("click", exitFullScreen);
}

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
  currentTime.innerHTML = formatDate(Math.floor(videoPlyer.currentTime));
}

function setTotalTime() {
  const totalTimeString = formatDate(videoPlyer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function handleEnded() {
  videoPlyer.currentTime = 0;
  playButton.innerHTML = '<i class="fas fa-play"></i>';
}

function init() {
  videoPlyer.currentTime = 590;
  playButton.addEventListener("click", handlePlayClick);
  VolumeButton.addEventListener("click", handleVolumeClick);
  fullscrnButton.addEventListener("click", goFullScreen);
  videoPlyer.addEventListener("loadedmetadata", setTotalTime);
  videoPlyer.addEventListener("ended", handleEnded);
}

if (videoContainer) {
  init();
}
