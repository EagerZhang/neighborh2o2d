var leftBtn = document.getElementById('leftBtn');
// var midBtn = document.getElementById('midBtn');
var rightBtn = document.getElementById('rightBtn');
var totalNum = 22; //所有作品量-1

// var artistBtn = document.getElementById('artistPage');
// var toIndexBtn = document.getElementById('toIndexPage');

var toEnPage = document.getElementById('toEnPage')


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

//使用get方法加载json文件
function readFile(file, callback) {  
    var rawFile = new XMLHttpRequest();  
    rawFile.overrideMimeType("application/json");  
    rawFile.open("GET", file, true);  
    rawFile.onreadystatechange = function() {  
        if (rawFile.readyState === 4 && rawFile.status == "200") {  
             callback(rawFile.responseText);  
        }  
    }  
    rawFile.send(null);  
} 

//防止index越界，当超出上界（totalNum）时返回第一个作品，当超出下界（0）时返回最后一个作品
function antiOverflow(value, increment) {
    var returnVal = value+increment;
    if(returnVal<0){
        returnVal = totalNum;
    }
    if(returnVal>totalNum){
        returnVal = 0;
    }
    return returnVal;
}

function update(index, data){
    project = document.getElementById("project_name");
    project.innerHTML = data[index].project[0].name;

    project = document.getElementById("project_text");
    project.innerHTML = data[index].project[0].text;

    video = document.getElementById("interview_video");
    video.src = data[index].video[0].link;

    noVideo = document.getElementById("no_video");
    noVideo.innerHTML = data[index].video[0].no_video;


    artist = document.getElementById("artist_name");
    artist.innerHTML = data[index].artist[0].name;

    artist = document.getElementById("artist_text");
    artist.innerHTML = data[index].artist[0].text;

    artist = document.getElementById("artist_contact_1");
    artist.innerHTML = data[index].artist[0].contact1;

    artist = document.getElementById("artist_contact_2");
    artist.innerHTML = data[index].artist[0].contact2;

    artist = document.getElementById("artist_contact_3");
    artist.innerHTML = data[index].artist[0].contact3;

    artist = document.getElementById("artist_contact_4");
    artist.innerHTML = data[index].artist[0].contact4;

    img = document.getElementById("workimg1");
    img.src = data[index].workimg[0].img1;

    img = document.getElementById("workimg2");
    img.src = data[index].workimg[0].img2;


    img = document.getElementById("workimg3");
    img.src = data[index].workimg[0].img3;


    img = document.getElementById("workimg4");
    img.src = data[index].workimg[0].img4;


    img = document.getElementById("workimg5");
    img.src = data[index].workimg[0].img5;


    img = document.getElementById("workimg6");
    img.src = data[index].workimg[0].img6;

    img = document.getElementById("slideimg1");
    img.src = data[index].workimg[0].img1;

    img = document.getElementById("slideimg2");
    img.src = data[index].workimg[0].img2;


    img = document.getElementById("slideimg3");
    img.src = data[index].workimg[0].img3;


    img = document.getElementById("slideimg4");
    img.src = data[index].workimg[0].img4;


    img = document.getElementById("slideimg5");
    img.src = data[index].workimg[0].img5;


    img = document.getElementById("slideimg6");
    img.src = data[index].workimg[0].img6;

    keyword = document.getElementById("keyword1");
    keyword.innerHTML = data[index].keyword[0].word1;

    keyword = document.getElementById("keyword2");
    keyword.innerHTML = data[index].keyword[0].word2;

    keyword = document.getElementById("keyword3");
    keyword.innerHTML = data[index].keyword[0].word3;
}



function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    if (isNaN(parseInt(urlparameter))) {
        urlparameter = defaultvalue;
    }
    return urlparameter;
}

var status = false; 

readFile("./data_cn.json", function(jsonData){ 
    var param = parseInt(getUrlParam("index",0));
    console.log(param);

    //所有使用了json数据的代码都要写在这里面 
    var data = JSON.parse(jsonData);  
    //console.log(data); 
    
    //var i = randomNum(0,totalNum); //随机生成一个index
    var i = param;
    update(i,data);

    //切换至该页资料的英文
    toEnPage.onclick = function(){
        window.location.href = 'http://' + window.location.host + '/homepage.html?index='+i;
    }

    //以下为视频控件
    // midBtn.onclick = function () {
    //     if (myVideo.paused) {
    //         myVideo.play();
    //     } else {
    //         myVideo.pause();
    //     }
    // }

    leftBtn.onclick = function () {
        i= antiOverflow(i, -1);
        update(i,data);
        window.location.href = 'http://' + window.location.host + 'neighborh2o2d.github.io/敲敲门.html?index='+i;
    }

    rightBtn.onclick = function () {
        i = antiOverflow(i, 1);
        update(i,data);
        window.location.href = 'http://' + window.location.host + 'neighborh2o2d.github.io/敲敲门.html?index='+i;
    }

    // artistBtn.onclick = function(){
    //     window.location = './artist.html';
    // }

    // toIndexBtn.onclick = function(){
    //     window.location = './index.html';
    // }

  

    window.onkeypress = function () { 
        i = randomNum(0,totalNum);
        console.log(i);
        window.location.href = 'http://' + window.location.host + '/homepage.html?index='+i;
    };

});




