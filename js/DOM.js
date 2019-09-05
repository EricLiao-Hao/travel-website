var farms = [
{
  farmer: '理查',
  cat:'Meow',
},
{
  farmer: '艾瑞克',
  cat:'蒙古、四川、西藏',
}];
//Show 出農場主人的名字

//innerHTML方式修改HTML內部
// var el= document.querySelector('.list');
// var farmsLen = farms.length;
// var str='';
//
// for (i=0 ; i<farmsLen ; i++){
//
//   var content ='<li>'+farms[i].farmer +'</li>'
//   str += content ;
// }
// el.innerHTML = str;
// //加入一個id給el
// el.setAttribute('id', 'strId');


//使用creatElement方式修改HTML內部
var el=document.querySelector('.list');
var farmsLen = farms.length;

for (var i = 0; i <farmsLen; i++) {
  var content = document.createElement('li');
  content.textContent = farms[i].farmer;
  el.appendChild(content);
}
el.setAttribute('id', 'strId');
