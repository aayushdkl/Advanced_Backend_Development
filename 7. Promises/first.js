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
