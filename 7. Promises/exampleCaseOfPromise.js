function createPromise() {
  return new Promise(function execute(resolve, reject) {
    let x = setTimeout(() => {
      return 2
    }, 3000)
    if (x % 2 == 0) {
      resolve("successfulll")
    } else {
      resolve("rejected")
    }
  })
}
//This piece of code might behave differently on different platforms:vscode, browser
//SetTimeOut returns a timer id, it can be different everytime
//In browser it returns a timer id, in node it returns an object
