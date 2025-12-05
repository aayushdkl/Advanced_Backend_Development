var teacher = "Aayush" //global variable

function fun() {
  //function scope
  var teacher = "Pulkit" //local variable within fun. This variable is not accessible outside fun.
  console.log(teacher)
}
function gun() {
  var student = "Sarthak"
  console.log(student)
}

fun()
gun()
console.log(teacher)

//Everytime we see a formal declaration, we think about the scope in parsing phase only.

function fun() {
  var i = 5
  while (i < 10) {
    var x = i
    i++
  }
  console.log(x)
}
fun()
