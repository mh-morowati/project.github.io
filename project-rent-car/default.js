const myDiv = document.getElementsByClassName("my-div");
const sect = document.getElementById("sect-qwe");
const sectXz = document.getElementById("sect-xz");
const sectMsg = document.getElementById("sect-msg");
const day = document.getElementById("day");
const numberPr = document.getElementById("number-pr");

let check = new Array();

const costs = new Map([
  [0, 10000000],
  [1, 3500000],
  [2, 2500000],
  [3, 2600000],
  [4, 3000000],
  [5, 5000000],
  [6, 2500000],
  [7, 2600000],
]);
let das;
function choice(n) {
  for (let i = 0; i < check.length; i++) {
    if (n == check[i]) {
      alert("خودرو ناموجوداست!!");
      return;
    }
  }
  das = n;
  for (let i = 0; i < myDiv.length; i++) {
    myDiv[i].classList.remove("click-red");
  }
  myDiv[n].classList.add("click-red");
  sect.style.display = "block";
  sectXz.style.display = "block";
  sectMsg.style.display = "none";
}
function compute() {
  if (day.value > 30) {
    alert("حداکثرمدت مجازاجاره یکماه است!!!");
    return;
  } else if (day.value <= 0 || day.value == "") {
    alert("عدددرست واردنمایید!!");
    return;
  } else {
    const price = day.value * costs.get(das);
    numberPr.value = price;
  }
}

function messag() {
  const nameCom = document.getElementById("name-com").value;
  const fnameCom = document.getElementById("fname-com").value;
  const number = document.getElementById("number").value;
  if (nameCom == "" || fnameCom == "" || number == "") {
    alert("لطفاتمام فیلدهارا پرکنید!!!");
    return;
  } else {
    sect.style.display = "none";
    sectXz.style.display = "none";
    sectMsg.style.display = "block";
    myDiv[das].style.opacity = "0.3";
    myDiv[das].style.borderColor = "#aaa";
    check.push(das);
  }
}
