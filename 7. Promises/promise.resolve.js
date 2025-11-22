console.log("Start of the file")

setTimeout(() => {
  console.log("timer one done")
}, 0)

for (let i = 0; i < 100000000; i++) {
  //something
}
function f() {
  return new Promise(function exec(res, rej) {
    res("Aayush's Promise")
  })
}
let x = Promise.resolve("Aayush's promise")
x.then(function processPromise(value) {
  console.log("Whose promise?", value)
})

setTimeout(() => {
  console.log("Timer 2 done")
}, 0)

console.log("End of the file")
