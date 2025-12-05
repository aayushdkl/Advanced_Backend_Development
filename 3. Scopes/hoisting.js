gun()
function gun() {
  console.log("Shoot")
}

//Hoisting: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. This means that you can use functions and variables before they are actually declared in the code.
//In the above example, the function gun is called before its declaration. Due to hoisting, the function declaration is moved to the top of its scope, allowing it to be called before it appears in the code. As a result, "Shoot" is logged to the console without any errors.
//It's important to note that only function declarations and variable declarations (using var) are hoisted. Function expressions and variables declared with let or const are not hoisted in the same way. For example:

//It is physically not possible for a compiler to put things to the top of the code.So hoisting is a direct consequence of lexical scoping. The compiler first scans the code for variable and function declarations and sets them up in memory before executing the code. This gives the illusion that they have been "hoisted" to the top of their scope.
