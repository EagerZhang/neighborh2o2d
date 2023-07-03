$(document).ready(function(){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        
        $('#workimg1').css("display", "none");
        $('#workimg2').css("display", "none");
        $('#workimg3').css("display", "none");
        $('#workimg4').css("display", "none");
        $('#workimg5').css("display", "none");
        $('#workimg6').css("display", "none");
     
    
    } else {
        
       

        $(document).ready(function(){

            $('#imageword1').hover(function(){
                $('#workimg1').css("height", "200px");
                }, function(){
                $('#workimg1').css("height", "0");
            });
            
            $('#imageword2').hover(function(){
                $('#workimg2').css("height", "150px");
                }, function(){
                $('#workimg2').css("height", "0");
            });
            
            $('#imageword3').hover(function(){
                $('#workimg3').css("height", "150px");
                }, function(){
                $('#workimg3').css("height", "0");
            });
            
            $('#imageword4').hover(function(){
                $('#workimg4').css("height", "150px");
                }, function(){
                $('#workimg4').css("height", "0");
            });
        
            $('#imageword5').hover(function(){
                $('#workimg5').css("height", "150px");
                }, function(){
                $('#workimg5').css("height", "0");
            });
            
            $('#imageword6').hover(function(){
                $('#workimg6').css("height", "150px");
                }, function(){
                $('#workimg6').css("height", "0");
            });
        
            $('#leftBtn').hover(function(){
                $('#leftBtn').css("cursor", "pointer");
                }, function(){
                $('#leftBtn').css("cursor", "default");
            });
        
            $('#rightBtn').hover(function(){
                $('#rightBtn').css("cursor", "pointer");
                }, function(){
                $('#rightBtn').css("cursor", "default");
            });
        
        });


}
});



















