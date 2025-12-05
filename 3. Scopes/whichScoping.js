var teacher = "Aayush" //teacher -> global --> Aayush

function ask(question) {
  //ask --> global
  console.log(teacher, question)
}
function fun() {
  //fun--> global
  var teacher = "Pulkit" //teacher --> fun -->pulkit
  ask("why?")
  console.log(teacher)
}

fun()

//Lexical Scoping: In lexical scoping, the scope of a variable is determined by its position in the source code. Nested functions have access to variables declared in their outer scope. However, the outer function does not have access to the variables declared in the inner function.
//In the above example, the function ask is defined in the global scope, so it has access to the global variable teacher. When we call ask from within fun, it still refers to the global teacher variable, not the local one defined in fun. This is because ask was defined in the global scope and thus has access to the global variables.
//In lexical scoping, the scope of a variable is determined by its position in the source code. Nested functions have access to variables declared in their outer scope. However, the outer function does not have access to the variables declared in the inner function.
//In the above example, the function ask is defined in the global scope, so it has access to the global variable teacher. When we call ask from within fun, it still refers to the global teacher variable, not the local one defined in fun. This is because ask was defined in the global scope and thus has access to the global variables.
//If we want ask to access the local teacher variable defined in fun, we would need to define ask inside fun. This way, ask would be able to access the local variables of fun due to lexical scoping.

//Lexical scoping vs dynamic scoping:
//In lexical scoping, the scope of a variable is determined by its position in the source code. Nested functions have access to variables declared in their outer scope. However, the outer function does not have access to the variables declared in the inner function.
//In dynamic scoping, the scope of a variable is determined by the call stack at runtime. A function can access variables from the functions that called it, regardless of where it was defined in the source code.
//JavaScript uses lexical scoping, which means that the scope of a variable is determined by its position in the source code. Nested functions have access to variables declared in their outer scope. However, the outer function does not have access to the variables declared in the inner function.
//In the above example, the function ask is defined in the global scope, so it has access to the global variable teacher. When we call ask from within fun, it still refers to the global teacher variable, not the local one defined in fun. This is because ask was defined in the global scope and thus has access to the global variables.
//If JavaScript used dynamic scoping, then when we called ask from within fun, it would refer to the local teacher variable defined in fun, because fun is in the call stack when ask is executed. However, this is not how JavaScript works; it uses lexical scoping instead.
//In summary, lexical scoping is based on the structure of the code, while dynamic scoping is based on the call stack at runtime. JavaScript uses lexical scoping, which means that functions can access variables from their outer scopes, but not from the functions that called them.
