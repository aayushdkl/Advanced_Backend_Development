function fun() {
  //fun ==> global scope
  var x = 10 // x==> belongs to the scope of fun
  function gun() {
    var y = 20 //y==> belongs to the scope of gun
    console.log(x)
    console.log(y)
  }
  gun()
  console.log(x)
  console.log(y)
}

fun()
//The above code will throw an error because y is not defined in the scope of fun. It is defined in the scope of gun.
// console.log(x) //This will throw an error because x is not defined in the global scope.
// console.log(y) //This will throw an error because y is not defined in the global scope.
//But if we define a function inside a function, the inner function can access the variables of the outer function. This is called lexical scoping.
//In nested scopes, inner function can access the variables of outer function but outer function cannot access the variables of inner function.

//console.log is not a javascript object, it is a runtime object
