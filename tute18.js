
// --------------click event---------------

let btn=document.getElementById("btn");
btn.addEventListener("click",fun1);

function fun1(e){
    console.log("thanks",e)
    e.preventDefault();
}

// ---------------- hover event ----------------


let a=document.getElementById("heading");
a.addEventListener("mousemove",fun2);
function fun2(){
    document.getElementById("heading").style.color="red";
}

a.addEventListener("mouseout",fun3)
function fun3(){
    document.getElementById("heading").style.color="black";
}

