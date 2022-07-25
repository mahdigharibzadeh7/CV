let userTime = document.querySelector("#input-clock");
let start = document.querySelector("#btn-start");
let pause = document.querySelector("#btn-pause");
let timer = document.querySelector(".c100");
let secondBar = document.querySelector(".c100 > span");
let seconds, originalSecond, lastPercent, timerId;

start.addEventListener("click", function () {
  seconds = parseInt(userTime.value);
  if (isNaN(seconds))
    return toggleErrorMessage({
      show: true,
      message: "لطفا زمان را به درستی وارد کنید.",
    });

  toggleErrorMessage({ show: false });
  toggleTimer({ show: true });
  toggleLoading({ show: true });

  originalSecond = seconds;
  lastPercent = "p100";
  timerId = setInterval(setTimer, 1000);
});

pause.addEventListener("click", function () {
  // Not ready yet
});

let setTimer = () => {
  if (lastPercent) timer.classList.remove(lastPercent);
  if (seconds <= 0) {
    clearInterval(timerId);
    toggleTimer({ show: false });
    toggleLoading({ show: false });
    return;
  }
  seconds -= 1;
  lastPercent = `p${Math.abs(
    Math.floor(((originalSecond - seconds) / originalSecond) * 100) - 100
  )}`;
  timer.classList.add(lastPercent);
  secondBar.textContent = seconds;
};

let toggleErrorMessage = ({ show, message }) => {
  let errorMessage = document.querySelector(".error-message");
  if (show) {
    errorMessage.textContent = message;
    errorMessage.classList.add("active");
  } else errorMessage.style.display = "none";
};

let toggleTimer = ({ show }) => {
  let Start = document.querySelector(".start");
  if (show) {
    timer.style.display = "block";
    userTime.style.display = "none";
    secondBar.textContent = seconds;
    start.style.display = "none";
    pause.style.display = "block";
  } else {
    timer.style.display = "none";
    userTime.style.display = "block";
    userTime.value = "";
    start.style.display = "block";
    pause.style.display = "none";
    Start.style.display = "flex";
    Start.style.gap = "10px";
  }
};

let toggleLoading = ({ show }) => {
  let loadingMessages = document.querySelector(".loading");
  let successMessages = document.querySelector(".success");
  if (show) {
    loadingMessages.style.display = "block";
    successMessages.style.display = "none";
  } else {
    loadingMessages.style.display = "none";
    successMessages.style.display = "block";
  }
};
