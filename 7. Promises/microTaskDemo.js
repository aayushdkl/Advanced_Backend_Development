function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the promise")
    resolve("Done")
  })
}

setTimeout(function process() {
  console.log("Timer completed")
}, 0)

let p = createPromise()
p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled with a value", value)
  },
  function rejectionHandler() {}
)

console.log("Ending")

//At any point of time , if event loop has a choice to pick from microtask queue or callback queue(macrotask queue) then it always gives preference to microtask queue
