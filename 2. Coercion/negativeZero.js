//This is how we can check if the value is 0 or -0
//because general x==0 or x===0 dont work, they treat 0,-0 and +0 as same
//so we need to use Object.is method if we want to find out which zero we are using
let x = -0
console.log(x === 0)
console.log(Object.is(x, -0))
console.log(Object.is(x, 0))

//To check the sign
console.log(Math.sign(-3))
console.log(Math.sign(3))
console.log(Math.sign(0))
console.log(Math.sign(-0))
console.log(Math.sign(+0))

//Can we write a custom function that can gie the sign of a number properly?
function trueSign(y) {
  if (Object.is(y, -0)) return "-0"
  if (Object.is(y, 0)) return "0"
  return Math.sign(y)
}

console.log(trueSign(-0))
