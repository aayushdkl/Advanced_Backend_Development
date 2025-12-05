// let obj = {}
// console.log(typeof obj.toString())
// console.log(obj.toString())
//Every object has a toString operation defined in it
//It is a string of "[object Object]"

//Default implementation
let objx = {
  toString() {
    //By default it gives [object Object]
  },
  valueOf() {
    //By default it gives the same object that was passed
  },
}

//Overriding the toString functions
let obj1 = {
  toString() {
    return "I am learning javascript"
  },
}
console.log(obj1.toString())

let obj2 = {
  toString() {
    return 10
  },
}
console.log(obj2.toString())
console.log(typeof obj2.toString())

//Overriding the valueOf functions
let obj4 = {}
console.log(obj4.valueOf())

let obj5 = { x: 10, y: 20, z: "there we go" }
console.log(obj5.valueOf())

let obj3 = {
  x: 10,
  valueOf() {
    return 10
  },
}
console.log(obj3.valueOf())
