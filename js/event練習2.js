var country = [
  {
    farmer:'查理',
    place:'前鎮區',
  },
  {
    farmer :'艾瑞克',
    place:'苓雅區',
  },{
    farmer : '寇帝',
    place :'苓雅區',
  }]

var area=document.getElementById('areaId');
var show=document.querySelector('.list');
function updateList(e){
  var select = e.target.value;
  var str= '';
  for (var i = 0; i < country.length; i++) {
    if(select == country[i].place){
      str += '<li>'+ country[i].farmer +'</li>';
    }
  }
  show.innerHTML = str;
}
area.addEventListener('change', updateList ,false);

//發射火箭

var body = document.body;

function goRocket(e) {
  // console.log(e.keyCode); 顯示你鍵盤編號

  switch(e.keyCode){
    case 49:
      document.querySelector('.rocket1').style.bottom ='400px';
      break;
    case 50:
      document.querySelector('.rocket2').style.bottom ='2000px';
      break;
    case 51:
      document.querySelector('.rocket3').style.bottom ='2000px';
      break;
    case 81:
      document.querySelector('.rocket1').style.bottom ='0px';
      break;
  }
}
                //按鍵盤起反應    function名
body.addEventListener('keydown', goRocket,false);
