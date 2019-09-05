var el = document.querySelector('.button');


//擷取點擊button時滑鼠的座標
// el.onclick = function (e){
//   console.log(e);
// }
el.addEventListener('click', function(e){
  alert("Hello");
},false);


var elOn = document.querySelector('.btnOn');
elOn.onclick = function(){
  alert('on-1');
};

elOn.onclick = function(){
  alert('on-2');
};


//事件監聽
var elAd = document.querySelector('.btnAdd');
elAd.addEventListener('click', function(e) {
  alert('add-1');// body...
},);

elAd.addEventListener('click', function(e) {
  alert('add-2');// body...
},);

//True - 從BODY往下找
//False - 從指定元素往上找 (預設)
var elbox =document.querySelector('.box');
elbox.addEventListener('click', function(e) {
  e.stopPropagation(); //不會往上找到Body了
  alert('box')
,false});

var elbody = document.querySelector('.body');
elbody.addEventListener('click', function(e) {
  // alert('body')
});

var elLink =document.querySelector('.link');
elLink.addEventListener('click', function(e) {

  //取消元素的默認行為
  //原本會前往指定網頁
  //ex:submit按鈕，先透過我的JS查詢表單是否有誤，post去傳送
  e.preventDefault();
  console.log("test");
});
