/**
 * They are nothing but readability enhancers
 * How readable the code is
 * They make the code readable
 * They also help us to solve the problem of inversion of control (IOC)
 * In javascript promises are special type of objects that get returned immediately when we call them
 *
 *
 */
//Inversion of control demo:
function fun(x, callback) {
  for (let index = 0; index < x; index++) {
    callback()
  }
}

fun(10, function exec() {
  console.log("done")
})

//We are giving the control of our exec function to someone else
//We dont know how that function is going to be executed
//Promises acts as a placeholder for the data we hope to get back , sometime in future

//Lets say that there is a function :
x = fetch("http://www.xyz.com") //Lets say that this function downloads something for us
//And downloading is a time consuming task
// We dont know how much time it is gonna take

//If we assume that the fetch is written using promises then it will immediately return a promise object which will act as a placeholder
// x will act as a placeholder for the result
//Till the time the whole content is not downlaoded, the x acts as a placeholder
//In these promise object we can attach the functionality we want to execute once the feature task is done
//Once the future task is done, the promises will automatically execute the attached function

setTimeout(exec, 2000) //callback example
//Isnt this the same thing as call back,yes it is
// The inversion of control problem wil be solved by promises,that is the difference

//fetch using callback:
fetch("http://www.xyz.com", function exec() {
  console.log("done")
}) //Example of callback
//The difference is we have to attach the exec function immediately in the function itself
//In promises we do x= ...
//So we can use that after we recive, we donot have to write the feature then and there only we can use it further in the future unlike callbacks
