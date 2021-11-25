$( window ).scroll(function() {
    /*
    $(".page_header").css("position","fixed");
    $(".page_header").css("box-shadow","0 0 10px grey");
   */
   var windowTop = $(window).scrollTop();
   var page_header= $('.page_header').height();
   if(windowTop > page_header){
    $(".page_header").css("position","fixed");
    $(".page_header").css("box-shadow","0 0 10px grey");
   }
   else{
    $(".page_header").css("position","relative");
    $(".page_header").css("box-shadow","none");
   }
});

$("#sidebar_press").on("click",function(){
   $(".page_sidebar").css("width","70%");
});

$("#sidebar_close").on("click",function(){
    $(".page_sidebar").css("width","0%");
 });

