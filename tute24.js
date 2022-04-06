
//  Date and time------------
let today=new Date();
// console.log(today)

// if we want to set new Date

let otherDate=new Date('8-2-2021 08:25:29')
// console.log(otherDate)


// get date and   time

let a=otherDate.getTime();
a=otherDate.getDay()
a=otherDate.getMinutes();
a=otherDate.getSeconds()
a=otherDate.getMonth()
// console.log(a)

// set new date and  time in existing 

a=otherDate.setDate(23)
a=otherDate.setMonth(6)

// console.log(otherDate)


// -------IMPORTANT----------

let d=new Date();
console.log(d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate())
console.log(d.getHours()+'.'+d.getMinutes()+'.'+d.getSeconds())


// running watch--------

let myVar = setInterval(myTimer ,1000);
let sty=document.getElementById("clock")
sty.style.border="thick solid #0000FF"
function myTimer() {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}