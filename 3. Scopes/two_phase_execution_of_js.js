var teacher = "Aayush"

function fun() {
  var teacher = "Pulkit"
  console.log(teacher)

  function gun() {
    var student = "Sarthak"
    console.log(student)
  }
}

fun()
gun()
console.log(teacher)

//1st thing: Parsing
//Scope resolution:
//Types of scopes:
//1.Global scope: The variable declared outside any function or block is known as a global variable. It can be accessed from anywhere in the code.
//2.Function scope: The variable declared inside a function is known as a local variable. It can be accessed only within that function.
//3.Block scope: The variable declared inside a block (curly braces) is known as a block variable. It can be accessed only within that block.
//4.Module scope: The variable declared inside a module is known as a module variable. It can be accessed only within that module.

//1.Global scope

let name = "Aayush" //global variable
function fun1() {
  console.log(name) //Aayush
}
fun1()
console.log(name) //Aayush;

//2.Function scope
function fun2() {
  let age = 21 //local variable
  console.log(age) //21
}
fun2()
// console.log(age) //ReferenceError: age is not defined
//In the above example, the variable age is declared inside the function fun2. So, it can be accessed only within that function. If we try to access it outside the function, it will throw a ReferenceError.
