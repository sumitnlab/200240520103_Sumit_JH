function submithere(){
    // var x = document.querySelector("#id1").value;

    // var y = document.querySelector("#id2").value;

    if(document.querySelector("#id1").value=="")
    {
         alert("Please Provide Valid Username");
    }
    else if(document.querySelector("#id2").value=="")
    {
         alert("Please Provide Valid password");
    }
    else{
        return true;
    }
    document.querySelector("#id1").value=="";
    document.querySelector("#id2").value=="";
  
    
    // if(x=="")
    // {
    //     alert("Please Fill Data")
  
    // }
   
    // else if(y=="")
    // {
    //     alert("Please Fill Data")
       
    // }
    // else
    // {
    //     return true;
    // }
   

    
}