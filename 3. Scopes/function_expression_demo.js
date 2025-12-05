// let x = function () {
//   console.log("HI")
// }

// console.log(x)
// x()

//demo of iife
// ;(function x(y) {
//   console.log(`Hello ${y}`)
// })("Aayush")

//use case of named function expression
function fun(fn) {
  console.log("welcome to fun")
  fn() //This right here is a callback function, a function passed as an argument to another function
  //The fn was a parameter, now it is being invoked
  //The fn function was not defined in this scope, it was passed as an argument
  //So this is a use case of named function expression
  //A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
  //But there is no definition of fn, so what this function will do ?
  //It will give an error if we call fun without passing any argument
  //So we can pass an anonymous function as an argument
}

fun(function () {
  console.log("Wow so much fun")
  console.trace()
})

//For recursive cases, named functions are useful
