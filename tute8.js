
// -------------------- IF ELSE ------------------

let a=90;
 if(a<20){
     console.log("you can vote");
 }
 else if(a==90){
     console.log("you should die")
 }
 else{
    console.log("you are not eligible");
 }


//  ----------------------SWITCH CASE------------------------

let n=20;
switch(n){
    case 18:
        let val=`value of a is ${n}`;
        document.body.innerHTML=val;

    case 20:
        let val1=`value of a is ${n}`;
        document.body.innerHTML=val1;

    case 48:
        let val2=`value of a is ${n}`;
        document.body.innerHTML=val2;



    default:
        break;

}
