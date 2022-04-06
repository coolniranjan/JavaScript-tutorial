
//------creating, removing and replacing Element----



// 1.creating Element-----------

let ele=document.createElement('div');

ele.className='child';

ele.id='divId';

ele.setAttribute('title','mytitle');

ele.innerHTML="<b>this is created using js</b>"

console.log(ele);

let ul=document.querySelector('.container');//select where we want to set this

ul.appendChild(ele);




// 2.replace Element------------------




let rep=document.getElementById('heading');// i want to replace heading to another element

// ---------syntex----------

let elem=document.createElement("h4");

elem.className='child';

elem.id='child';

elem.innerHTML="welcome to another replace heading";

console.log(elem);

rep.replaceWith(elem);

// --------------we want to replace child 2------------------------------------
let cls=document.getElementsByClassName('container');

re=cls[0].children[2]

console.log(re)

// -------- syntex --------------------------------

let ele1=document.createElement("div");

ele1.className='child';

ele1.id='child1';

ele1.innerHTML="replace to child 2 ";

console.log(ele1);

re.replaceWith(ele1);

// 3.removing attribute-------------

// remove id from ele1 element

ele1.removeAttribute('id');