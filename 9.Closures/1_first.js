//Remembering your context
//We can return a function from a function
function process() {
  let i = 0
  function innerProcess() {
    i += 1
    return i
  }
  return innerProcess
}
//How the fuck is the function remembering the variable and how the fuck is it accessing the variable here
let res = process() //This line calls the function which returns another function
console.log(res)
console.log("The result of res function for first time:", res())
console.log("The result of res function for second time:", res())
console.log("The result of res function for third time:", res())
console.log("The result of res function for fourth time:", res())
console.log("The result of res function for fifth time:", res())

//The closure property remembers all those variables that are getting accessed , whose scope may be outside of function or inside , remembers the memory location of all those variables
//It makes them a persistent storage
//It remembers the actual variable not the copy, the actual value gets changed not the copy, basically kind of pointer to the variable
