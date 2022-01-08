var open_link_type=0;//0 means fa-bars
$("#open_links").on("click",function(){
    if(open_link_type == 0){
      $(this).removeClass("fa fa-bars");
      $(this).addClass("fa fa-times");
      open_link_type=1;
      
      $(".mobile_link_section").css("visibility","visible");    
    }
    else{
        $(this).removeClass("fa fa-times");
        $(this).addClass("fa fa-bars");
        $(".mobile_link_section").css("visibility","hidden");
        open_link_type=0;
    }
});

$(".mobile_link_container a").on("click",function(){
    $("#open_links").removeClass("fa fa-times");
    $("#open_links").addClass("fa fa-bars");
    $(".mobile_link_section").css("visibility","hidden");
        open_link_type=0;
});


$("a").on("click",function(){
    
  var href = $(this).attr("href");
  var target = href.substr(href.indexOf("#"));
  if( target=== '#about'){
    $('html,body').animate({
        scrollTop: $("#about").offset().top-80
    }, 1000);
  }
  else if( target=== '#features'){
    $('html,body').animate({
        scrollTop: $("#features").offset().top-80
    }, 1000);
  }
  else if( target=== '#services'){
    $('html,body').animate({
        scrollTop: $("#services").offset().top-80
    }, 1000);
  }
  else if( target=== '#news'){
    $('html,body').animate({
        scrollTop: $("#news").offset().top-80
    }, 1000);
  }
  else if( target=== '#contact'){
    $('html,body').animate({
        scrollTop: $("#contact").offset().top-80
    }, 1000);
  }
  
  
});
$("#service_button").on("click",function(){
  $('html,body').animate({
    scrollTop: $("#services").offset().top-80
}, 1000);
});

$("#contact_button").on("click",function(){
  $('html,body').animate({
    scrollTop: $("#contact").offset().top-80
}, 1000);
});

$(document).ready(function() {

    
    
    var serviceTop = $('#services').offset().top+100;
    var featureTop = $('#features').offset().top+80;
    var newsTop = $('#news').offset().top+80;
    var aboutTop = $('#about').offset().top+80;
    var contactTop = $('#contact').offset().top+80;
    
    var height=window.innerHeight;
    
    if (serviceTop <  height) {
        $(".service_unit").addClass("ani");
      }
      if (newsTop <  height) {
        $(".news_unit").addClass("ani");
      }
    $(window).scroll(function() {  
      var scrollPos = $(document).scrollTop();  
      var windowTop = $(window).scrollTop();
      if (serviceTop <  windowTop + height) {
        $(".service_unit").addClass("ani");
        $(".link_class").css("color","rgb(51,51,51)");
        $("#service_link").css("color","#03c4eb");
      }
      if (featureTop+300  < windowTop + height) {
        $(".feature_unit").addClass("ani");
        $(".link_class").css("color","rgb(51,51,51)");
        $("#feature_link").css("color","#03c4eb");
      }
      if (newsTop+300 <  windowTop + height) {
        $(".blog_unit").addClass("ani");
        $(".link_class").css("color","rgb(51,51,51)");
        $("#news_link").css("color","#03c4eb");
      }
      if (aboutTop + 300 < windowTop + height) {
        $(".about_unit").addClass("ani");
        $(".link_class").css("color","rgb(51,51,51)");
        $("#about_link").css("color","#03c4eb");
      }
      if (contactTop+300 <  windowTop + height) {
        $(".contact_unit").addClass("ani");
        $(".link_class").css("color","rgb(51,51,51)");
        $("#contact_link").css("color","#03c4eb");
      }
    });
    
    var url="http://myaccountsguru.herokuapp.com/update_visitors";
	 var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
       if(this.readyState == 4 && this.status == 200 ){
         
          
          
         } 
    }
    xhttp.open("GET",url,true);
    xhttp.send();
    
    
    var url="news_fetch_string";
	 var xhttp_1=new XMLHttpRequest();
   xhttp_1.onreadystatechange=function(){
      if(this.readyState == 4 && this.status == 200 ){
        
          document.getElementById('blog_container').innerHTML+=this.responseText;
          
         
        } 
   }
   xhttp_1.open("GET",url,true);
   xhttp_1.send();
    
    
    
  });

  $(function () {
    count = 0;
    var val=0;
    wordsArray = ["PERFECTION","RESPONSIVE","EFFICIENT"];
    setInterval(function () {
    	count++;
    	val=count % 3;
      $("#word").fadeOut(2000, function () {
        $(this).text(wordsArray[val]).fadeIn(2000);
      });
      
      
    }, 4000);
  });
  
  function isEmail(email) {
	  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return regex.test(email);
}

  
  $("#submit").on("click",function(){
	 var first=$("#first").val();
	 var last=$("#last").val();
	 var email=$("#email").val();
	 var phone=$("#phone").val();
	 var msg=$("#msg").val();
	 
	 if(first==""){
		 alert("Please Enter Your First Name");
	 }
	 else if(last==""){
		 alert("Please Enter Your Last Name");
	 }
	 else if(email==""){
		 alert("Email Can't Be Empty");
	 }
	 else if(!isEmail(email)){
		 alert("Please add a valid Email ");
	 }
	 else if(msg==""){
		 alert("Comment or Message can't be empty");
	 }
	 else{
	 var url="https://myaccountsguru.herokuapp.com/get_enquiry";
	 var param="first="+first+
	           "&last="+last+
	           "&email="+email+
	           "&phone="+phone+
	           "&msg="+msg;
	       

	       var xhttp=new XMLHttpRequest();
	       xhttp.onreadystatechange=function(){
	          if(this.readyState == 4 && this.status == 200 ){
	             
	                  alert("Enquiry Submitted");
	                  window.open("index.html","_self");
	             
	              
	            } 
	       }
	       xhttp.open("GET", url+"?"+param,true);
	       xhttp.send(); 
	 }
  });


    $('#sendmail').click(function (event) {
      var email = 'business.myag@gmail.com';
      var subject = 'Test';
      var emailBody = 'Hi Sample,';
      
      document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    });
