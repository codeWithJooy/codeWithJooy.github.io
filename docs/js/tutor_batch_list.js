$("#add_batch").on("click",function(){
    var batch_name=$("#batch_name").val();
    var batch_code=$("#batch_code").val();
    var batch_date=$("#batch_date").val();
    var batch_category=$("#batch_category").val();
    var batch_course=$("#batch_course").val();
    var batch_subjects=$("#batch_subjects").val();

    var url="";
    var param="batch_name="+batch_name+
              "&batch_code="+batch_code+
              "&atch_date="+batch_date+
              "&batch_category="+batch_category+
              "&batch_course="+batch_course+
              "&batch_subjects="+batch_subjects;

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
       if(this.readyState == 4 && this.status == 200){
         
        }  
       };
    xhttp.open("GET", url+"?"+param,true);
    xhttp.send();
 });