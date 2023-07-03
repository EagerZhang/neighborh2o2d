//video controllers
// var myVideo = document.getElementById('myvideo');
// var leftBtn = document.getElementById('leftBtn');
var midBtn = document.getElementById('midBtn');
// var rightBtn = document.getElementById('rightBtn');


midBtn.onclick = function () {
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}

// leftBtn.onclick = 