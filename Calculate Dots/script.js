let wordsDots = [
  ["ج", "خ", "غ", "ف", "ض", "ن", "ب", "ذ", "ز", "ظ"],
  ["ق", "ت", "ی"],
  ["چ", "ث", "پ", "ش"],
];

let signs = /[ `!@#$%^&*×()_+\-=\[\]{};؛،':"\\|,.<>\/?؟~]/;
function specialCharacters(char) {
  return signs.test(char);
}

function calculate() {
  let arr = [];
  let inputValue = document.getElementById("cal-input").value;
  for (const word of inputValue) {
    arr.push(word);
  }
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < wordsDots.length; i++) {
      for (let j = 0; j < wordsDots[i].length; j++) {
        if (arr[index] == wordsDots[i][j]) {
          if (i == 0) sum += 1;
          else if (i == 1) {
            if (arr[index + 1]) {
              if (arr[index] == "ی") {
                if (!specialCharacters(arr[index + 1])) sum += 2;
              } else sum += 2;
            } else {
              if (arr[index] != "ی") sum += 2;
            }
          } else if (i == 2) sum += 3;
        }
      }
    }
  }

  let resualt = document.querySelector(".cal-resualt p");

  resualt.innerHTML = "تعداد نقطه ها : " + sum;
  if (resualt.innerHTML == "تعداد نقطه ها : " + 0) resualt.innerHTML = "";
}
