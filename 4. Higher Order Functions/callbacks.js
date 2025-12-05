//Higher order functions are functions which take another functions as arguments

function f(x, fn) {
  //x=> number
  //fn=> function
  console.log(x)
  console.log(fn) //[Function: exec]

  fn()
}

f(10, function exec() {
  console.log("I am an expression passed to a HOF")
})
