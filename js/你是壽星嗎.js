// var farmCorn = [];
// farmCorn.push(5);
// farmCorn.push(8);
// farmCorn.push(10);
// console.log(farmCorn);
//
// farmCorn[0] = 6;
// farmCorn[3] = 50;
// console.log(farmCorn);
//
// farmCorn.push(25);
// console.log(farmCorn);
//
// console.log('我有'+ farmCorn.length + '座玉米田');


// var house ={
//   room: 3,
//   father: 'Eric',
//   cats: ['蒙古','四川','西藏'],
//   sucada:35,
//   bao:13,
//   goDinner:  function() {
//     console.log(house.cats[0]+'，吃罐罐囉!');
//   },
//   poutryTotal: function() {
//     var num = house.sucada + house.bao;
//     console.log('我們家裡總共有' + num +'隻烏龜');
//   }
// }
//
// house.goDinner();
// house.poutryTotal();

var myMonth = 10;
var thisMonth =8;
var birthdayCheck = myMonth == thisMonth;
if (myMonth == thisMonth){
  document.getElementById('birthdayId').textContent = "是的，我是本月壽星";
}
else {
  document.getElementById('birthdayId').textContent = "不，我不是這個月生日";

}
var bookPeople = 3;
var nowPeople = 2;
if (bookPeople == nowPeople){
  document.getElementById('peopleId').textContent = '我們人都到囉!';
}
else {
  var needPeople = bookPeople - nowPeople;
  document.getElementById('peopleId').textContent = "是的，我們還差" + needPeople +"位才到齊";

}
document.getElementById('peopleId').textContent = peopleCheck;


var hungry = 8 ; //飢餓指數

function eat(food){
  console.log('我現在要吃'+food);
}

if (hungry <=3) {
  eat("pizza");
}
else if (hungry >3 && hungry <=7) {
  eat("salad");
}
else {
  console.log("我不餓，不吃");
}
