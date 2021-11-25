$('select.study').on('change', function() {
    var val=this.value;
    if(val=='file'){
     $("#overlay").css("display","block");
   $(".batch_modal").css("width","100%");  
   $("#class_modal_card").css("display","block");
    }
 });

 $("add_material").on("click",function(){
    var batch_code=$("#batch_code").val();
    var material_name=$("#material_name").val();
    var material_type="Upload";
    var student_type=$("#student_type").val();

    var url="";
    var param="";

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
       if(this.readyState == 4 && this.status == 200){
         }  
       };
    xhttp.open("GET", url+"?"+param,true);
    xhttp.send();

 });
 

 
 var myDropzone_single= new Dropzone("div#add_material", { url: "#",
            maxFiles:1,
            dictDefaultMessage: "Only one Image can be Added"});