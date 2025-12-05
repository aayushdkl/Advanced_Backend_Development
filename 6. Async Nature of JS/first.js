//1. Js is sync in nature
//2. Js is single threaded

/**
 * 1. Js is sync in nature meaning that it executes code line by line, one at a time.
 * If we execute valid ecmascript code wihch has no async code, it will be executed line by line.
 * 2. Js is single threaded meaning it has one call stack and can do one thing at a time.
 * 3. Js can be async in nature using callbacks, promises, async/await.
 */

console.log("Start")
for (let i = 0; i < 1000000000; i++) {
  //   console.log(i)
}
console.log("End")
// Js is synchronous for the code that is native to the javascript , if it is functioning asynchronously, it is provided by the runtime not javascript
//Node, deno and browser are some examples of runtime
//2. Js is single threaded
//It has one call stack and can do one thing at a time.
