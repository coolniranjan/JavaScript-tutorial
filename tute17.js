
// ----------- Events and Events object ---------------


let a=document.getElementById("heading");
a.addEventListener('click',function(e){
    // console.log(e);

    variable=e.target;
    variable.style.color="red";

    variable.style.textAlign="center";

    
    variable=e.target.id;
    console.log("id is:",variable)
    
})