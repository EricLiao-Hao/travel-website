//將輸入的資料存入localStorage，並讀取出來:
var btnClass = document.querySelector('.btnClass');
var btnCall = document.querySelector('.btnCall');

function saveName(e){
  var str = document.querySelector('.textClass').value;
  localStorage.setItem('myName',str);
}

btnClass.addEventListener('click',saveName);

btnCall.addEventListener('click', function(e) {
  var str = localStorage.getItem('myName');
  alert('你的名字叫'+ str);
});

var farms =[{
  farmer:'艾瑞克',
  dog:'Pony',
},{
  farmer:'溫蒂',
  dog:'Meow',
}]
//將array轉成string:
var farmsStr =JSON.stringify(farms);
console.log(farmsStr);
localStorage.setItem('famerName',farmsStr);
//將string轉成array:
var getData = localStorage.getItem('famerName');
var farmsAry =JSON.parse(getData);
console.log(farmsAry[0].dog);
//那麼複雜是因為LocalStorage只會保存String的資料

//新的HTML標籤 data-XXX 讀取練習:
var listLi = document.querySelector('.list li');
function showdata(e) {
  var farmNum = e.target.dataset.num;
  var dogNum = e.target.dataset.dog;
  alert('農場編號：' + farmNum +'，一共有'+ dogNum + '隻狗狗');
}
listLi.addEventListener('click', showdata );


var farms= [{
  farmer:'傑森',
},{
  farmer:'巨石強森',
},{
  farmer:'馮迪索',
},{
  farmer:'小勞勃道尼'
}]

var list2 = document.querySelector('.list2');
function updateList() {
  var str= '';
  for (i=0 ; i<farms.length ; i++){
    str += '<li data-num="'+i+'">'+ farms[i].farmer +'</li>'
  }
  list2.innerHTML = str;
}
updateList();

list2.addEventListener('click', function(e) {
  var type = e.target.nodeName;
  var num = parseInt(e.target.dataset.num) ;
  if (type !== 'LI') {return};
  //點到誰就告知所屬編號:
  // alert(farms[num].farmer+'編號是' + num + '號。');

  //刪除選取的資料:
  farms.splice(num,1);
        //從第X筆 刪X筆
  updateList(); //刪除後重新渲染一次確保資料正確
});
