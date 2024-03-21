const tBod = document.getElementById("tBod");
let sumPri = 0;
function btnclick(){
    const name = document.getElementById("name");
    const tFoot = document.getElementById("tFoot");
    const productName = document.getElementById("productName");
    const productPrice = document.getElementById("productPrice");
    const count = document.getElementById("count");
let sum = productPrice.value * count.value;
let newRecord = "<tr>";
 newRecord += "<td>" + productName.value + "</td>";
 newRecord += "<td>" + productPrice.value + "</td>";
 newRecord += "<td>" + count.value + "</td>";
 newRecord += "<td>" + sum + "</td>";
 newRecord += "</tr>";
 tBod.innerHTML += newRecord;
 sumPri += sum;
 tFoot.innerHTML = "مجموع قابل پرداخت: " + sumPri + " تومان";

name.readOnly = "readOnly";
name.disabled = "disabled"

 productName.value = "";
productPrice.value = "";
count.value = "";
}

function printB(){
    window.print();
}