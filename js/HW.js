var hei = document.querySelector('#heiId');
var wei = document.querySelector('#weiId');
var btn = document.querySelector('.inBtn');
var result = document.querySelector('.contentUl');
var clear = document.querySelector('#clearAll');
var bmiData = JSON.parse(localStorage.getItem('bigData')) || [];


console.log(bmiData);

update();

function calData(e){
  e.preventDefault();
  var heiNum = hei.value;
  var weiNum = wei.value;
  var lightBar = "";
  var res =   ((weiNum) / (heiNum * heiNum * 0.01 * 0.01)).toFixed(2);

  if (res == NaN) {
    alert('欄位不可為空');
    return;
  }
  else if( heiNum == ''){
    alert('尚未輸入身高');
    return;
  }
  else if ( weiNum == '') {
    alert('尚未輸入體重');
    return;
  }

  else if(res<18.5) {
        status = '過輕';
        bar = 'bluebar';
        eva = 'nice';
        btn.setAttribute("class","blue");
        btn.textContent = '過輕!';
    }else if(18.5<=res && res<24) {
        status = '理想';
        bar = 'greenbar';
        eva = 'nice';
        btn.setAttribute("class","green");
        btn.textContent = '理想!';
    }else if(24<=res && res<27) {
        status = '過重';
        bar = 'orange1bar';
        eva = 'nice';
        btn.setAttribute("class","orange1");
        btn.textContent = '過重!';
    }else if(27<=res && res<30) {
        status = '輕度肥胖';
        bar = 'orange2bar';
        eva = 'bad';
        btn.setAttribute("class","orange2");
        btn.textContent = '輕度肥胖!';
    }else if(30<=res && res<35) {
        status = '中度肥胖';
        bar = 'orange3bar';
        eva = 'bad';
        btn.setAttribute("class","orange2");
        btn.textContent = '中度肥胖!';
    }else if(res>=35) {
        status = '重度肥胖';
        bar = 'redbar';
        eva = 'bad';
        btn.setAttribute("class","red");
        btn.textContent = '重度肥胖!';
    }
   var  data = {
      bar: bar,
      status: status,
      eva: eva,
      height: heiNum,
      weight: weiNum,
      res: res,
    }

    bmiData.push(data);
    update();
    localStorage.setItem('bigData',JSON.stringify(bmiData));

}
function update(){
  var str = '';
  var len = bmiData.length;
    for (var i=0; i< len ; i++){
      str += '<li class="'+ bmiData[i].bar +'"><span class="'+ bmiData[i].eva +'">'+ bmiData[i].status +' </span><span class="place1">BMI '+ bmiData[i].res +'</span> <span class="place2">height '+ bmiData[i].height +'cm</span> <span class="place3">weight '+ bmiData[i].weight +'kg</span></li>'
      result.innerHTML = str;
    }
}

function del(e){
  e.preventDefault();
  localStorage.clear(bmiData);
  alert('清除成功!');
  location.reload();
}
btn.addEventListener('click', calData);
clear.addEventListener('click', del);
