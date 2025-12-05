function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function createPromiseWithLoop() {
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 100000000000000; i++) {}
    let num = getRandomInt(10)
    if (num % 2 == 0) {
      // if the number is even we fulfill
      resolve(num)
    } else {
      // if the number is odd we reject
      reject(num)
    }
  })
}

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(() => {
      let num = getRandomInt(10)
      if (num % 2 == 0) {
        // if the number is even we fulfill
        resolve(num)
      } else {
        // if the number is odd we reject
        reject(num)
      }
    }, 5000)
  })
}
