// ------------------- ES6 tutorial -----------------

// ----- class -----------

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision
    }
    slogan(){
        return `this is best company and ${this.name} is best employee`
    }
    joiningYear(){
        return "you had join in the company in :"+(2022-this.experience)
    }
    static add(a,b){
        return a+b;
    }

}

obj=new Employee("niranjan",34,"cse")
// console.log(obj)
console.log(obj.joiningYear())

console.log(Employee.add(2,3)) //without making object we can call static method 


// ---------------- inheritence --------------------

console.log("---------- output of inheritence-----------")

class programmer extends Employee{
constructor(givenName,givenExperience,givenDivision,givenId,givenlaunguage){
    super(givenName,givenExperience,givenDivision);
    this.id=givenId;
    this.launguage=givenlaunguage
}
favoriteLaunguage(){
    if(this.launguage='python'){
        console.log("python is favorite")
    }
    else{
        console.log("js is favorite")
    }
}
static mul(a,b){
    return a*b;
}
}

let obj1=new programmer("niranjan",30,"parle",20,"python");
console.log(obj1);
obj1.favoriteLaunguage();

console.log(programmer.mul(2,4));