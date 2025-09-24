function fun() {
  // function declaration: starts with the keyword function
  // some impl
}

let f = function gun() {
  //named function expression
  //first keyword is not function. So this is function expression
  // some impl
}
let a = (function () {
  //anonymous function expression
  // okk some more impl
})(
  //Below ones are called iife :immediately invoked function expression
  //It means i have written a funciton and immediately called it
  //Everyone of them is different
  function x() {
    //function expression
    // can you stop it ?
  }
)(function () {
  //function expression
  // i am done
})

//arrow functions

let y = () => {}
