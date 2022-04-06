
// ---------------- FOR LOOP --------------------
console.log("about for loop.........")


    for(let i=0;i<10;i++){
        console.log(i)
    }

// (a) forEach is used to itterate element of array

let arr=[1,4,34,22];

arr.forEach(function(element)
    {console.log(element);});

// (b) for used in to acess value of objects

let obj={name:"niranjan",
        age:30,
        village:"bairiyahi"
    }

    for(let key in obj){
        console.log(obj[key])
    }

// ---------------- While loop -------------------
console.log("about while loop.........")


n=0;
while(n<10){
    console.log(n);
    n=n+1;
}

// ---------------- do while loop -----------------
console.log("about do while.........")


let n1=1;

do{
    console.log(n1);
    n1++;
}while(n1>10);


// -------------------- break -----------------------
console.log("about Break.........")

for(let i=0;i<10;i++){
    console.log(i)
    if(i==5){
        break;
    }
}

// ----------------- continue ------------------
console.log("about continue...........")

for(let i=0;i<10;i++){
    
    if(i==5){
        continue;
    }
    console.log(i)
}
