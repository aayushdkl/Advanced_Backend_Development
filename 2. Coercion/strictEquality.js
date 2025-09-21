// console.log(NaN === NaN)

// let obj = {
//   x: 10,
//   valueOf() {
//     return 100
//   },
// }

// console.log(99 == obj)
// console.log(100 == obj)

let obj1 = { x: 10 }
let obj2 = { x: 10 }
let obj3 = { y: 10 }
console.log(obj1 === obj2) //The reason this is false is because both are different objects in memory. Even though they have same properties and values.
console.log(obj1 === obj3) //They have same values but different properties.
console.log(obj1 === obj1) //This is true because both are same objects in memory.

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
console.log(arr1 === arr2) //false because both are different objects in memory even though they have same values

console.log({ x: 10 } === { x: 10 }) //false because both are different objects in memory even though they have same values

let arr3 = arr1
console.log(arr1 === arr3) //true because both are same objects in memory;

//Why do we even use abstract equality?
//1. Code becomes readable for someone who doesnt know javascript,because in other langauges triple equal to is not there. Such a lame thing to do
//2. For some cases, it is like putting in a shield for something that isnt even required.
//EG:
let x = 10
console.log(typeof x)
console.log(typeof typeof x)

console.log(typeof typeof x == "string")
console.log(typeof typeof x === "string")
//Doing the triple equal to here is of no use as it is always going to result in the same thing.
//The typeof typeof x is always going to give the result as "string" so it is unnecessary to use the double equal to in this case.
