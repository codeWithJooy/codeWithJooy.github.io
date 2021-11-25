$(".day_unit").on("click",function(){
    
    $(".day_unit").removeClass("day_unit_active");
    $(this).addClass("day_unit_active");
   
  });

$("#add_batch_time").on("click",function(){
    
   $("#overlay").css("display","block");
   $(".batch_modal").css("width","100%");  
   $("#class_modal_card").css("display","block");

});
$("#close_new_class").on("click",function(){
    
    $("#overlay").css("display","none");
    $(".batch_modal").css("width","0%");  
    $("#class_modal_card").css("display","none");
 
 });

 $("#add_student").on("click",function(){
    
    $("#overlay").css("display","block");
    $(".batch_modal").css("width","100%");  
    $("#student_modal_card").css("display","block");
 
 });
 $("#close_student").on("click",function(){
    
    $("#overlay").css("display","none");
    $(".batch_modal").css("width","0%");  
    $("#student_modal_card").css("display","none");
 
 });

var class_count=1;
var days=['Monday'];
var start_time=[];
var end_time=[];
var subject="";
var faculty="";
$(".modal_day_unit").on("click",function(){
  $(this).addClass(" modal_day_unit_active");
  var id=$(this).attr("id");
  var start=id+"_start";
  var end=id+"_end";
  var myvar = '<div class="modal_choose_div">'+
    '              <span class="choose_div_text">'+id+'</span>'+
    '              <div class="choose_unit">'+
    '                <span>Class Start Time</span>'+
    '                <input type="time" id="'+start+'">'+
    '              </div>'+
    '  '+
    '              <div class="choose_unit">'+
    '                <span>Class End Time</span>'+
    '                <input type="time" id="'+end+'">'+
    '              </div>'+
    '            </div>';
	
 document.getElementById("batch_time_container").innerHTML+=myvar;
 days.push(id);
 class_count=class_count+1;
});

$(document).on("click","#create_class",function(){
   alert("Hi");
});

