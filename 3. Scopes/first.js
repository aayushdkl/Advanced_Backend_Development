//Scope in javascript refers to the current context of code, which determines the accessibility of variables to JavaScript.
//Visibility of variables and functions in certain parts of the code during runtime is known as scope.
//There are two types of scope in JavaScript: Local Scope and Global Scope.

//Global Scope
//A variable declared outside a function, block, or any other curly braces is known as a global variable.
//A global variable has global scope which means it can be accessed from anywhere in the JavaScript code.
var a = 10 //global variable
function display() {
  console.log(a) //10
}
display()
console.log(a) //10

//Local Scope
//A variable declared within a function, block, or curly braces is known as a local variable.
//A local variable has local scope which means it can be accessed only within that function, block, or curly braces.
function show() {
  var b = 20 //local variable
  console.log(b) //20
}

//Every thing inside your code , will be used in one of the following two ways:
//i.Either it will be getting some value assigned to it.
//ii. Or some value will be retrieved from it.

//Do you think javascript is compiled or interpreted?
//Answer: Javascript is both compiled and interpreted.
//Javascript is first compiled into bytecode and then interpreted to machine code.
//This is done to improve the performance of javascript code.
//This is known as Just-In-Time (JIT) compilation.

//In javascript, the code is executed in two phases:
//1. Compilation Phase: In this phase, the javascript engine scans the entire code for variable and function declarations. It allocates memory for them and sets their initial values to undefined.
//2. Execution Phase: In this phase, the javascript engine executes the code line by line. It assigns values to variables and executes functions when they are called.
//This is known as Hoisting in javascript.
//Hoisting is a javascript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
//This means that you can use variables and functions before they are declared in the code.
console.log(x) //undefined
var x = 5
console.log(x) //5

//In the above example, the variable x is hoisted to the top of the code during the compilation phase. So, when we try to access it before its declaration, it returns undefined instead of throwing an error.

//However, if we use let or const to declare a variable, it will not be hoisted and will throw a ReferenceError if we try to access it before its declaration.
console.log(y) //ReferenceError: y is not defined
let y = 10
console.log(y) //10
//In the above example, the variable y is not hoisted and throws a ReferenceError when we try to access it before its declaration.

//Similarly, function declarations are also hoisted to the top of their containing scope during the compilation phase.
displayMessage() //Hello, World!
function displayMessage() {
  console.log("Hello, World!")
}
//In the above example, the function displayMessage is hoisted to the top of the code during the compilation phase. So, we can call it before its declaration without any error.

//However, if we use function expressions or arrow functions to declare a function, it will not be hoisted and will throw a TypeError if we try to call it before its declaration.
displayMessage2() //TypeError: displayMessage2 is not a function
var displayMessage2 = function () {
  console.log("Hello, World!")
}
displayMessage2() //Hello, World!

//In the above example, the function displayMessage2 is not hoisted and throws a TypeError when we try to call it before its declaration.
//Similarly, arrow functions are also not hoisted and will throw a TypeError if we try to call them before their declaration.
displayMessage3() //TypeError: displayMessage3 is not a function
var displayMessage3 = () => {
  console.log("Hello, World!")
}
displayMessage3() //Hello, World!

//In the above example, the arrow function displayMessage3 is not hoisted and throws a TypeError when we try to call it before its declaration.

//Javascript is not purely interpreted language, it is a combination of both compiled and interpreted language.

//Parsing phase (Compilation phase) : In this phase, the javascript engine scans the entire code for variable and function declarations. It allocates memory for them and sets their initial values to undefined.
//Execution phase : In this phase, the javascript engine executes the code line by line. It assigns values to variables and executes functions when they are called.
