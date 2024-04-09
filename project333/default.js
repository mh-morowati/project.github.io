const titleAd1 = document.getElementById("title-ad");
const nameAgence1 = document.getElementById("name-agence");
const picAddress1 = document.getElementById("pic-address");
const yes = document.getElementById("yes");
const location1 = document.getElementById("location");
const price1 = document.getElementById("price");
const metrage1 = document.getElementById("metrage");
const rooms1 = document.getElementById("rooms");
const elevator1 = document.getElementById("elevator");
const parking1 = document.getElementById("parking");
const Wareh1 = document.getElementById("Wareh");
const year1 = document.getElementById("year");
const floor1 = document.getElementById("floor");

const addAdsSec = document.getElementById("add-ads-sec");
const house = new House(
  titleAd1.value,
  yes.value,
  nameAgence1.value,
  elevator1.value,
  floor1.value,
  location1.value,
  metrage1.value,
  parking1.value,
  picAddress1.value,
  price1.value,
  rooms1.value,
  Wareh1.value,
  year1.value
);
HouseHandler.addData(data);
    fillData(HouseHandler.getDataList());
    clearNewAdsBox();
    closeNewAdsBox();

function addAds() {
  addAdsSec.style.display = "block";
}
function search() {}
function exit() {
  addAdsSec.style.display = "none";
}
function putAds() {
    window.onload = function () {
        fillData(HouseHandler.getDataList());
      };
}
function fillData(dataList) {
  let template = document.getElementById("ads-item-template").innerHTML;
  let holder = document.getElementById("my-section");
  holder.innerHTML = "";
  for (let index = 0; index < dataList.length; index++) {
    let currentItemTemplate = template;
    let currentItem = dataList[index];
    currentItemTemplate = currentItemTemplate.replace(
      "__TITLE__",
      currentItem.title
    );
    currentItemTemplate = currentItemTemplate.replace(
      "__PRICE__",
      currentItem.price
    );
    currentItemTemplate = currentItemTemplate.replace(
      "__AGENCY__",
      currentItem.agency
    );
    currentItemTemplate = currentItemTemplate.replace(
      "__IMG__",
      currentItem.image
    );
    holder.innerHTML += currentItemTemplate;
  }
}
