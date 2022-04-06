
/* -------------------Element selector----------------

1.single Element selsector
2.Multi Element selector

*/


// 1.single element selector-----------

// let element=document.getElementById('myfirst')
// element=element.className
// element=element.childNodes
// element=element.parentNode
// element=element.style.color='red'
// element=element.innerText="this is change text"
// element=element.innerHTML="<b>this is niranjan</b>"
// console.log(element)


// -------query selector ---------------------


// let q=document.querySelector('#myfirst')
// q=q.style.color="red";
// q=document.querySelector('h3')
// q=document.querySelector('div')
// q=q.style.color="green"
// console.log(q)


// 2.Multi Element selector-----------------


// let m=document.getElementsByClassName('conatiner')
// console.log(m)

// let sel=document.getElementsByClassName('child')
// console.log(sel)
// console.log(sel[2])


let m=document.getElementsByClassName('child')
m=document.getElementsByClassName('container')
console.log(m[0].getElementsByClassName('child'))

m=m[0].getElementsByClassName('child')

// ---------- forEach is used to iterate element------------------


Array.from(m).forEach(element =>{console.log(element);
element.style.color="red"})