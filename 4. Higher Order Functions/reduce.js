/**
 * reduce is higher order function available for arrays
 * reduce also takes function f as an argument
 * what reduce does is, it one by one goes to every element of the aray
 * say the current element is arr[0]
 * reduce will pass this element to the the function f and accumulate the result of further function calls
 * with this particular result
 */

const arr = [1, 2, 3, 4, 5, 6]
function sum(prevResult, currValue) {
  //   console.log(prevResult, currValue)
  return prevResult + currValue
}

const res = arr.reduce(sum) //arr.reduce starts from index 1
// console.log(res)
/**
 * first element -> 2 , prevResult -> 1
 * second element -> 3 , prevResult -> 3
 * third element -> 4 , prevResult -> 6
 * fourth element -> 5 , prevResult -> 10
 * fifth element -> 6 , prevResult -> 15
 * final result -> 21
 */

//Real life application
/**
 * Cart -> [iphone {price: 1000, name:"Iphone" }, laptop {price: 2000, name:"Acer"}, mouse {price: 500,name:"Logitech"},
 * tempered glass{price: 200, name:"Tempered Glass"}]
 */

let cart = [
  { price: 1000, name: "Iphone" },
  { price: 2000, name: "Acer" },
  { price: 500, name: "Logitech" },
  { price: 200, name: "Tempered Glass" },
]

function totalPriceFunc(prevResult, currValue) {
  let newPrice = prevResult.price + currValue.price
  return { price: newPrice }
}
const totalPrice = cart.reduce(totalPriceFunc)
console.log(totalPrice.price)
