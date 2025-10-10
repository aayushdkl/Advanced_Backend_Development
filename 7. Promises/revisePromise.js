//The promise constructor
//Simple normal javascript objects are promise
//They have 2 properties: value and state
//The default value is undefined and the default state is pending
//We use new Promsie to create  a promise

new Promise(function exec(res, rej) {})

//At the time the constructor generates a new promise object, it also generates a pair of function called as resolve and reject
//Generally the executor callback wraps some async/sync operations
//The executor is called synchronously
