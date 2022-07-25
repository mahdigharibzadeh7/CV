let media = document.querySelector("video");
let play = document.querySelector(".play");
let rwd = document.querySelector(".rewind");
let fwd = document.querySelector(".forward");
let crntTime = document.querySelector(".currenttime");
let videoTime = document.querySelector(".videotime");
let progressBar = document.querySelector(".progressbar-current");

media.addEventListener("timeupdate", function () {
  crntTime.textContent = setTime(media.currentTime);
  let barLength = (media.currentTime / media.duration) * 100;
  progressBar.style = `background: linear-gradient(90deg, rgba(230, 126, 34, 1) ${barLength}%, #e1e1e1 0%)`;
  progressBar.value = barLength;
});

progressBar.addEventListener("input", function () {
  media.currentTime = (this.value / 100) * media.duration;
});

play.addEventListener("click", function () {
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
