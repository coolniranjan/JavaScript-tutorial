// --------------- prototype inheritence -----------

// ----------basic------------

const proto={
    slogan:function(){
        return `this is best company`
    },
    changeName:function(name){
        this.name=name
    }
}

// this code create harry Object--

let harry=Object.create(proto);
harry.name="niranjan";
harry.role="programmer";
harry.changeName("rajan")
// console.log(harry)


// ----------- inheritence -----------------

function Employee(name,salary,experience){
    this.name=name,
    this.salary=salary,
    this.experience=experience
}
// we want to add slogan then with the help of proto type we can do that---
Employee.prototype.slogan=function(){
    return `this is best employee`;
}
let obj=new Employee("raju",3000,3);
// console.log(obj.slogan())

//---- we inherit employee constructor -----

function programmer(name,salary,experience,launguage){
    Employee.call(this,name,salary,experience);
    this.launguage=launguage;

}
// inherit the constructor------
programmer.prototype=Object.create(Employee.prototype);

// manually set constructor---
// programmer.prototype.constructor=programmer;

let rohan=new programmer("rohan",30000,3,"python");
console.log(rohan)
console.log(rohan.slogan())