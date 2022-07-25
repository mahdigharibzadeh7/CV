let media = document.querySelector("video");
let play = document.querySelector(".play");
let rwd = document.querySelector(".rewind");
let fwd = document.querySelector(".forward");

play.addEventListener("click", function () {
  if (media.paused) {
    togglePlay({ show: true });
    media.play();
  } else {
    togglePlay({ show: false });
    media.pause();
  }
});

rwd.addEventListener('click', function () {
    media.currentTime -= 5
    
})

fwd.addEventListener('click', function () {
    media.currentTime += 5

})

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
