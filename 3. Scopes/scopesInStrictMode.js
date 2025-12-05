var teacher = "Aayush" //global variable

function fun() {
  //function scope
  "use strict"
  content = "JS"
  var teacher = "Pulkit" //local variable within fun. This variable is not accessible outside fun.
  console.log(teacher)
}
function gun() {
  var student = "Sarthak"
  console.log(student)
}

// console.log(content) This throws an reference error
fun()
console.log(content) //This executes
gun()
console.log(teacher)

//Strict mode in javascript:
//In strict mode, we cannot use undeclared variables. It helps in catching common coding mistakes and unsafe actions such as defining global variables accidentally.
//To enable strict mode, we need to add "use strict"; at the beginning of the script or function.
// ;("use strict")
// var teacher1 = "Aayush" //global variable
// function fun1() {
//   //function scope
//   content1 = "JS" //This will throw an error in strict mode
//   var teacher1 = "Pulkit" //local variable within fun. This variable is not accessible outside fun.
//   console.log(teacher1)
// }
// function gun1() {
//   var student1 = "Sarthak"
//   console.log(student1)
// }

//Strict mode stops javascript from creating a auto globaling
