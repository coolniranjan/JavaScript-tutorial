// ---------------- object literals ,constructor and object oriented programming -----------

// ---------- object litrals -------

let car = {
    name: 'maruti suzuki',
    run: function (speed) {
        console.log("speed:", speed)
        console.log("car is running")
    }
}
// car.run(200)
// console.log(car)

//-------- but if we store details of  100 car then it is hard to make literals of each so that we make constructor ----

function GeneralCar(givenName, givenSpeed) {
    this.name = givenName,
    this.speed = givenSpeed
    this.run = function () {
        console.log(`${this.name} is running`)
    }
    this.analyze = function () {
        console.log(`speed of car is ${this.speed}`)
    }
}
let car1 = new GeneralCar('honda', 89);
let car2 = new GeneralCar('suzuki', 120);
GeneralCar.prototype.id = 90;
console.log(car2)
console.log(car2.id)