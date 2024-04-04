let ranNum = Math.trunc(Math.random() * 10);
console.log(ranNum);
const heartOff = document.getElementsByClassName("heart-off");

const h1 = document.getElementById("h1");
const numberInp = document.getElementById("number-inp");

let resetButton;
function btnNum() {
  if (numberInp.value != "") {
    checkGuess();
  }
}
let life = 4;
let pic = 4;
let nx = 0;
function checkGuess() {
  let userGuess = Number(numberInp.value);
  if (userGuess == ranNum) {
    h1.innerHTML = "درست گفتی";
    numberInp.value = "";
    nextLevel();
  } else {
    if (userGuess < ranNum) {
      h1.innerHTML = "بروبالا!";
    } else if (userGuess > ranNum) {
      h1.innerHTML = "بیاپایین!";
    }
    if (userGuess < ranNum || userGuess > ranNum) {
      heartOff[pic].style.display = "none";
      pic--;
    }
    if (life == 0) {
      h1.innerHTML = "!!!باختی!!!";
      numberInp.value = "";
      numberInp.disabled = true;

      setGameOver();
    }
    life--;
    numberInp.value = "";
    numberInp.focus();
  }
}
function nextLevel() {
  pic = 4;
  for (let i = 0; i < 5; i++) {
    heartOff[i].style.display = "inline";
  }

  resetButton = document.createElement("button");
  document.body.appendChild(resetButton);
  resetButton.addEventListener("onclick", resetGame());
}

function resetGame() {
  life = 4;
  numberInp.value = "";
  numberInp.focus();
  nx += 5;
  ranNum = Math.floor(Math.random() * 10) + nx;
  h1.innerHTML = "عددی بین 0 تا" + (10 + nx) + "واردکنید.";
  console.log(ranNum);
}
function setGameOver() {
  if (confirm("باختی!!!\nدوباره بازی میکنی؟")) {
    h1.innerHTML = "عددی بین 0-10 واردکنید";
    numberInp.disabled = false;
    pic = 4;
    nx = 0;
    for (let i = 0; i < 5; i++) {
      heartOff[i].style.display = "inline";
    }
    ranNum = Math.trunc(Math.random() * 10);
    console.log(ranNum);
    life = 5;
    resetButton;
    function btnNum() {
      if (numberInp.value != "") {
        checkGuess();
      }
    }
  }
}
