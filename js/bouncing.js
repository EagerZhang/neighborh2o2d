//生成随机整数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}

var obj=document.getElementById("bouncingBox");
var directX=1; //X轴方向
var directY=1; //Y轴方向
var sunX=randomNum(0,(window.innerWidth-obj.offsetWidth)/2); //设定初始X坐标
var sunY=randomNum(0,(window.innerHeight-obj.offsetHeight)/2); //设定初始Y坐标
var delay = 10;
var velocity = 0.7; //运动速度

function sunMov(){
    //定两个方向
    sunX+=directX*velocity;
    sunY+=directY*velocity;
    //修改div的left top
    obj.style.top=sunY+"px";
    obj.style.left=sunX+"px";
    //判断何时转向
    //offestWidth可以返回当前这个对象的实际宽度
    if(sunX+obj.offsetWidth>=window.innerWidth || sunX<=0){
      directX=-directX;
    }
    if(sunY+obj.offsetHeight>=window.innerHeight || sunY<=0){
      directY=-directY;
    }
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

var device = isPC();
var count = 0;
console.log(device);

var move = setInterval("sunMov()",delay);
if (device){
    obj.onmouseover=function(){clearInterval(move)};
    obj.onmouseout=function(){move=setInterval("sunMov()", delay)};
}
else{
    obj.onclick = function(){   
        count = count + 1;
        if (count % 2 == 1){clearInterval(move);}
        else{move=setInterval("sunMov()", delay);}
    }
};