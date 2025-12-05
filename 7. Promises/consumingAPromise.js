//let p = fetch("")
//I can attach the functionality that i need to execute once the promise has fulfilled or rejected

//With our promise object, there is a function called .then
//p.then(fulfillmentHandler, rejectionHandler)
//These two are handler functions , that we have to implement ourselves
//That what should happen if the promise is fulfilled or if it is rejected, we need to mention it
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor")

    setTimeout(() => {
      let num = getRandomInt(10)
      if (num % 2 == 0) {
        // if the number is even we fulfill
        resolve(num)
      } else {
        // if the number is odd we reject
        reject(num)
      }
    }, 10000)
    console.log("Exiting the executor callback in the promise constructor")
  })
}

console.log("Starting...")
const p = createPromiseWithTimeout()
console.log("We are now waiting for the promise to be completed")
console.log("Currently the promise object is ", p)
//p.then(fulfillmentHandler, rejectionHandler)
p.then(
  function fulfillHandler(value) {
    console.log("inside fulfill handler with value", value)
    console.log("Promise after fulfillment is", p)
  },
  function rejectionHandler(value) {
    console.log("Promise after rejection is", p)
  }
)
