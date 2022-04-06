
// --------------- about prototype ------------


let obj={
    name:"niranjan kumar",
    id:30,
    address:"bairiyahi",
    run:function(salary){
        console.log(salary)
    }
}
// console.log(obj);
obj.run(20)

function school(myBranch){
    this.name="niranjan",
    this.id=20,
    this.school="DAV"
    this.Branch=myBranch
}

// school.HOD="rajesh yadav" //IF We want to set HOD name in school constructor outside then
// console.log(obj2.HOD)// by this method we can not add.so that with the help of prototype we can add and access
school.prototype.HODName="rajesh yadav"
let obj1=new school("compuer science")
let obj2=new school("civil")
console.log(obj1.HODName)



function Class(){
    this.name='raju',
    this.id=20,
    this.collageName='Galgotia'

}
Class.prototype.stream="computer Science";
let cl1=new Class()
console.log(cl1.stream)