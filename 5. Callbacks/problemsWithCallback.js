/**
 * 1. Inversion of control (the biggest one)
 * 2. Callback hell --> Readability problem
 */
//callbackhell.com

//Inversion of control
let arr = [1, 10, 1000, 9, 2, 3, 4, 5, 6, 7, 8]

arr.sort(function compare(a, b) {
  //callback function
  return a - b
})

console.log(arr)

function doTask(x, fn) {
  //whole implementation is done by team A
  fn(x * x) //calling my callback with square of x
  //fn(x * x)
} //Team A

//Here team B tries to use it
doTask(10, function (num) {
  //Due to callbacks, I am passing control of how exec should be called to doTask
  //This is inversion of control
  //callback function
  console.log("The num is", num)
})
