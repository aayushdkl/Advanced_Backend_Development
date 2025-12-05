//Demonstrating toPrimitve using toNumber
let obj = {}
console.log(10 - obj) //obj.valueOf gives us --> object , toString gives us -->'[object Object]'
console.log(obj - obj)

let obj1 = {
  x: 9,
  y: 8,
}
console.log(100 - obj1)

let obj2 = {
  x: 7,
  valueOf() {
    return 99
  },
}
console.log(100 - obj2)

let obj3 = {
  toString() {
    return "50"
  },
}

console.log(100 - obj3)

//returning an object
let obj4 = {
  toString() {
    return {}
  },
}

console.log(100 - obj4)
