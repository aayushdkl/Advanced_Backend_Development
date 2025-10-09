function timeConsumingByloop() {
  console.log("Loop starts")

  for (let i = 0; i < 100000000; i++) {
    //some task
  }

  console.log("Loop ends")
}

function timeConsumingByRuntimeFeature() {
  console.log("Starting timer")
  setTimeout(function exec() {
    console.log("Completed the timer")
  }, 5000)
}
console.log("HI")

timeConsumingByloop()
timeConsumingByRuntimeFeature()
timeConsumingByloop()

console.log("BYE")

//Dry running the example:
//There is a call stack , heap memory and queues in the memory
//There are multiple queues given by javascript
//The setTimeOut result is set to the event queue, then after the loop ends then only the event queue is checked and implemented.
//Event loop: it keeps on checking whether the callstack is empty or not and no global code is left.

//Some terms: Call stack, event queue and event loop
//The complete story of this is:
//1. Global code is executed first and added to the call stack
//2. The function timeConsumingByloop is called and added to the call stack
//3. The loop starts executing and blocking the further execution of code
//4. After the loop ends, the function is removed from the call stack
//5. The function timeConsumingByRuntimeFeature is called and added to the call stack
//6. The setTimeout is called and the timer starts in the web api environment
//7. The function timeConsumingByRuntimeFeature is removed from the call stack
//8. The event loop checks whether the call stack is empty or not and if there is any function in the event queue
//9. After 5 seconds, the timer ends and the callback function is added to the event queue

//The event queue can only execute the function when the call stack is empty and no global code is left
