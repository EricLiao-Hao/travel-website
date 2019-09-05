// //開頭小練習
//
// function greet() {
//   console.log('Hello');
//   console.log('Whats your name');
// }
// count (8,20);
// // var total      //全域變數
// function count(quantity,price) {
//   var total = quantity * price ;   //區域變數
//   console.log("總價格為" + total + " 元");
// }
// // console.log(total);


document.getElementById('cau').onclick = function (){

  var hamPrice = 45;
  var cokePrice = 30;

  var hamNum = parseInt(document.getElementById('hamNumId').value * hamPrice);
  var cokeNum = parseInt(document.getElementById('cokeNumId').value * cokePrice);
  if (hamNum == '' || cokeNum == ''){
      alert('欄位不可為空');
    }
  else{
    document.getElementById('total').textContent =
    hamNum + cokeNum ;
  }
}
function checkContent(e) {
  var str = e.target.value;
  if (str == ''){
    alert('欄位不可為空');
  }
}
var hamNum = document.querySelector('#hamNumId');
var cokeNum = document.querySelector('#cokeNumId');
hamNum.addEventListener('blur',checkContent);
cokeNum.addEventListener('blur',checkContent);

//利用typeof查詢資料屬性 ex:字串or數字?
//parseInt():將資料屬性由字串轉為數字

//return簡易使用：
// function Try(num){
//   var price = 25;
//   var total = price * num;
//   return total;
// }
// var Eric = Try(8);
// console.log(Eric);
