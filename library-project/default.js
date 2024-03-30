const books = new Array();
const resultBody = document.getElementById("result-body");
const bookName = document.getElementById("book-name");

function addBook() {
  if (bookName.value != "") {
    books.push(bookName.value);
  bookName.value = "";
  indexpush();
  }
}
function deletBook(i) {

    if(confirm("آیا قصد حذف کتاب را دارید؟")){
      books[bookName.value-1] = undefined;
      books[i] = undefined;
    indexpush();
    }
  }
function indexpush(){
  let newRecord = "";
  for(let i = 0; i < books.length; i++){
    if (books[i] == undefined) continue;
   newRecord +=
    "<tr><td>" +
    (i + 1) +
    "</td><td>" +
    books[i] +
    "</td><td>" +
    "<a onclick='deletBook(" + i +")'>" + "X" + "</a></td></tr>";
  }
  resultBody.innerHTML = newRecord;
}