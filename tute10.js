// ---------------function---------------------


// (a) funtion not returning anything

function greet(name,name1="not give value"){
    console.log(`Hii good morning ${name} and ${name1} `)

}
greet("niranjan","ram");

// (b) funtion returing anything

function greet1(name){
    console.log(`Hii good morning ${name}`)
    return 1;

}
let ex=greet1("niranjan");
console.log(ex);

// (c) storing value of funtion in varibale

let greet2=function(n1,n2){
    return (`welcome ${n1} and ${n2} to js tutorial....`)
}
let val2=greet2("niranjan","ram")
console.log(val2);