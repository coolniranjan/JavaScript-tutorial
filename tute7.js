
// ---------------------  ARRAY ------------------

// [1] declaration of  Array

    // (a) By array literal

    let arr=['niranjan',40,[3,5]];

    // (b) By array literal

    let arr1=new Array();
    arr1[0]="niranjan";
    arr1[1]=90;
    arr1[2]="rajes";

    // (c) By using an Array constructor (using new keyword)


    let arr2=new Array(4,5,6);


// [2] accessing of array(itterating )

    // (a)

    console.log(arr[0]);
    console.log(arr[1]);

    // (b)

    let len=arr2.length;
    console.log(len);

    for(let i=0;i<len;i++){
        document.write(arr[i])
        document.write("</br>")
    }

    // (c ) 

    let arr1=[1,4,34,22];
        arr1.forEach(function(element)
        {console.log(element);});

// [3] changing the value of Array

    arr[0]="ranbjan";
    console.log(arr);


// [4] array methods

    let val=arr.indexOf(40);

    arr.push(90);  //add to last

    arr.pop();    // remove from last

    arr.unshift(70); //add to start

    arr.shift(80); //remove from start

    arr.splice(1,2)

    arr.reverse();


    console.log(arr);


// -------------------OBJECTS-----------------

// [1] declaration of objects

// (a) By object literal

let obj={name:"niranjan",
         mark:89,
        pin:847108,
        village:"bairiyahi"
    }


// (b) By creating instance of Object

let obj1=new Object();

obj1.id=90;
obj1.name="nitranjan";




// [2] accessing of elements of objects

console.table(obj1)

console.log(obj.village)