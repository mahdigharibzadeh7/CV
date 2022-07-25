let media = document.querySelector("video");
let play = document.querySelector(".play");
let rwd = document.querySelector(".rewind");
let fwd = document.querySelector(".forward");
let progressBar = document.querySelector(".progressbar-current");
let volume = document.querySelector("#volume_bar");
let fullscreen = document.querySelector(".fullscreen");

play.addEventListener("click", function () {
  let videoTime = document.querySelector(".videotime");
  videoTime.textContent = setTime(media.duration);
  if (media.paused) {
    togglePlay({ show: true });
    media.play();
  } else {
    togglePlay({ show: false });
    media.pause();
  }
  media.onended = function () {
    togglePlay({ show: false });
  };
});

rwd.addEventListener("click", function () {
  media.currentTime -= 5;
});

fwd.addEventListener("click", function () {
  media.currentTime += 5;
});

media.addEventListener("timeupdate", function () {
  let crntTime = document.querySelector(".currenttime");
  crntTime.textContent = setTime(media.currentTime);
  let barLength = (media.currentTime / media.duration) * 100;
  progressBar.value = barLength;
});

progressBar.addEventListener("input", function () {
  media.currentTime = (this.value / 100) * media.duration;
});

volume.addEventListener("input", function () {
  media.volume = this.value / 100;
});

fullscreen.addEventListener("click", function () {
  let playerArea = document.querySelector(".myplayer");
  let controls = document.querySelector(".controls-container");
  if (!document.fullscreenElement) {
    playerArea.requestFullscreen();
    media.style.width = "100%";
    controls.style.width = "100%";
  } else {
    document.exitFullscreen();
    media.style.width = "900px";
    controls.style.width = "900px";
  }
});

function togglePlay({ show }) {
  let icon = play.querySelector("i");
  if (show) {
    icon.classList.remove("fa", "fa-play");
    icon.classList.add("fa-solid", "fa-pause");
  } else {
    icon.classList.remove("fa-solid", "fa-pause");
    icon.classList.add("fa", "fa-play");
  }
}

function setTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  let minutesValue, secondsValue;

  if (minutes < 10) minutesValue = "0" + minutes;
  else minutesValue = minutes;

  if (seconds < 10) secondsValue = "0" + seconds;
  else secondsValue = seconds;

  return minutesValue + ":" + secondsValue;
}
