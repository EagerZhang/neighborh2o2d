var totalNum = 23; //所有作品量-1
var toIndexBtn = document.getElementById('toHomepage_en')


//生成index
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

toIndexBtn.onclick = function(){
    i = randomNum(0,totalNum);
    window.location.href = 'http://' + window.location.host + '/homepage.html?index='+i;
}