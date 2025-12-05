function f() {
  return 1
}

function g() {
  return 2
}

var i = 10
//If we declare var res outside the blocks, it will be undefined because of hoisting, but if we declare it inside both the blocks, it will work fine. The thing is, if we declare it here, following thigs will happen:
//1. var res will be hoisted and initialized with undefined
//2. Then the if block will be executed, and since i is 10, which is even, the if block will be executed, and var res will be assigned the value of f(), which is 1

if (i % 2 == 0) {
  var res = f() //The reason we declare var res inside both the blocks is because of hoisting. If we declare it outside, it will be undefined.
} else {
  var res = g()
}

var res = (function evaluate(x) {
  if (x % 2 == 0) return f()
  else return g()
})(i)

console.log(res)
