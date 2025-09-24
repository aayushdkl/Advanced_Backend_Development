console.log(typeof [1, 2, 3, 4])
//arrays are also custom objects in JS. The meaning of custom object is that they are not predefined objects like Date, RegExp etc
//Custom objects means that they are created by us using object literals or constructor functions
//Index of the element is the key and the element itself is the value
//['abc','def','ghi'] => {0:'abc',1:'def',2:'ghi'}

//Higher order functions
//These are functions that depends and operates on other functions
//Higher order functions takes another function as an argument and then execute the logic
//Or return an function

//EG:
function gun() {}
function fun(gun) {
  //fun becomes a higher order function as it is taking an function as an argument
  gun()
}

//map function
//map is a higher order function available with arrays
//it takes a function as an argument -> f
//it returns an array in which every value is actually populated by calling funciton f with original array element as argument

function square(element) {
  return element * element
}
const arr = [1, 2, 3, 4, 5] //original array

const result = arr.map(square) //square is a function passed as an argument
/**
 * square(1) = 1
 * square(2) = 4
 * square(3) = 9
 * square(4) = 16
 * square(5) = 25
 */
console.log(result)

function cube(x) {
  return x * x * x
}

const result1 = arr.map(cube)
console.log(result1)

function evenOrOdd(x) {
  if (x % 2 == 0) {
    return "even"
  } else return "odd"
}

const resOfEvenOrOdd = arr.map(evenOrOdd)
console.log(resOfEvenOrOdd)
