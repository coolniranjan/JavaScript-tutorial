

// --------- Local and session storage --------------- 

// 1. ---------- local storage ------------

localStorage.setItem("name",'niranjan');
localStorage.setItem("village","bairiyahi")

let a=localStorage.getItem("name");
console.log(a)

// localStorage.clear();  //remove all the item from local storage

localStorage.removeItem('name') //remove perticular item

//---------- storing array to local Storage---------

let arr=[2,4,5,'arr'];
localStorage.setItem('arr',JSON.stringify(arr)) //  JSON.stringify is used to convert string to arry

let b=JSON.parse(localStorage.getItem('arr'))  //JSON.parse is used to convert string to array
console.log(b) 



// 2. ------------ sessionStorage -------------

sessionStorage.setItem('sname','ranja')

// all properties are same as local Storage

